<?php

namespace Jsor\LocaleData\Reader;

interface ReaderInterface
{
    const ROOT_LOCALE = 'root';

    public function read($path, $locale);
    public function resolve($path, $locale);
}
