(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['chr_US'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T, %S %z%N%c%N",
            "country_name": "\u13cc\u13ca \u13a2\u13f3\u13be\u13b5\u13cd\u13d4\u13c5 \u13cd\u13a6\u13da\u13a9",
            "country_post": "USA",
            "country_ab2": "US",
            "country_ab3": "USA",
            "country_num": 840,
            "country_car": "USA",
            "country_isbn": 0,
            "lang_name": "\u13e3\u13b3\u13a9",
            "lang_ab": "",
            "lang_term": "chr",
            "lang_lib": "chr"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^([+1yY]|\u13a5\u13a5)",
            "noexpr": "^([-0nN]|\u13a5\u13dd)",
            "yesstr": "\u13a5\u13a5",
            "nostr": "\u13a5\u13dd"
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
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "USD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": 1,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": 1,
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
            "date_fmt": "%a %d %b %Y %r %Z",
            "abday": [
                "\u13c6\u13cd\u13ac",
                "\u13c9\u13c5\u13af",
                "\u13d4\u13b5\u13c1",
                "\u13e6\u13a2\u13c1",
                "\u13c5\u13a9\u13c1",
                "\u13e7\u13be\u13a9",
                "\u13c8\u13d5\u13be"
            ],
            "day": [
                "\u13a4\u13be\u13d9\u13d3\u13c6\u13cd\u13ac",
                "\u13a4\u13be\u13d9\u13d3\u13c9\u13c5\u13af",
                "\u13d4\u13b5\u13c1\u13a2\u13a6",
                "\u13e6\u13a2\u13c1\u13a2\u13a6",
                "\u13c5\u13a9\u13c1\u13a2\u13a6",
                "\u13e7\u13be\u13a9\u13b6\u13cd\u13d7",
                "\u13a4\u13be\u13d9\u13d3\u13c8\u13d5\u13be"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u13a4\u13c3",
                0,
                "\u13a0\u13c5",
                0,
                "\u13a0\u13c2",
                0,
                "\u13ab\u13f0",
                0,
                "\u13da\u13b5",
                0,
                "\u13c5\u13d3",
                0
            ],
            "mon": [
                "\u13a4\u13c3\u13b8\u13d4\u13c5",
                "\u13a7\u13a6\u13b5",
                "\u13a0\u13c5\u13f1",
                "\u13a7\u13ec\u13c2",
                "\u13a0\u13c2\u13cd\u13ac\u13d8",
                "\u13d5\u13ad\u13b7\u13f1",
                "\u13ab\u13f0\u13c9\u13c2",
                "\u13a6\u13b6\u13c2",
                "\u13da\u13b5\u13cd\u13d7",
                "\u13da\u13c2\u13c5\u13d7",
                "\u13c5\u13d3\u13d5\u13c6",
                "\u13a5\u13cd\u13a9\u13f1"
            ],
            "d_t_fmt": "%a %d %b %Y %r",
            "d_fmt": "%m\/\/%d\/\/%Y",
            "t_fmt": "%r",
            "am_pm": [
                "\u13cc\u13be\u13b4",
                "\u13d2\u13af\u13f1\u13a2\u13d7\u13e2"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
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
