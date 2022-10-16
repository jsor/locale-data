<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Exception;

use RuntimeException;

use function is_array;

final class FileNotFoundException extends RuntimeException
{
    public static function create(
        array|string $file,
    ): self {
        return new self(
            sprintf(
                'The file%s %s could not be found.',
                is_array($file) ? 's' : '',
                json_encode(
                    $file,
                    JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES,
                ),
            ),
        );
    }
}
