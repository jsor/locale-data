(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['lv_LV'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Latvija",
            "country_post": null,
            "country_ab2": "LV",
            "country_ab3": "LVA",
            "country_num": 428,
            "country_car": "LV",
            "country_isbn": null,
            "lang_name": "latvie\u0161u valoda",
            "lang_ab": "lv",
            "lang_term": "lav",
            "lang_lib": "lav"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1JjYy]",
            "noexpr": "^[-0Nn]",
            "yesstr": "j\u0101",
            "nostr": "n\u0113"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u00a0",
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
            "p_sign_posn": 3,
            "n_sign_posn": 3,
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
            "thousands_sep": "\u00a0",
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
            "int_prefix": "371"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Sv",
                "P\u00a0",
                "O\u00a0",
                "T\u00a0",
                "C\u00a0",
                "Pk",
                "S\u00a0"
            ],
            "day": [
                "sv\u0113tdiena",
                "pirmdiena",
                "otrdiena",
                "tre\u0161diena",
                "ceturtdiena",
                "piektdiena",
                "sestdiena"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "jan",
                "feb",
                "mar",
                "apr",
                "mai",
                "j\u016bn",
                "j\u016bl",
                "aug",
                "sep",
                "okt",
                "nov",
                "dec"
            ],
            "mon": [
                "janv\u0101ris",
                "febru\u0101ris",
                "marts",
                "apr\u012blis",
                "maijs",
                "j\u016bnijs",
                "j\u016blijs",
                "augusts",
                "septembris",
                "oktobris",
                "novembris",
                "decembris"
            ],
            "d_t_fmt": "%A, %Y. gada %e. %B, plkst. %H un %M",
            "d_fmt": "%Y.%m.%d.",
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
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
