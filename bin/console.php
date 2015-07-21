#!/usr/bin/env php
<?php

require __DIR__.'/../vendor/autoload.php';

use Symfony\Component\Console\Application;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Yaml\Yaml;

function parse($path, $locale)
{
    static $cache;

    if (isset($cache[$locale])) {
        return $cache[$locale];
    }

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
            $copyFrom = parse($path, trim($value, '""'));

            $data[$currentCategory] = isset($copyFrom[$currentCategory]) ? $copyFrom[$currentCategory] : array();
            continue;
        }

        if (false !== strpos($value, ';')) {
            $value = array_map('value', explode(';', $value));
        } else {
            $value = value($value);
        }

        $data[$currentCategory][$key] = $value;
    }

    if ($emptyData === $data) {
        return;
    }

    return $cache[$locale] = $data;
}

function value($value)
{
    if ('""' === $value || '' === $value) {
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

function nullify($array)
{
    if (!is_array($array)) {
        return null;
    }

    foreach ($array as $key => &$value) {
        $value = nullify($value);
    }

    return $array;
}

$console = new Application('Localdata', '1.0.0');
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

        $localeData = array();
        $normalized = [];

        foreach ($locales as $locale) {
            $output->write('Processing locale <comment>'.$locale.'</comment>...');

            $data = parse($path, $locale);

            if (null === $data) {
                $output->writeln('<error>No data found</error>.');
                continue;
            }

            $localeData[$locale] = $data;

            $normalized = array_replace_recursive($normalized, $data);

            $output->writeln('<info>Done</info>.');
        }

        $normalized = nullify($normalized);

        foreach ($localeData as $locale => $data) {
            $filled = array_replace_recursive($normalized, $data);

            $output->write('Storing locale data for <comment>'.$locale.'</comment>...');

            file_put_contents(
                __DIR__.'/../data/'.$locale.'.json',
                json_encode($filled, JSON_PRETTY_PRINT).PHP_EOL
            );

            file_put_contents(
                __DIR__.'/../data/'.$locale.'.php',
                '<?php return '.var_export($filled, true).';'.PHP_EOL
            );

            file_put_contents(
                __DIR__.'/../data/'.$locale.'.yml',
                Yaml::dump($filled)
            );

            $output->writeln('<info>Done</info>.');
        }

        $output->writeln('<info>Finished processing '.count($localeData).' locales.</info>');
    })
;

$console->run();
