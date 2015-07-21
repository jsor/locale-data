<?php

namespace Jsor\LocaleData;

class LocaledataFunctionTest extends TestCase
{
    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_all_locales($locale)
    {
        $locales = LocaleData::getInstance()->getLocales();

        $this->assertContains($locale, $locales);
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_monetary_data($locale)
    {
        $data = LocaleData::getInstance()->getMonetaryData($locale);

        $this->assertData($data, 'LC_MONETARY');
    }

    /**
     * @test
     */
    public function it_provides_monetary_data_fallback_data()
    {
        $data = LocaleData::getInstance()->getMonetaryData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_MONETARY');
    }

    /**
     * @test
     */
    public function it_provides_monetary_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getMonetaryData('invalid'); // Length must be > 4 to not count as a locale
        
        $this->assertData($data, 'LC_MONETARY');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_numeric_data($locale)
    {
        $data = LocaleData::getInstance()->getNumericData($locale);

        $this->assertData($data, 'LC_NUMERIC');
    }

    /**
     * @test
     */
    public function it_provides_numeric_fallback_data()
    {
        $data = LocaleData::getInstance()->getNumericData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_NUMERIC');
    }

    /**
     * @test
     */
    public function it_provides_numeric_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getNumericData('invalid'); // Length must be > 4 to not count as a locale

        $this->assertData($data, 'LC_NUMERIC');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_paper_data($locale)
    {
        $data = LocaleData::getInstance()->getPaperData($locale);

        $this->assertData($data, 'LC_PAPER');
    }

    /**
     * @test
     */
    public function it_provides_paper_fallback_data()
    {
        $data = LocaleData::getInstance()->getPaperData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_PAPER');
    }

    /**
     * @test
     */
    public function it_provides_paper_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getPaperData('invalid'); // Length must be > 4 to not count as a locale

        $this->assertData($data, 'LC_PAPER');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_telephone_data($locale)
    {
        $data = LocaleData::getInstance()->getTelephoneData($locale);

        $this->assertData($data, 'LC_TELEPHONE');
    }

    /**
     * @test
     */
    public function it_provides_telephone_fallback_data()
    {
        $data = LocaleData::getInstance()->getTelephoneData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_TELEPHONE');
    }

    /**
     * @test
     */
    public function it_provides_telephone_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getTelephoneData('invalid'); // Length must be > 4 to not count as a locale

        $this->assertData($data, 'LC_TELEPHONE');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_address_data($locale)
    {
        $data = LocaleData::getInstance()->getAddressData($locale);

        $this->assertData($data, 'LC_ADDRESS');
    }

    /**
     * @test
     */
    public function it_provides_address_fallback_data()
    {
        $data = LocaleData::getInstance()->getAddressData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_ADDRESS');
    }

    /**
     * @test
     */
    public function it_provides_address_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getAddressData('invalid'); // Length must be > 4 to not count as a locale
        
        $this->assertData($data, 'LC_ADDRESS');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_messages_data($locale)
    {
        $data = LocaleData::getInstance()->getMessagesData($locale);

        $this->assertData($data, 'LC_MESSAGES');
    }

    /**
     * @test
     */
    public function it_provides_messages_fallback_data()
    {
        $data = LocaleData::getInstance()->getMessagesData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_MESSAGES');
    }

    /**
     * @test
     */
    public function it_provides_messages_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getMessagesData('invalid'); // Length must be > 4 to not count as a locale

        $this->assertData($data, 'LC_MESSAGES');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_name_data($locale)
    {
        $data = LocaleData::getInstance()->getNameData($locale);

        $this->assertData($data, 'LC_NAME');
    }

    /**
     * @test
     */
    public function it_provides_name_fallback_data()
    {
        $data = LocaleData::getInstance()->getNameData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_NAME');
    }

    /**
     * @test
     */
    public function it_provides_name_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getNameData('invalid'); // Length must be > 4 to not count as a locale

        $this->assertData($data, 'LC_NAME');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_time_data($locale)
    {
        $data = LocaleData::getInstance()->getTimeData($locale);

        $this->assertData($data, 'LC_TIME');
    }
    
    /**
     * @test
     */
    public function it_provides_time_fallback_data()
    {
        $data = LocaleData::getInstance()->getTimeData('foo'); // Length must be < 4 to count as a locale

        $this->assertData($data, 'LC_TIME');
    }

    /**
     * @test
     */
    public function it_provides_time_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getTimeData('invalid'); // Length must be > 4 to not count as a locale

        $this->assertData($data, 'LC_TIME');
    }
}
