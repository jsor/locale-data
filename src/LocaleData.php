<?php

namespace Jsor\LocaleData;

use Jsor\LocaleData\Reader\BufferedReader;
use Jsor\LocaleData\Reader\FallbackReader;
use Jsor\LocaleData\Reader\JsonReader;
use Jsor\LocaleData\Reader\ReaderInterface;

class LocaleData
{
    const BUFFER_SIZE = 10;

    /**
     * @var LocaleData
     */
    private static $instance;

    /**
     * @var string
     */
    private $path;

    /**
     * @var ReaderInterface
     */
    private $reader;

    public function __construct($path, ReaderInterface $reader)
    {
        $this->path = $path;
        $this->reader = $reader;
    }

    public function getLocales()
    {
        $data = $this->reader->read($this->path, 'meta');

        return $data['locales'];
    }

    public function getMonetaryData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_MONETARY'];
    }

    public function getNumericData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_NUMERIC'];
    }

    public function getPaperData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_PAPER'];
    }

    public function getTelephoneData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_TELEPHONE'];
    }

    public function getAddressData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_ADDRESS'];
    }

    public function getMessagesData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_MESSAGES'];
    }

    public function getNameData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_NAME'];
    }

    public function getTimeData($locale)
    {
        $data = $this->reader->read($this->path, $locale);

        return $data['LC_TIME'];
    }

    public static function getInstance()
    {
        if (null === self::$instance) {
            self::$instance = self::create();
        }

        return self::$instance;
    }

    public static function create()
    {
        return new self(
            self::getDataPath(),
            new BufferedReader(
                new FallbackReader(
                    new JsonReader()
                ),
                self::BUFFER_SIZE
            )
        );
    }

    public static function getDataPath()
    {
        return realpath(__DIR__.'/../data');
    }
}
