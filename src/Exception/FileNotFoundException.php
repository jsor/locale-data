<?php

namespace Jsor\LocaleData\Exception;

class FileNotFoundException extends \RuntimeException
{
    public static function create($file)
    {
        $jsonOptions = 0;

        if (defined('JSON_UNESCAPED_SLASHES')) {
            $jsonOptions |= JSON_UNESCAPED_SLASHES;
        }

        return new self(
            sprintf(
                'The file%s %s could not be found.',
                is_array($file) ? 's' : '',
                json_encode($file, $jsonOptions)
            )
        );
    }
}
