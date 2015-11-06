function LocaleData(locale) {
    return require('./data/' + locale);
}

LocaleData.locales = function() {
    return require('./data/meta').locales;
};

module.exports = LocaleData;
