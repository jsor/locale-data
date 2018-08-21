(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['nn_NO'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Noreg",
            "country_post": null,
            "country_ab2": "NO",
            "country_ab3": "NOR",
            "country_num": 578,
            "country_car": "N",
            "country_isbn": null,
            "lang_name": "nynorsk",
            "lang_ab": "nn",
            "lang_term": "nno",
            "lang_lib": "nno"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1JjYy]",
            "noexpr": "^[-0Nn]",
            "yesstr": "ja",
            "nostr": "nei"
        },
        "LC_MONETARY": {
            "currency_symbol": "kr",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 3,
            "int_curr_symbol": "NOK ",
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
            "tel_int_fmt": "+%c %l",
            "tel_dom_fmt": "%l",
            "int_select": "00",
            "int_prefix": "47"
        },
        "LC_TIME": {
            "date_fmt": "%a %d. %b %H:%M:%S %z %Y",
            "abday": [
                "su.",
                "m\u00e5.",
                "ty.",
                "on.",
                "to.",
                "fr.",
                "la."
            ],
            "day": [
                "sundag ",
                "m\u00e5ndag ",
                "tysdag ",
                "onsdag ",
                "torsdag ",
                "fredag ",
                "laurdag "
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "jan.",
                "feb.",
                "mars",
                "april",
                "mai",
                "juni",
                "juli",
                "aug.",
                "sep.",
                "okt.",
                "nov.",
                "des."
            ],
            "mon": [
                "januar",
                "februar",
                "mars",
                "april",
                "mai",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "desember"
            ],
            "d_t_fmt": "%a %d. %b %Y kl. %H.%M %z",
            "d_fmt": "%d. %b %Y",
            "t_fmt": "kl. %H.%M %z",
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
