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
                self::getLastJsonError()
            );
        }

        return $data;
    }

    public function resolve($path, $locale)
    {
        return $path.'/'.$locale.'.json';
    }

    private static function getLastJsonError()
    {
        if (function_exists('json_last_error_msg')) {
            return json_last_error_msg();
        }

        static $errors = array(
            JSON_ERROR_NONE => null,
            JSON_ERROR_DEPTH => 'Maximum stack depth exceeded',
            JSON_ERROR_STATE_MISMATCH => 'Underflow or the modes mismatch',
            JSON_ERROR_CTRL_CHAR => 'Unexpected control character found',
            JSON_ERROR_SYNTAX => 'Syntax error, malformed JSON',
            JSON_ERROR_UTF8 => 'Malformed UTF-8 characters, possibly incorrectly encoded',
        );

        $error = json_last_error();

        return array_key_exists($error, $errors)
            ? $errors[$error]
            : sprintf('Unknown error (%s)', $error);
    }
}
