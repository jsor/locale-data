(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['nan_TW@latin'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%r %e %h %s%N%z %T%N%c%N",
            "country_name": "T\u00e2i-o\u00e2n",
            "country_post": "TW",
            "country_ab2": "TW",
            "country_ab3": "TWN",
            "country_num": 158,
            "country_car": "RC",
            "country_isbn": 957,
            "lang_name": "B\u00e2n-l\u00e2m-g\u00fa",
            "lang_ab": null,
            "lang_term": "nan",
            "lang_lib": "nan"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYsS]",
            "noexpr": "^[-0nNmM]",
            "yesstr": "S\u012b",
            "nostr": "M\u0304-S\u012b"
        },
        "LC_MONETARY": {
            "currency_symbol": "NT$",
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
            "int_curr_symbol": "TWD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": 0,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": 0,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": "sian-si\u207f",
            "name_mrs": "l\u00fa-s\u016b",
            "name_miss": "ko\u0358-ni\u00fb",
            "name_ms": "si\u00f3-chi\u00e1"
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
            "tel_int_fmt": "+%c-%a-%l",
            "tel_dom_fmt": "%A-%l",
            "int_select": "00",
            "int_prefix": "886"
        },
        "LC_TIME": {
            "date_fmt": "%Y %b %d (%a) %H:%M:%S %Z",
            "abday": [
                "lp",
                "p1",
                "p2",
                "p3",
                "p4",
                "p5",
                "p6"
            ],
            "day": [
                "l\u00e9-p\u00e0i-ji\u030dt",
                "p\u00e0i-it",
                "p\u00e0i-j\u012b",
                "p\u00e0i-sa\u207f",
                "p\u00e0i-s\u00ec",
                "p\u00e0i-g\u014d\u0358",
                "p\u00e0i-la\u030dk"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "1g",
                "2g",
                "3g",
                "4g",
                "5g",
                "6g",
                "7g",
                "8g",
                "9g",
                "10g",
                "11g",
                "12g"
            ],
            "mon": [
                "1goe\u030dh",
                "2goe\u030dh",
                "3goe\u030dh",
                "4goe\u030dh",
                "5goe\u030dh",
                "6goe\u030dh",
                "7goe\u030dh",
                "8goe\u030dh",
                "9goe\u030dh",
                "10goe\u030dh",
                "11goe\u030dh",
                "12goe\u030dh"
            ],
            "d_t_fmt": "%Y %b %d (%a) %H:%M:%S %Z",
            "d_fmt": "%F",
            "t_fmt": "%r",
            "am_pm": [
                "t\u00e9ng-po\u0358",
                "\u0113-po\u0358"
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
