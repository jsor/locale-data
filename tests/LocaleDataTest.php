<?php

namespace Jsor\LocaleData;

class LocaleDataTest extends TestCase
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
        $data = LocaleData::getInstance()->getAddressData(null);

        $this->assertData($data, 'LC_ADDRESS');
    }

    /**
     * @test
     */
    public function it_provides_address_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getAddressData('invalid');

        $this->assertData($data, 'LC_ADDRESS');
    }

    /**
     * @test
     * @dataProvider provideLocales
     */
    public function it_provides_measurement_data($locale)
    {
        $data = LocaleData::getInstance()->getMeasurementData($locale);

        $this->assertData($data, 'LC_MEASUREMENT');
    }

    /**
     * @test
     */
    public function it_provides_measurement_fallback_data()
    {
        $data = LocaleData::getInstance()->getMeasurementData(null);

        $this->assertData($data, 'LC_MEASUREMENT');
    }

    /**
     * @test
     */
    public function it_provides_measurement_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getMeasurementData('invalid');

        $this->assertData($data, 'LC_MEASUREMENT');
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
        $data = LocaleData::getInstance()->getMessagesData(null);

        $this->assertData($data, 'LC_MESSAGES');
    }

    /**
     * @test
     */
    public function it_provides_messages_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getMessagesData('invalid');

        $this->assertData($data, 'LC_MESSAGES');
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
        $data = LocaleData::getInstance()->getMonetaryData(null);

        $this->assertData($data, 'LC_MONETARY');
    }

    /**
     * @test
     */
    public function it_provides_monetary_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getMonetaryData('invalid');

        $this->assertData($data, 'LC_MONETARY');
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
        $data = LocaleData::getInstance()->getNameData(null);

        $this->assertData($data, 'LC_NAME');
    }

    /**
     * @test
     */
    public function it_provides_name_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getNameData('invalid');

        $this->assertData($data, 'LC_NAME');
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
        $data = LocaleData::getInstance()->getNumericData(null);

        $this->assertData($data, 'LC_NUMERIC');
    }

    /**
     * @test
     */
    public function it_provides_numeric_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getNumericData('invalid');

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
        $data = LocaleData::getInstance()->getPaperData(null);

        $this->assertData($data, 'LC_PAPER');
    }

    /**
     * @test
     */
    public function it_provides_paper_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getPaperData('invalid');

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
        $data = LocaleData::getInstance()->getTelephoneData(null);

        $this->assertData($data, 'LC_TELEPHONE');
    }

    /**
     * @test
     */
    public function it_provides_telephone_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getTelephoneData('invalid');

        $this->assertData($data, 'LC_TELEPHONE');
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
        $data = LocaleData::getInstance()->getTimeData(null);

        $this->assertData($data, 'LC_TIME');
    }

    /**
     * @test
     */
    public function it_provides_time_data_for_invalid_locale()
    {
        $data = LocaleData::getInstance()->getTimeData('invalid');

        $this->assertData($data, 'LC_TIME');
    }
}
