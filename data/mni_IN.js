(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mni_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u09ad\u09be\u09b0\u09a4",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u09ae\u09c8\u09a4\u09c8\u09b2\u09cb\u09a8\u09cd",
            "lang_ab": null,
            "lang_term": "mni",
            "lang_lib": "mni"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "yes",
            "nostr": "no"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20b9",
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
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "INR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%f%t%g",
            "name_gen": "",
            "name_mr": "\u09b6\u09cd\u09b0\u09c0",
            "name_mrs": "\u09b6\u09cd\u09b0\u09c0\u09ae\u09a4\u09bf",
            "name_miss": "\u0995\u09c1\u09ae\u09be\u09b0\u09c0",
            "name_ms": "\u0995\u09c1\u09ae\u09be\u09b0"
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
            "tel_int_fmt": [
                "+%c ",
                0,
                0
            ],
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "91"
        },
        "LC_TIME": {
            "date_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "abday": [
                "\u09a8\u09cb\u0982",
                "\u09a8\u09bf\u0982",
                "\u09b2\u09c8\u09ac\u09be\u0995",
                "\u09df\u09c1\u09ae",
                "\u09b6\u0997\u09cb\u09b2",
                "\u0987\u09b0\u09be",
                "\u09a5\u09be\u0982"
            ],
            "day": [
                "\u09a8\u09cb\u0982\u09ae\u09be\u0987\u099c\u09bf\u0982",
                "\u09a8\u09bf\u0982\u09a5\u09cc\u0995\u09be\u09ac\u09be",
                "\u09b2\u09c8\u09ac\u09be\u0995\u09aa\u09cb\u0995\u09aa\u09be",
                "\u09df\u09c1\u09ae\u09b6\u0995\u09c8\u09b6\u09be",
                "\u09b6\u0997\u09cb\u09b2\u09b6\u09c7\u09a8",
                "\u0987\u09b0\u09be\u0987",
                "\u09a5\u09be\u0982\u099c"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u099c\u09be\u09a8",
                "\u09ab\u09c7\u09ac",
                "\u09ae\u09be\u09b0",
                "\u098f\u09aa\u09cd\u09b0\u09bf",
                "\u09ae\u09c7",
                "\u099c\u09c1\u09a8",
                "\u099c\u09c1\u09b2",
                "\u0986\u0997",
                "\u09b8\u09c7\u09aa",
                "\u0993\u0995\u09cd\u09a4",
                "\u09a8\u09ac\u09c7",
                "\u09a1\u09bf\u09b8"
            ],
            "mon": [
                "\u099c\u09be\u09a8\u09c1\u09f1\u09be\u09b0\u09bf",
                "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09f1\u09be\u09b0\u09bf",
                "\u09ae\u09be\u09b0\u09cd\u099a",
                "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2",
                "\u09ae\u09c7",
                "\u099c\u09c1\u09a8",
                "\u099c\u09c1\u09b2\u09be\u0987",
                "\u0986\u0997\u09b7\u09cd\u099f",
                "\u09b8\u09c7\u09aa\u09cd\u09a4\u09c7\u09ae\u09cd\u09ac\u09b0",
                "\u0993\u0995\u09cd\u09a4\u09cb\u09ac\u09b0",
                "\u09a8\u09ac\u09c7\u09ae\u09cd\u09ac\u09b0",
                "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p",
            "d_fmt": "%-d\/\/%-m\/\/%y",
            "t_fmt": "%I:%M:%S %p %Z",
            "am_pm": [
                "\u098f.\u09ae.",
                "\u09aa.\u09ae."
            ],
            "t_fmt_ampm": "%I:%M:%S %p %Z",
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
