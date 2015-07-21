<?php

namespace Jsor\LocaleData;

use Symfony\Component\Yaml\Yaml;

class FileValidationTest extends TestCase
{
    /**
     * @test
     * @dataProvider providePhpFiles
     */
    public function all_php_files_are_valid($file)
    {
        $data = include $file;

        $this->assertData($data);
    }
    /**
     * @test
     * @dataProvider provideJsonFiles
     */
    public function all_json_files_are_valid($file)
    {
        $data = json_decode(file_get_contents($file), true);

        $this->assertData($data);
    }

    /**
     * @test
     * @dataProvider provideYamlFiles
     */
    public function all_yaml_files_are_valid($file)
    {
        $data = Yaml::parse(file_get_contents($file), true);

        $this->assertData($data);
    }
}
