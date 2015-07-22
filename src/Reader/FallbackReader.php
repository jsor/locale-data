<?php

namespace Jsor\LocaleData\Reader;

use Jsor\LocaleData\Exception\FileNotFoundException;

class FallbackReader implements ReaderInterface
{
    private $reader;

    public function __construct(ReaderInterface $reader)
    {
        $this->reader = $reader;
    }

    public function read($path, $locale)
    {
        $locales = array($locale);

        if (strlen($locale) > 2) {
            // en_US -> en
            $locales[] = substr($locale, 0, 2);
        }

        $locales[] = ReaderInterface::ROOT_LOCALE;

        $files = array();

        foreach ($locales as $locale) {
            try {
                return $this->reader->read($path, $locale);
            } catch (FileNotFoundException $e) {
                $files[] = $this->reader->resolve($path, $locale);
            }
        }

        throw FileNotFoundException::create($files);
    }

    public function resolve($path, $locale)
    {
        return $this->reader->resolve($path, $locale);
    }
}
