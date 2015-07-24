<?php

namespace Jsor\LocaleData;

interface LocaleDataInterface
{
    /**
     * @return array
     */
    public function getLocales();

    /**
     * @return array
     */
    public function getAddressData($locale);

    /**
     * @return array
     */
    public function getMeasurementData($locale);

    /**
     * @return array
     */
    public function getMessagesData($locale);

    /**
     * @return array
     */
    public function getMonetaryData($locale);

    /**
     * @return array
     */
    public function getNameData($locale);

    /**
     * @return array
     */
    public function getNumericData($locale);

    /**
     * @return array
     */
    public function getPaperData($locale);

    /**
     * @return array
     */
    public function getTelephoneData($locale);

    /**
     * @return array
     */
    public function getTimeData($locale);
}
