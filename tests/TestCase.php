<?php

namespace Jsor\LocaleData;

class TestCase extends \PHPUnit_Framework_TestCase
{
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

    public function provideYamlFiles()
    {
        return $this->provideFiles('yml');
    }

    public function provideFiles($type)
    {
        $path = __DIR__.'/../data';

        $locales = array_filter(scandir($path), function ($file) use ($type) {
            return '.' !== $file[0] && $type === pathinfo($file, PATHINFO_EXTENSION);
        });

        $locales = array_map(function ($file) use ($path) {
            return array($path.DIRECTORY_SEPARATOR.$file);
        }, $locales);

        return $locales;
    }

    public function assertData($data)
    {
        $this->assertInternalType('array', $data);

        $this->assertArrayHasKey('LC_MONETARY', $data);
        $this->assertArrayHasKey('LC_NUMERIC', $data);
        $this->assertArrayHasKey('LC_PAPER', $data);
        $this->assertArrayHasKey('LC_TELEPHONE', $data);
        $this->assertArrayHasKey('LC_ADDRESS', $data);
        $this->assertArrayHasKey('LC_MESSAGES', $data);
        $this->assertArrayHasKey('LC_NAME', $data);
        $this->assertArrayHasKey('LC_TIME', $data);
    }
}
