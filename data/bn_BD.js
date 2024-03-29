(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['bn_BD'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T %z%N%c%N",
            "country_name": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6",
            "country_post": null,
            "country_ab2": "BD",
            "country_ab3": "BGD",
            "country_num": 50,
            "country_car": "BD",
            "country_isbn": null,
            "lang_name": "\u09ac\u09be\u0982\u09b2\u09be",
            "lang_ab": "bn",
            "lang_term": "ben",
            "lang_lib": "ben"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u09b9]",
            "noexpr": "^[-0nN\u09a8]",
            "yesstr": "\u09b9\u09cd\u09af\u09be\u0981",
            "nostr": "\u09a8\u09be"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u09f3",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                2
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "BDT ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%f%t%m%t%g",
            "name_gen": "",
            "name_mr": "\u099c\u09a8\u09be\u09ac",
            "name_mrs": "\u09ac\u09c7\u0997\u09ae",
            "name_miss": "\u09ac\u09c7\u0997\u09ae",
            "name_ms": "\u09ac\u09c7\u0997\u09ae"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": [
                3,
                2
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
            "int_prefix": "880"
        },
        "LC_TIME": {
            "date_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "abday": [
                "\u09b0\u09ac\u09bf",
                0,
                "\u09ae\u0999\u09cd\u0997\u09b2",
                "\u09ac\u09c1\u09a7",
                "\u09ac\u09c3\u09b9\u0983",
                "\u09b6\u09c1\u0995\u09cd\u09b0",
                "\u09b6\u09a8\u09bf"
            ],
            "day": [
                "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0",
                "\u09b8\u09cb\u09ae\u09ac\u09be\u09b0",
                "\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0",
                "\u09ac\u09c1\u09a7\u09ac\u09be\u09b0",
                "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0",
                "\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0",
                "\u09b6\u09a8\u09bf\u09ac\u09be\u09b0"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u099c\u09be\u09a8\u09c1",
                "\u09ab\u09c7\u09ac",
                "\u09ae\u09be\u09b0\u09cd\u099a",
                "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2",
                "\u09ae\u09c7",
                "\u099c\u09c1\u09a8",
                "\u099c\u09c1\u09b2\u09be\u0987",
                "\u0986\u0997\u09b8\u09cd\u099f",
                "\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0",
                "\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0",
                "\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0",
                "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"
            ],
            "mon": [
                "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0",
                "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0",
                "\u09ae\u09be\u09b0\u09cd\u099a",
                "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2",
                "\u09ae\u09c7",
                "\u099c\u09c1\u09a8",
                "\u099c\u09c1\u09b2\u09be\u0987",
                "\u0986\u0997\u09b8\u09cd\u099f",
                "\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0",
                "\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0",
                "\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0",
                "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p",
            "d_fmt": "%-d\/\/%-m\/\/%y",
            "t_fmt": "%I:%M:%S %p %Z",
            "am_pm": [
                "\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a3",
                "\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a3"
            ],
            "t_fmt_ampm": "%I:%M:%S %p %Z",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 6,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
