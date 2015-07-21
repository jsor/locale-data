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
     */
    public function it_loads_from_system_locale()
    {
        $oldLocale = setlocale(LC_ALL, '0');

        switch (substr($oldLocale, 0, 2)) {
            case 'de':
                $useLocale = 'en_US';
                setlocale(LC_ALL, 'en_US', 'en');
                break;
            default:
                $useLocale = 'de_DE';
                setlocale(LC_ALL, 'de_DE@euro', 'de_DE', 'de', 'ge', 'deu_deu');
        }

        $data = Jsor\localedata();

        $this->assertData($data);

        $checkData = Jsor\localedata($useLocale);

        $this->assertSame($checkData, $data);

        setlocale(LC_ALL, $oldLocale);
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
