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

        if (false !== strpos($locale, '_')) {
            // en_US -> en
            list($parent) = explode('_', $locale, 2);

            $locales[] = $parent;
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
