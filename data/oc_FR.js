(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['oc_FR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%d%N%f%N%d%N%b%N%s %h 5e %r%N%C%z %T%N%c%N",
            "country_name": "Fran\u00e7a",
            "country_post": "F",
            "country_ab2": "FR",
            "country_ab3": "FRA",
            "country_num": 250,
            "country_car": "F",
            "country_isbn": "979-10",
            "lang_name": "occitan",
            "lang_ab": "oc",
            "lang_term": "oci",
            "lang_lib": "oci"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1oOsSyY]",
            "noexpr": "^[-0nN]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": 3,
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
            "name_mr": "En",
            "name_mrs": "Na",
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": "\u202f",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%a %l",
            "int_select": "00",
            "int_prefix": "33"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "dg.",
                "dl.",
                "dm.",
                "dc.",
                "dj.",
                "dv.",
                "ds."
            ],
            "day": [
                "dimenge",
                "diluns",
                "dimars",
                "dim\u00e8cres",
                "dij\u00f2us",
                "divendres",
                "dissabte"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "gen.",
                "febr.",
                "mar\u00e7",
                "abr.",
                "mai",
                "junh",
                "jul.",
                "ago.",
                "set.",
                "oct.",
                "nov.",
                "dec."
            ],
            "mon": [
                "de geni\u00e8r",
                "de febri\u00e8r",
                "de mar\u00e7",
                "d\u2019abril",
                "de mai",
                "de junh",
                "de julhet",
                "d\u2019agost",
                "de setembre",
                "d\u2019oct\u00f2bre",
                "de novembre",
                "de decembre"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d\/\/%m\/\/%Y",
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
            "timezone": null,
            "alt_mon": [
                "geni\u00e8r",
                "febri\u00e8r",
                "mar\u00e7",
                "abril",
                "mai",
                "junh",
                "julhet",
                "agost",
                "setembre",
                "oct\u00f2bre",
                "novembre",
                "decembre"
            ]
        }
    };
}));
