#!/usr/bin/env php
<?php

namespace Jsor\LocaleData;

require __DIR__.'/../vendor/autoload.php';

use Symfony\Component\Console\Application;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;

class CopyFrom
{
    public $locale;

    public function __construct($locale)
    {
        $this->locale = $locale;
    }
}

function parse($path, $locale)
{
    $lines = file($path.'/'.$locale);

    $commentChar = '#';
    $escapeChar = '\\';

    $emptyData = $data = array(
        'LC_MONETARY' => array(),
        'LC_NUMERIC' => array(),
        'LC_PAPER' => array(),
        'LC_TELEPHONE' => array(),
        'LC_ADDRESS' => array(),
        'LC_MESSAGES' => array(),
        'LC_NAME' => array(),
        'LC_TIME' => array(),
    );

    $currentCategory = null;
    $currentLine = '';

    foreach ($lines as $line) {
        $line = trim($line);

        if ('' === $line) {
            continue;
        }

        if (0 === strpos($line, 'comment_char')) {
            $commentChar = trim(substr($line, 12));
            continue;
        }

        if (0 === strpos($line, 'escape_char')) {
            $escapeChar = trim(substr($line, 11));
            continue;
        }

        if ($commentChar === $line[0]) {
            continue;
        }

        if (0 === strpos($line, 'END LC_')) {
            $currentCategory = null;
            continue;
        }

        if (0 === strpos($line, 'LC_')) {
            $currentCategory = trim($line);
            continue;
        }

        if (!$currentCategory || !isset($data[$currentCategory])) {
            continue;
        }

        $currentLine .= $line;

        if ($escapeChar === substr($line, -1, 1)) {
            $currentLine = substr($currentLine, 0, -1);
            continue;
        }

        $parts = preg_split('/\s+/', $currentLine, 2);

        $currentLine = '';

        if (2 !== count($parts) || '' === $parts[0] || '' === $parts[1]) {
            continue;
        }

        list($key, $value) = $parts;

        if ('copy' === $key) {
            $data[$currentCategory] = new CopyFrom(trim($value, '""'));
            continue;
        }

        if (false !== strpos($value, ';')) {
            $value = array_map(__NAMESPACE__.'\\value', explode(';', $value));
        } else {
            $value = value($value);
        }

        $data[$currentCategory][$key] = $value;
    }

    if ($emptyData === $data) {
        return;
    }

    return $data;
}

function value($value)
{
    if ('' === $value) {
        return null;
    }

    if ('""' === $value) {
        return '';
    }

    if ('"' !== $value[0]) {
        if (false === strpos($value, '.')) {
            return (int) $value;
        }

        return (float) $value;
    }

    $value = trim($value, '""');

    $value = preg_replace_callback('/<([^>]+)>/', function ($matches) {
        return json_decode('"\\'.strtolower($matches[1]).'"');
    }, $value);

    return $value;
}

function indent($str, $indent = '    ')
{
    return implode(PHP_EOL, array_map(function($line) use($indent) {
        return $indent . $line;
    }, explode(PHP_EOL, $str)));
}

function js($name, $data)
{
    $json = trim(indent(json_encode($data, JSON_PRETTY_PRINT)));

    return <<<EOF
(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['{$name}'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {$json};
}));
EOF;
}

function store($name, array $data)
{
    file_put_contents(
        __DIR__.'/../data/'.$name.'.json',
        json_encode($data, JSON_PRETTY_PRINT).PHP_EOL
    );

    file_put_contents(
        __DIR__.'/../data/'.$name.'.js',
        js($name, $data).PHP_EOL
    );

    file_put_contents(
        __DIR__.'/../data/'.$name.'.php',
        '<?php return '.var_export($data, true).';'.PHP_EOL
    );
}

function processCategory(array $localeData, $locale, $category)
{
    $data = $localeData[$locale][$category];

    if ($data instanceof CopyFrom) {
        $data = processCategory($localeData, $data->locale, $category);
    }

    return $data;
}

function process(array $localeData, $locale)
{
    $data = array();

    foreach (array_keys($localeData[$locale]) as $category) {
        $data[$category] = processCategory($localeData, $locale, $category);
    }

    return $data;
}

$console = new Application('LocaleData', '3.0.0');
$console
    ->register('generate')
    ->setDefinition([
        new InputArgument('path', InputArgument::REQUIRED, 'The path to the glibc localedata/locales directory'),
    ])
    ->setDescription('Generate localedata files.')
    ->setCode(function (InputInterface $input, OutputInterface $output) {
        $path = $input->getArgument('path');

        if (!is_dir($path)) {
            $output->writeln('<error>Path "'.$path.'" not found.</error>');

            return;
        }

        $locales = array_filter(scandir($path), function ($path) {
            return '.' !== $path[0];
        });

        $root = include __DIR__.'/data_root.php';

        $localeData = array();

        foreach ($locales as $locale) {
            $output->write('Parsing locale <comment>'.$locale.'</comment>...');

            $data = parse($path, $locale);

            if (null === $data) {
                $output->writeln('<error>No data found</error>.');
                continue;
            }

            $localeData[$locale] = $data;

            $output->writeln('<info>Done</info>.');
        }

        foreach (array_keys($localeData) as $locale) {
            $output->write('Storing locale <comment>'.$locale.'</comment>...');

            $data = process($localeData, $locale);

            $filled = array_replace_recursive($root, $data);

            store($locale, $filled);

            $output->writeln('<info>Done</info>.');
        }

        $output->write('Storing root file...');

        store('root', $root);

        $output->writeln('<info>Done</info>.');

        $output->write('Storing meta file...');

        $meta = array(
            'locales' => array_keys($localeData)
        );

        store('meta', $meta);

        $output->writeln('<info>Done</info>.');

        $output->writeln('<info>Finished processing '.count($locales).' locales.</info>');
    })
;

$console->run();
