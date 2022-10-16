<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Reader;

use JsonException;
use Jsor\LocaleData\Exception\FileNotFoundException;
use Jsor\LocaleData\Exception\InvalidJsonException;

final class JsonReader implements ReaderInterface
{
    public function read(string $path, string $locale): array
    {
        $fileName = $this->resolve($path, $locale);

        if (!file_exists($fileName)) {
            throw FileNotFoundException::create($fileName);
        }

        if (!is_file($fileName)) {
            throw FileNotFoundException::create($fileName);
        }

        try {
            /** @var array $data */
            $data = json_decode(
                file_get_contents($fileName),
                true,
                512,
                JSON_THROW_ON_ERROR,
            );
        } catch (JsonException $e) {
            throw InvalidJsonException::create(
                $fileName,
                $e->getMessage(),
            );
        }

        return $data;
    }

    public function resolve(string $path, string $locale): string
    {
        return $path . '/' . $locale . '.json';
    }
}
