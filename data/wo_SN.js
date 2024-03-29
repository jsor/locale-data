(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['wo_SN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Senegaal",
            "country_post": null,
            "country_ab2": "SN",
            "country_ab3": "SEN",
            "country_num": 686,
            "country_car": "SN",
            "country_isbn": null,
            "lang_name": "Wolof",
            "lang_ab": "wo",
            "lang_term": "wol",
            "lang_lib": "wol"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1wWyY]",
            "noexpr": "^[-0dDnN]",
            "yesstr": "waaw",
            "nostr": "d\u00e9edet"
        },
        "LC_MONETARY": {
            "currency_symbol": "CFA",
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
            "int_curr_symbol": "XOF ",
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
            "thousands_sep": "",
            "grouping": [
                0,
                0
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%a %l",
            "int_select": "00",
            "int_prefix": "221"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "dib",
                "alt",
                "tal",
                "all",
                "alx",
                "ajj",
                "gaa"
            ],
            "day": [
                "dib'eer",
                "altine",
                "talaata",
                "allarba",
                "alxames",
                "ajjuma",
                "gaawu"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "san",
                "fee",
                "mar",
                "awr",
                "me ",
                "suw",
                "sul",
                "uut",
                "sep",
                "okt",
                "now",
                "des"
            ],
            "mon": [
                "sanwiy'e",
                "feebriy'e",
                "mars",
                "awril",
                "me",
                "suwen",
                "sulet",
                "uut",
                "septaambar",
                "oktoobar",
                "nowaambar",
                "desaambar"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d.%m.%Y",
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
