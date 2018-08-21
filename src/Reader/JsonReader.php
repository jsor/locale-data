<?php

namespace Jsor\LocaleData\Reader;

use Jsor\LocaleData\Exception\FileNotFoundException;
use Jsor\LocaleData\Exception\InvalidJsonException;

class JsonReader implements ReaderInterface
{
    public function read($path, $locale)
    {
        $fileName = $this->resolve($path, $locale);

        if (!file_exists($fileName)) {
            throw FileNotFoundException::create($fileName);
        }

        if (!is_file($fileName)) {
            throw FileNotFoundException::create($fileName);
        }

        $data = json_decode(file_get_contents($fileName), true);

        if (null === $data) {
            throw InvalidJsonException::create(
                $fileName,
                json_last_error_msg()
            );
        }

        return $data;
    }

    public function resolve($path, $locale)
    {
        return $path.'/'.$locale.'.json';
    }
}
