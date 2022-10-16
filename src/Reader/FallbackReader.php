<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Reader;

use Jsor\LocaleData\Exception\FileNotFoundException;

final class FallbackReader implements ReaderInterface
{
    private ReaderInterface $reader;

    public function __construct(ReaderInterface $reader)
    {
        $this->reader = $reader;
    }

    public function read(string $path, string $locale): array
    {
        $readLocales = [];

        if ('' !== $locale) {
            $readLocales[] = $locale;

            if (str_contains($locale, '_')) {
                // en_US -> en
                [$parent] = explode('_', $locale, 2);

                $readLocales[] = $parent;
            }
        }

        $readLocales[] = ReaderInterface::ROOT_LOCALE;

        $files = [];

        foreach ($readLocales as $readLocale) {
            try {
                return $this->reader->read($path, $readLocale);
            } catch (FileNotFoundException) {
                $files[] = $this->reader->resolve($path, $readLocale);
            }
        }

        throw FileNotFoundException::create($files);
    }

    public function resolve(string $path, string $locale): string
    {
        return $this->reader->resolve($path, $locale);
    }
}
