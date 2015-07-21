<?php

namespace Jsor;

use Jsor\LocaleData\InvalidLocaleException;

function localedata($locale = null)
{
    if (!$locale) {
        $locale = setlocale(LC_ALL, '0');
    }

    if ('C' === $locale) {
        $locale = 'POSIX';
    }

    $path = localedata_path().DIRECTORY_SEPARATOR.$locale.'.php';

    if (!file_exists($path)) {
        throw InvalidLocaleException::create($locale);
    }

    return include $path;
}

function localedata_path()
{
    return dirname(__DIR__).'/data';
}
