(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['fr_BE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Belgique",
            "country_post": null,
            "country_ab2": "BE",
            "country_ab3": "BEL",
            "country_num": 56,
            "country_car": "B",
            "country_isbn": null,
            "lang_name": "fran\u00e7ais",
            "lang_ab": "fr",
            "lang_term": "fra",
            "lang_lib": "fre"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1oOjJyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "oui",
            "nostr": "non"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
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
            "int_prefix": "32"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "dim",
                "lun",
                "mar",
                "mer",
                "jeu",
                "ven",
                "sam"
            ],
            "day": [
                "dimanche",
                "lundi",
                "mardi",
                "mercredi",
                "jeudi",
                "vendredi",
                "samedi"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "jan",
                "f\u00e9v",
                "mar",
                "avr",
                "mai",
                "jun",
                "jui",
                "ao\u00fb",
                "sep",
                "oct",
                "nov",
                "d\u00e9c"
            ],
            "mon": [
                "janvier",
                "f\u00e9vrier",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "ao\u00fbt",
                "septembre",
                "octobre",
                "novembre",
                "d\u00e9cembre"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d\/\/%m\/\/%y",
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
