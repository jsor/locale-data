<?php

declare(strict_types=1);

namespace Jsor\LocaleData\Reader;

use Jsor\LocaleData\Exception\FileNotFoundException;
use Jsor\LocaleData\Exception\InvalidJsonException;
use Jsor\LocaleData\TestCase;

class JsonReaderTest extends TestCase
{
    /**
     * @test
     */
    public function read_returns_array(): void
    {
        $reader = new JsonReader();
        $data = $reader->read(__DIR__ . '/_fixtures', 'valid');

        $this->assertIsArray($data);
        $this->assertArrayHasKey('Foo', $data);
        $this->assertSame('Bar', $data['Foo']);
    }

    /**
     * @test
     */
    public function read_throws_for_non_existing_file(): void
    {
        $reader = new JsonReader();

        $this->expectException(FileNotFoundException::class);

        $reader->read(__DIR__ . '/_fixtures', 'foo');
    }

    /**
     * @test
     */
    public function read_throws_for_non_existing_directory(): void
    {
        $reader = new JsonReader();

        $this->expectException(FileNotFoundException::class);

        $reader->read(__DIR__ . '/non-existing', 'en');
    }

    /**
     * @test
     */
    public function read_throws_for_file_is_a_directory(): void
    {
        $reader = new JsonReader();

        $this->expectException(FileNotFoundException::class);

        $reader->read(__DIR__ . '/_fixtures', 'dir');
    }

    /**
     * @test
     */
    public function read_throws_for_invalid_json(): void
    {
        $reader = new JsonReader();

        $this->expectException(InvalidJsonException::class);

        $reader->read(__DIR__ . '/_fixtures', 'invalid');
    }
}
