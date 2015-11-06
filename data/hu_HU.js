(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['hu_HU'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "HU",
            "country_ab3": "HUN",
            "country_num": 348,
            "country_car": "H",
            "country_isbn": null,
            "lang_name": "magyar",
            "lang_ab": "hu",
            "lang_term": "hun",
            "lang_lib": "hun"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[IiYy].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "Ft",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "HUF ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": 1,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": 1,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%d%t%f%t%m%t%g",
            "name_gen": null,
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": ".",
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
            "int_select": "00",
            "int_prefix": "36"
        },
        "LC_TIME": {
            "date_fmt": "%Y. %b. %e., %A, %H:%M:%S %Z",
            "abday": [
                "v",
                "h",
                "k",
                "sze",
                "cs",
                "p",
                "szo"
            ],
            "day": [
                "vas\u00e1rnap",
                "h\u00e9tf\u0151",
                "kedd",
                "szerda",
                "cs\u00fct\u00f6rt\u00f6k",
                "p\u00e9ntek",
                "szombat"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "jan",
                "febr",
                "m\u00e1rc",
                "\u00e1pr",
                "m\u00e1j",
                "j\u00fan",
                "j\u00fal",
                "aug",
                "szept",
                "okt",
                "nov",
                "dec"
            ],
            "mon": [
                "janu\u00e1r",
                "febru\u00e1r",
                "m\u00e1rcius",
                "\u00e1prilis",
                "m\u00e1jus",
                "j\u00fanius",
                "j\u00falius",
                "augusztus",
                "szeptember",
                "okt\u00f3ber",
                "november",
                "december"
            ],
            "d_t_fmt": "%Y. %b. %e., %A, %H:%M:%S %Z",
            "d_fmt": "%Y-%m-%d",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "%H:%M:%S",
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
