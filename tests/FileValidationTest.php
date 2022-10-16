<?php

declare(strict_types=1);

namespace Jsor\LocaleData;

class FileValidationTest extends TestCase
{
    public function assertFileData(mixed $data): void
    {
        $this->assertIsArray($data);

        $this->assertArrayHasKey('LC_ADDRESS', $data);
        $this->assertArrayHasKey('LC_MEASUREMENT', $data);
        $this->assertArrayHasKey('LC_MESSAGES', $data);
        $this->assertArrayHasKey('LC_MONETARY', $data);
        $this->assertArrayHasKey('LC_NAME', $data);
        $this->assertArrayHasKey('LC_NUMERIC', $data);
        $this->assertArrayHasKey('LC_PAPER', $data);
        $this->assertArrayHasKey('LC_TELEPHONE', $data);
        $this->assertArrayHasKey('LC_TIME', $data);
    }

    /**
     * @test
     *
     * @dataProvider providePhpFiles
     */
    public function all_php_files_are_valid(string $file): void
    {
        $data = include $file;

        $this->assertFileData($data);
    }

    /**
     * @test
     *
     * @dataProvider provideJsonFiles
     */
    public function all_json_files_are_valid(string $file): void
    {
        $data = json_decode(
            file_get_contents($file),
            true,
            512,
            JSON_THROW_ON_ERROR,
        );

        $this->assertFileData($data);
    }
}
