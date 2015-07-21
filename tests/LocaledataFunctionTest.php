<?php

namespace Jsor\LocaleData;

use Jsor;

class LocaledataFunctionTest extends TestCase
{
    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_loads_all_locales($locale)
    {
        $data = Jsor\localedata($locale);

        $this->assertData($data);
    }

    /**
     * @test
     */
    public function it_loads_c_locale()
    {
        $data = Jsor\localedata('C');

        $this->assertData($data);
    }

    /**
     * @test
     * @expectedException Jsor\LocaleData\InvalidLocaleException
     */
    public function it_throws_exception_for_invalid_locale()
    {
        Jsor\localedata('FOO');
    }
}
