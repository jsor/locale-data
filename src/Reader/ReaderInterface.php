<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Reader;

interface ReaderInterface
{
    public const ROOT_LOCALE = 'root';

    public function read(string $path, string $locale): array;

    public function resolve(string $path, string $locale): string;
}
