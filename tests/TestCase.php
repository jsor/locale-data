<?php

namespace Jsor\LocaleData;

class TestCase extends \PHPUnit_Framework_TestCase
{
    private static $rootData;

    public function provideLocales()
    {
        return array_map(function ($file) {
            return array(pathinfo($file[0], PATHINFO_FILENAME));
        }, $this->provideFiles('json'));
    }

    public function providePhpFiles()
    {
        return $this->provideFiles('php');
    }

    public function provideJsonFiles()
    {
        return $this->provideFiles('json');
    }

    public function provideFiles($type)
    {
        $path = __DIR__.'/../data';

        $locales = array_filter(scandir($path), function ($file) use ($type) {
            if ('.' === $file[0]) {
                return false;
            }

            if (in_array(pathinfo($file, PATHINFO_FILENAME), array('root', 'meta'))) {
                return false;
            }

            return $type === pathinfo($file, PATHINFO_EXTENSION);
        });

        $locales = array_map(function ($file) use ($path) {
            return array($path.DIRECTORY_SEPARATOR.$file);
        }, $locales);

        return $locales;
    }

    public function provideCategories()
    {
        if (!self::$rootData) {
            self::$rootData = include __DIR__.'/../data/root.php';
        }

        return array_keys(self::$rootData);
    }

    public function provideEntries($category)
    {
        if (!self::$rootData) {
            self::$rootData = include __DIR__.'/../data/root.php';
        }

        $this->assertArrayHasKey($category, self::$rootData);

        return array_keys(self::$rootData[$category]);
    }

    public function assertData($data, $category)
    {
        foreach ($this->provideEntries($category) as $entry) {
            $this->assertArrayHasKey($entry, $data);
        }
    }
}
