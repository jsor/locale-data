<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Reader;

final class BufferedReader implements ReaderInterface
{
    private int $size;
    private array $values = [];
    private array $indices = [];
    private int $cursor = 0;

    private ReaderInterface $reader;

    public function __construct(
        ReaderInterface $reader,
        int $size,
    ) {
        $this->reader = $reader;
        $this->size = $size;
    }

    public function read(string $path, string $locale): array
    {
        $key = $path . '/' . $locale;

        if (!isset($this->indices[$key])) {
            $this->set($key, $this->reader->read($path, $locale));
        }

        return (array) ($this->values[(string) $this->indices[$key]] ?? []);
    }

    public function resolve(string $path, string $locale): string
    {
        return $this->reader->resolve($path, $locale);
    }

    private function set(string $key, mixed $value): void
    {
        if (false !== ($keyToRemove = array_search($this->cursor, $this->indices, true))) {
            unset(
                $this->values[(string) $this->indices[$keyToRemove]],
                $this->indices[$keyToRemove],
            );
        }

        $this->values[$this->cursor] = $value;
        $this->indices[$key] = $this->cursor;

        $this->cursor = ($this->cursor + 1) % $this->size;
    }
}
