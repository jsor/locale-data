(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['fi_FI@euro'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%d%N%b%N%a%N%s %h%t%e%t%r%N%z %T%N%c%N",
            "country_name": "Suomi",
            "country_post": "FI",
            "country_ab2": "FI",
            "country_ab3": "FIN",
            "country_num": 246,
            "country_car": "FIN",
            "country_isbn": 952,
            "lang_name": "suomi",
            "lang_ab": "fi",
            "lang_term": "fin",
            "lang_lib": "fin"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1KkYy]",
            "noexpr": "^[-0EeNn]",
            "yesstr": "kyll\u00e4",
            "nostr": "ei"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "EUR ",
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
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": "\u202f",
            "grouping": [
                3,
                3
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "(%A) %l",
            "int_select": "00",
            "int_prefix": "358"
        },
        "LC_TIME": {
            "date_fmt": "%a %-d.%-m.%Y %H.%M.%S %z",
            "abday": [
                "su",
                "ma",
                "ti",
                "ke",
                "to",
                "pe",
                "la"
            ],
            "day": [
                "sunnuntai",
                "maanantai",
                "tiistai",
                "keskiviikko",
                "torstai",
                "perjantai",
                "lauantai"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "tammi",
                "helmi",
                "maalis",
                "huhti",
                "touko",
                "kes\u00e4",
                "hein\u00e4",
                "elo",
                "syys",
                "loka",
                "marras",
                "joulu"
            ],
            "mon": [
                "tammikuu",
                "helmikuu",
                "maaliskuu",
                "huhtikuu",
                "toukokuu",
                "kes\u00e4kuu",
                "hein\u00e4kuu",
                "elokuu",
                "syyskuu",
                "lokakuu",
                "marraskuu",
                "joulukuu"
            ],
            "d_t_fmt": "%a %e. %Bta %Y %H.%M.%S",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%H.%M.%S",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
