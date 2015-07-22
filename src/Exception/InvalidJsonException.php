<?php

namespace Jsor\LocaleData\Exception;

class InvalidJsonException extends \RuntimeException
{
    public static function create($file, $jsonError)
    {
        $jsonOptions = 0;

        if (defined('JSON_UNESCAPED_SLASHES')) {
            $jsonOptions |= JSON_UNESCAPED_SLASHES;
        }

        return new self(
            sprintf(
                'The file%s %s contains invalid JSON: %s.',
                is_array($file) ? 's' : '',
                json_encode($file, $jsonOptions),
                $jsonError
            )
        );
    }
}
