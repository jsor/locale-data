<?php

namespace Jsor\LocaleData;

class InvalidLocaleException extends \InvalidArgumentException
{
    public static function create($locale)
    {
        return new self(
            sprintf(
                'The locale %s is invalid.',
                json_encode($locale)
            )
        );
    }
}
