<?php

namespace Jsor\LocaleData\Reader;

class BufferedReader implements ReaderInterface
{
    private $size;
    private $values = array();
    private $indices = array();
    private $cursor = 0;

    private $reader;

    public function __construct(ReaderInterface $reader, $size)
    {
        $this->reader = $reader;
        $this->size = $size;
    }

    public function read($path, $locale)
    {
        $key = $path.'/'.$locale;

        if (!isset($this->indices[$key])) {
            $this->set($key, $this->reader->read($path, $locale));
        }

        return $this->values[$this->indices[$key]];
    }

    public function resolve($path, $locale)
    {
        return $this->reader->resolve($path, $locale);
    }

    private function set($key, $value)
    {
        if (false !== ($keyToRemove = array_search($this->cursor, $this->indices))) {
            unset($this->values[$this->indices[$keyToRemove]]);
            unset($this->indices[$keyToRemove]);
        }

        $this->values[$this->cursor] = $value;
        $this->indices[$key] = $this->cursor;

        $this->cursor = ($this->cursor + 1) % $this->size;
    }
}
