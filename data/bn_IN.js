(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['bn_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": null,
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
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
            "yesexpr": "^[\u09b9\u09cd\u09af\u09be\u0981yY]",
            "noexpr": "^[\u09a8\u09benN]",
            "yesstr": "\u09b9\u09cd\u09af\u09be\u0981",
            "nostr": "\u09a8\u09be"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20b9",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                2,
                3
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
            "name_mrs": "\u09b6\u09cd\u09b0\u09c0\u09ae\u09a4\u09c0",
            "name_miss": "\u0995\u09c1\u09ae\u09be\u09b0\u09c0",
            "name_ms": "\u09b6\u09cd\u09b0\u09c0\u09ae\u09a4\u09c0"
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
            "tel_int_fmt": "+%c ;%a ;%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "91"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u09b0\u09ac\u09bf",
                "\u09b8\u09cb\u09ae",
                "\u09ae\u0999\u09cd\u0997\u09b2",
                "\u09ac\u09c1\u09a7",
                "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf",
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
            "week": null,
            "abmon": [
                "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf",
                "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf",
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
                "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf",
                "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf",
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
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%I:%M:%S  %Z",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
