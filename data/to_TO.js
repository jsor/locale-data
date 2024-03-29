(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['to_TO'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%b%s%c",
            "country_name": "Tonga",
            "country_post": "",
            "country_ab2": "TO",
            "country_ab3": "TON",
            "country_num": 776,
            "country_car": "TON",
            "country_isbn": null,
            "lang_name": "lea fakatonga",
            "lang_ab": "to",
            "lang_term": "ton",
            "lang_lib": "ton"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "\u02bbIo",
            "nostr": "\u02bbIkai"
        },
        "LC_MONETARY": {
            "currency_symbol": "T$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "TOP ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "676"
        },
        "LC_TIME": {
            "date_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "abday": [
                "S\u0101p",
                "M\u014dn",
                "T\u016bs",
                "Pul",
                "Tu\u02bba",
                "Fal",
                "Tok"
            ],
            "day": [
                "S\u0101pate",
                "M\u014dnite",
                "T\u016bsite",
                "Pulelulu",
                "Tu\u02bbapulelulu",
                "Falaite",
                "Tokonaki"
            ],
            "week": null,
            "abmon": [
                "S\u0101n",
                "F\u0113p",
                "Ma\u02bba",
                "\u02bbEpe",
                "M\u0113",
                "Sun",
                "Siu",
                "\u02bbAok",
                "Sep",
                "\u02bbOka",
                "N\u014dv",
                "T\u012bs"
            ],
            "mon": [
                "S\u0101nuali",
                "F\u0113pueli",
                "Ma\u02bbasi",
                "\u02bbEpeleli",
                "M\u0113",
                "Sune",
                "Siulai",
                "\u02bbAokosi",
                "Sepitema",
                "\u02bbOkatopa",
                "N\u014dvema",
                "T\u012bsema"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%I:%M:%S %p %Z",
            "am_pm": [
                "hengihengi",
                "efiafi"
            ],
            "t_fmt_ampm": "%I:%M:%S %p %Z",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
