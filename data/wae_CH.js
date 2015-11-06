(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['wae_CH'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Switzerland",
            "country_post": "DH",
            "country_ab2": "CH",
            "country_ab3": "CHE",
            "country_num": 756,
            "country_car": "DH",
            "country_isbn": 3,
            "lang_name": "Walser",
            "lang_ab": "",
            "lang_term": "wae",
            "lang_lib": "wae"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[jJyY].*",
            "noexpr": "^[nN].*",
            "yesstr": "Ja",
            "nostr": "Nei"
        },
        "LC_MONETARY": {
            "currency_symbol": "Fr.",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "'",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 4,
            "n_sign_posn": 4,
            "int_curr_symbol": "CHF ",
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
            "name_mr": "Herr",
            "name_mrs": "Fr\u00f6iw",
            "name_miss": "Fr\u00f6lein",
            "name_ms": "Fr\u00f6iw"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": "'",
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
            "tel_dom_fmt": null,
            "int_select": null,
            "int_prefix": "41"
        },
        "LC_TIME": {
            "date_fmt": "%a %-d %b %H:%M:%S %Z %Y",
            "abday": [
                "Sun",
                "M\u00e4n",
                "Zis",
                "Mit",
                "Fro",
                "Fri",
                "Sam"
            ],
            "day": [
                "Suntag",
                "M\u00e4ntag",
                "Zischtag",
                "Mittwuch",
                "Frontag",
                "Fritag",
                "Samschtag"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Jen",
                "Hor",
                "M\u00e4r",
                "Abr",
                "Mei",
                "Br\u00e1",
                "Hei",
                "\u00d6ig",
                "Her",
                "W\u00edm",
                "Win",
                "Chr"
            ],
            "mon": [
                "Jener",
                "Hornig",
                "M\u00e4rze",
                "Abrille",
                "Meije",
                "Br\u00e1chet",
                "Heiwet",
                "\u00d6igschte",
                "Herbschtm\u00e1net",
                "W\u00edm\u00e1net",
                "Winterm\u00e1net",
                "Chrischtm\u00e1net"
            ],
            "d_t_fmt": "%a %d. %b %Y %T %Z",
            "d_fmt": "%Y-%m-%d",
            "t_fmt": "%T",
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
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
