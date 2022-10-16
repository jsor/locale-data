<?php

declare(strict_types=1);

namespace Jsor\LocaleData;

use PHPUnit\Framework\TestCase as BaseTestCase;

use function in_array;

class TestCase extends BaseTestCase
{
    private static ?array $rootData = null;

    public function provideLocales(): array
    {
        return array_map(static function ($file) {
            return [pathinfo($file[0], PATHINFO_FILENAME)];
        }, $this->provideFiles('json'));
    }

    public function providePhpFiles(): array
    {
        return $this->provideFiles('php');
    }

    public function provideJsonFiles(): array
    {
        return $this->provideFiles('json');
    }

    public function provideFiles(string $type): array
    {
        $path = __DIR__ . '/../data';

        $locales = array_filter(scandir($path), static function ($file) use ($type) {
            if ('.' === $file[0]) {
                return false;
            }

            if (in_array(pathinfo($file, PATHINFO_FILENAME), ['root', 'meta'])) {
                return false;
            }

            return $type === pathinfo($file, PATHINFO_EXTENSION);
        });

        return array_map(static function (string $file) use ($path): array {
            return [$path . DIRECTORY_SEPARATOR . $file];
        }, $locales);
    }

    public function provideCategories(): array
    {
        if (!self::$rootData) {
            self::$rootData = include __DIR__ . '/../data/root.php';
        }

        return array_keys(self::$rootData);
    }

    public function provideEntries(string $category): array
    {
        if (!self::$rootData) {
            self::$rootData = include __DIR__ . '/../data/root.php';
        }

        $this->assertArrayHasKey($category, self::$rootData);

        return array_keys(self::$rootData[$category]);
    }

    public function assertData(array $data, string $category): void
    {
        foreach ($this->provideEntries($category) as $entry) {
            $this->assertArrayHasKey($entry, $data);
        }
    }
}
