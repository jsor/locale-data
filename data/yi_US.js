(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['yi_US'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%d%N%f%N%d%N%b%N%s %h 5e %r%N%C%z %T%N%c%N",
            "country_name": "\u05e4\u05bf\u05d0\u05b7\u05e8\u05d0\u05d9\u05d9\u05e0\u05d9\u05d2\u05d8\u05e2 \u05e9\u05d8\u05d0\u05b7\u05d8\u05df",
            "country_post": "USA",
            "country_ab2": "US",
            "country_ab3": "USA",
            "country_num": 840,
            "country_car": "USA",
            "country_isbn": "0",
            "lang_name": "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9",
            "lang_ab": "yi",
            "lang_term": "yid",
            "lang_lib": "yid"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u05d9]",
            "noexpr": "^[-0nN\u05e0\u05e7]",
            "yesstr": "\u05d9\u05d0\u05b8",
            "nostr": "\u05e7\u05f2\u05df"
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
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
            "int_curr_symbol": "USD ",
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
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
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
            "height": 279,
            "width": 216
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c (%a) %l",
            "tel_dom_fmt": "(%a) %l",
            "int_select": "11",
            "int_prefix": "1"
        },
        "LC_TIME": {
            "date_fmt": "%Z %H:%M:%S %Y %b %d %a",
            "abday": [
                "\u05d6\u05d5\u05e0'",
                "\u05de\u05d0\u05b8\u05e0'",
                "\u05d3\u05d9\u05e0'",
                "\u05de\u05d9\u05d8'",
                "\u05d3\u05d0\u05b8\u05e0'",
                "\u05e4\u05bf\u05e8\u05f2\u05b7'",
                "\u05e9\u05d1\u05ea"
            ],
            "day": [
                "\u05d6\u05d5\u05e0\u05d8\u05d9\u05e7",
                "\u05de\u05d0\u05b8\u05e0\u05d8\u05d9\u05e7",
                "\u05d3\u05d9\u05e0\u05e1\u05d8\u05d9\u05e7",
                "\u05de\u05d9\u05d8\u05f0\u05d0\u05b8\u05da",
                "\u05d3\u05d0\u05b8\u05e0\u05e2\u05e8\u05e9\u05d8\u05d9\u05e7",
                "\u05e4\u05bf\u05e8\u05f2\u05b7\u05d8\u05d9\u05e7",
                "\u05e9\u05d1\u05ea"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u05d9\u05d0\u05b7\u05e0",
                "\u05e4\u05bf\u05e2\u05d1",
                "\u05de\u05d0\u05b7\u05e8",
                "\u05d0\u05b7\u05e4\u05bc\u05e8",
                "\u05de\u05f2\u05b7 ",
                "\u05d9\u05d5\u05e0",
                "\u05d9\u05d5\u05dc",
                "\u05d0\u05f1\u05d2",
                "\u05e1\u05e2\u05e4\u05bc",
                "\u05d0\u05b8\u05e7\u05d8",
                "\u05e0\u05d0\u05b8\u05f0",
                "\u05d3\u05e2\u05e6"
            ],
            "mon": [
                "\u05d9\u05d0\u05b7\u05e0\u05d5\u05d0\u05b7\u05e8",
                "\u05e4\u05bf\u05e2\u05d1\u05e8\u05d5\u05d0\u05b7\u05e8",
                "\u05de\u05e2\u05e8\u05e5",
                "\u05d0\u05b7\u05e4\u05bc\u05e8\u05d9\u05dc",
                "\u05de\u05d9\u05d9",
                "\u05d9\u05d5\u05e0\u05d9",
                "\u05d9\u05d5\u05dc\u05d9",
                "\u05d0\u05d5\u05d9\u05d2\u05d5\u05e1\u05d8",
                "\u05e1\u05e2\u05e4\u05bc\u05d8\u05e2\u05de\u05d1\u05e2\u05e8",
                "\u05d0\u05e7\u05d8\u05d0\u05d1\u05e2\u05e8",
                "\u05e0\u05d0\u05d5\u05d5\u05e2\u05de\u05d1\u05e2\u05e8",
                "\u05d3\u05e2\u05e6\u05e2\u05de\u05d1\u05e2\u05e8"
            ],
            "d_t_fmt": "%H:%M:%S %Y %b %d %a",
            "d_fmt": "%d\/\/%m\/\/%y",
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
            "cal_direction": 3,
            "timezone": null
        }
    };
}));
