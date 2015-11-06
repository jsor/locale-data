(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['he_IL'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "IL",
            "country_ab3": "ISR",
            "country_num": 376,
            "country_car": "IL",
            "country_isbn": null,
            "lang_name": null,
            "lang_ab": "he",
            "lang_term": "heb",
            "lang_lib": "heb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[Yy\u05db].*",
            "noexpr": "^[Nn\u05dc].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u05e9\u05d7",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
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
            "p_sign_posn": 2,
            "n_sign_posn": 2,
            "int_curr_symbol": "ILS ",
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
            "decimal_point": ".",
            "thousands_sep": ",",
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
            "int_prefix": "972"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u05d0'",
                "\u05d1'",
                "\u05d2'",
                "\u05d3'",
                "\u05d4'",
                "\u05d5'",
                "\u05e9'"
            ],
            "day": [
                "\u05e8\u05d0\u05e9\u05d5\u05df",
                "\u05e9\u05e0\u05d9",
                "\u05e9\u05dc\u05d9\u05e9\u05d9",
                "\u05e8\u05d1\u05d9\u05e2\u05d9",
                "\u05d7\u05de\u05d9\u05e9\u05d9",
                "\u05e9\u05d9\u05e9\u05d9",
                "\u05e9\u05d1\u05ea"
            ],
            "week": null,
            "abmon": [
                "\u05d9\u05e0\u05d5",
                "\u05e4\u05d1\u05e8",
                "\u05de\u05e8\u05e5",
                "\u05d0\u05e4\u05e8",
                "\u05de\u05d0\u05d9",
                "\u05d9\u05d5\u05e0",
                "\u05d9\u05d5\u05dc",
                "\u05d0\u05d5\u05d2",
                "\u05e1\u05e4\u05d8",
                "\u05d0\u05d5\u05e7",
                "\u05e0\u05d5\u05d1",
                "\u05d3\u05e6\u05de"
            ],
            "mon": [
                "\u05d9\u05e0\u05d5\u05d0\u05e8",
                "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8",
                "\u05de\u05e8\u05e5",
                "\u05d0\u05e4\u05e8\u05d9\u05dc",
                "\u05de\u05d0\u05d9",
                "\u05d9\u05d5\u05e0\u05d9",
                "\u05d9\u05d5\u05dc\u05d9",
                "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8",
                "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8",
                "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8",
                "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8",
                "\u05d3\u05e6\u05de\u05d1\u05e8"
            ],
            "d_t_fmt": "%Z %H:%M:%S %Y %b %d %a",
            "d_fmt": "%d\/%m\/%y",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M:%S %P",
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
