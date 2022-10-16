<?php

declare(strict_types=1);

namespace Jsor\LocaleData;

interface LocaleDataInterface
{
    public function getLocales(): array;

    public function getAddressData(string $locale): array;

    public function getMeasurementData(string $locale): array;

    public function getMessagesData(string $locale): array;

    public function getMonetaryData(string $locale): array;

    public function getNameData(string $locale): array;

    public function getNumericData(string $locale): array;

    public function getPaperData(string $locale): array;

    public function getTelephoneData(string $locale): array;

    public function getTimeData(string $locale): array;
}
