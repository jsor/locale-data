<?php

declare(strict_types=1);

namespace Jsor\LocaleData;

use Jsor\LocaleData\Reader\BufferedReader;
use Jsor\LocaleData\Reader\FallbackReader;
use Jsor\LocaleData\Reader\JsonReader;
use Jsor\LocaleData\Reader\ReaderInterface;
use RuntimeException;

use function dirname;

final class LocaleData implements LocaleDataInterface
{
    public const BUFFER_SIZE = 10;

    private static ?self $instance = null;

    private string $path;

    private ReaderInterface $reader;

    public function __construct(
        string $path,
        ReaderInterface $reader,
    ) {
        $this->path = $path;
        $this->reader = $reader;
    }

    public function getLocales(): array
    {
        $data = $this->reader->read($this->path, 'meta');

        return (array) $data['locales'];
    }

    public function getAddressData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_ADDRESS'];
    }

    public function getMeasurementData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_MEASUREMENT'];
    }

    public function getMessagesData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_MESSAGES'];
    }

    public function getMonetaryData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_MONETARY'];
    }

    public function getNameData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_NAME'];
    }

    public function getNumericData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_NUMERIC'];
    }

    public function getPaperData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_PAPER'];
    }

    public function getTelephoneData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_TELEPHONE'];
    }

    public function getTimeData(string $locale): array
    {
        $data = $this->reader->read($this->path, $locale);

        return (array) $data['LC_TIME'];
    }

    public static function getInstance(): self
    {
        if (null === self::$instance) {
            self::$instance = self::create();
        }

        return self::$instance;
    }

    public static function create(): self
    {
        return new self(
            self::getDataPath(),
            new BufferedReader(
                new FallbackReader(
                    new JsonReader(),
                ),
                self::BUFFER_SIZE,
            ),
        );
    }

    public static function getDataPath(): string
    {
        return dirname(__DIR__) . '/data' ?: throw new RuntimeException('Invalid data path ' . __DIR__ . '/../data');
    }
}
