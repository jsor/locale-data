<?php

namespace Jsor\LocaleData;

use Symfony\Component\Intl\Data\Bundle\Reader\BufferedBundleReader;
use Symfony\Component\Intl\Data\Bundle\Reader\BundleEntryReader;
use Symfony\Component\Intl\Data\Bundle\Reader\BundleEntryReaderInterface;
use Symfony\Component\Intl\Data\Bundle\Reader\JsonBundleReader;
use Symfony\Component\Intl\Exception\MissingResourceException;

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
     * @var BundleEntryReaderInterface
     */
    private $reader;

    public function __construct($path, BundleEntryReaderInterface $reader)
    {
        $this->path = $path;
        $this->reader = $reader;
    }

    public function getLocales()
    {
        return $this->reader->readEntry($this->path, 'meta', array('locales'));
    }

    public function getMonetaryData($locale)
    {
        return $this->read($locale, array('LC_MONETARY'));
    }

    public function getNumericData($locale)
    {
        return $this->read($locale, array('LC_NUMERIC'));
    }

    public function getPaperData($locale)
    {
        return $this->read($locale, array('LC_PAPER'));
    }

    public function getTelephoneData($locale)
    {
        return $this->read($locale, array('LC_TELEPHONE'));
    }

    public function getAddressData($locale)
    {
        return $this->read($locale, array('LC_ADDRESS'));
    }

    public function getMessagesData($locale)
    {
        return $this->read($locale, array('LC_MESSAGES'));
    }

    public function getNameData($locale)
    {
        return $this->read($locale, array('LC_NAME'));
    }

    public function getTimeData($locale)
    {
        return $this->read($locale, array('LC_TIME'));
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
        $entryReader = new BundleEntryReader(
            new BufferedBundleReader(
                new JsonBundleReader(),
                self::BUFFER_SIZE
            )
        );

        return new self(self::getDataPath(), $entryReader);
    }

    public static function getDataPath()
    {
        return realpath(__DIR__.'/../data');
    }

    private function read($locale, array $indices)
    {
        try {
            return $this->reader->readEntry($this->path, $locale, $indices);
        } catch (MissingResourceException $e) {
            return $this->reader->readEntry($this->path, 'POSIX', $indices);
        }
    }
}
