<?php

namespace Jsor\LocaleData\Reader;

use Jsor\LocaleData\TestCase;

class JsonReaderTest extends TestCase
{
    /**
     * @test
     */
    public function read_returns_array()
    {
        $reader = new JsonReader();
        $data = $reader->read(__DIR__.'/_fixtures', 'valid');

        $this->assertInternalType('array', $data);
        $this->assertArrayHasKey('Foo', $data);
        $this->assertSame('Bar', $data['Foo']);
    }

    /**
     * @test
     * @expectedException \Jsor\LocaleData\Exception\FileNotFoundException
     */
    public function read_throws_for_non_existing_file()
    {
        $reader = new JsonReader();
        $reader->read(__DIR__.'/_fixtures', 'foo');
    }

    /**
     * @test
     * @expectedException \Jsor\LocaleData\Exception\FileNotFoundException
     */
    public function read_throws_for_non_existing_directory()
    {
        $reader = new JsonReader();
        $reader->read(__DIR__.'/non-existing', 'en');
    }

    /**
     * @test
     * @expectedException \Jsor\LocaleData\Exception\FileNotFoundException
     */
    public function read_throws_for_file_is_a_directory()
    {
        $reader = new JsonReader();
        $reader->read(__DIR__.'/_fixtures', 'dir');
    }

    /**
     * @test
     * @expectedException \Jsor\LocaleData\Exception\InvalidJsonException
     */
    public function read_throws_for_invalid_json()
    {
        $reader = new JsonReader();
        $reader->read(__DIR__.'/_fixtures', 'invalid');
    }
}
