<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Exception;

use RuntimeException;

final class InvalidJsonException extends RuntimeException
{
    public static function create(
        string $file,
        string $jsonError,
    ): self {
        return new self(
            sprintf(
                'The file %s contains invalid JSON: %s.',
                json_encode(
                    $file,
                    JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES,
                ),
                $jsonError,
            ),
        );
    }
}
