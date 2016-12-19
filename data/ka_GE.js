(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ka_GE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%d%N%f%N%d%N%b%N%s %h 5e %r%N%C%z %T%N%c%N",
            "country_name": "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd",
            "country_post": null,
            "country_ab2": "GE",
            "country_ab3": "GEO",
            "country_num": 268,
            "country_car": "GE",
            "country_isbn": "99928",
            "lang_name": "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
            "lang_ab": "ka",
            "lang_term": "kat",
            "lang_lib": "geo"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYkKxX\u10ee]",
            "noexpr": "^[-0nNaA\u10d0]",
            "yesstr": "\u10d9\u10d8",
            "nostr": "\u10d0\u10e0\u10d0"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20be",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "GEL ",
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
            "int_select": "8~10",
            "int_prefix": "995"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u10d9\u10d5\u10d8",
                "\u10dd\u10e0\u10e8",
                "\u10e1\u10d0\u10db",
                "\u10dd\u10d7\u10ee",
                "\u10ee\u10e3\u10d7",
                "\u10de\u10d0\u10e0",
                "\u10e8\u10d0\u10d1"
            ],
            "day": [
                "\u10d9\u10d5\u10d8\u10e0\u10d0",
                "\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
                "\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
                "\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
                "\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
                "\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8",
                "\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u10d8\u10d0\u10dc",
                "\u10d7\u10d4\u10d1",
                "\u10db\u10d0\u10e0",
                "\u10d0\u10de\u10e0",
                "\u10db\u10d0\u10d8",
                "\u10d8\u10d5\u10dc",
                "\u10d8\u10d5\u10da",
                "\u10d0\u10d2\u10d5",
                "\u10e1\u10d4\u10e5",
                "\u10dd\u10e5\u10e2",
                "\u10dc\u10dd\u10d4",
                "\u10d3\u10d4\u10d9"
            ],
            "mon": [
                "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8",
                "\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8",
                "\u10db\u10d0\u10e0\u10e2\u10d8",
                "\u10d0\u10de\u10e0\u10d8\u10da\u10d8",
                "\u10db\u10d0\u10d8\u10e1\u10d8",
                "\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8",
                "\u10d8\u10d5\u10da\u10d8\u10e1\u10d8",
                "\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd",
                "\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8",
                "\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8",
                "\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8",
                "\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"
            ],
            "d_t_fmt": "%Y \u10ec\u10da\u10d8\u10e1 %d %B, %T %Z",
            "d_fmt": "%m\/%d\/%Y",
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
