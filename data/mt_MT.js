(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mt_MT'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Malta",
            "country_post": null,
            "country_ab2": "MT",
            "country_ab3": "MLT",
            "country_num": 470,
            "country_car": "M",
            "country_isbn": null,
            "lang_name": "Malti",
            "lang_ab": "mt",
            "lang_term": "mlt",
            "lang_lib": "mlt"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYiI]",
            "noexpr": "^[-0nNlL]",
            "yesstr": "iva",
            "nostr": "le"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
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
            "name_fmt": "%p%t%f%t%g",
            "name_gen": "",
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
            "tel_int_fmt": [
                "+%c ",
                0,
                0
            ],
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "356"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0126ad",
                "Tne",
                "Tli",
                "Erb",
                "\u0126am",
                "\u0120im",
                "Sib"
            ],
            "day": [
                "il-\u0126add",
                "it-Tnejn",
                "it-Tlieta",
                "l-Erbg\u0127a",
                "il-\u0126amis",
                "il-\u0120img\u0127a",
                "is-Sibt"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Jan",
                "Fra",
                "Mar",
                "Apr",
                "Mej",
                "\u0120un",
                "Lul",
                "Aww",
                "Set",
                "Ott",
                "Nov",
                "Di\u010b"
            ],
            "mon": [
                "Jannar",
                "Frar",
                "Marzu",
                "April",
                "Mejju",
                "\u0120unju",
                "Lulju",
                "Awwissu",
                "Settembru",
                "Ottubru",
                "Novembru",
                "Di\u010bembru"
            ],
            "d_t_fmt": "%A, %d ta %b, %Y %H:%M:%S %Z",
            "d_fmt": "%A, %d ta %b, %Y",
            "t_fmt": "%H:%M:%S %Z",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
