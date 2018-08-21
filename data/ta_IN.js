(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ta_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
            "lang_ab": "ta",
            "lang_term": "tam",
            "lang_lib": "tam"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0b86]",
            "noexpr": "^[-0nN\u0b87]",
            "yesstr": "\u0b86\u0bae\u0bcd",
            "nostr": "\u0b87\u0bb2\u0bcd\u0bb2\u0bc8"
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
            "name_mr": "\u0ba4\u0bbf\u0bb0\u0bc1",
            "name_mrs": "\u0ba4\u0bbf\u0bb0\u0bc1\u0bae\u0ba4\u0bbf",
            "name_miss": "\u0b9a\u0bc6\u0bb2\u0bcd\u0bb5\u0bbf",
            "name_ms": "Ms."
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
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0b9e\u0bbe",
                "\u0ba4\u0bbf",
                "\u0b9a\u0bc6",
                "\u0baa\u0bc1",
                "\u0bb5\u0bbf",
                "\u0bb5\u0bc6",
                "\u0b9a"
            ],
            "day": [
                "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1",
                "\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                "\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd",
                "\u0baa\u0bc1\u0ba4\u0ba9\u0bcd",
                "\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd",
                "\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf",
                "\u0b9a\u0ba9\u0bbf"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0b9c\u0ba9.",
                "\u0baa\u0bbf\u0baa\u0bcd.",
                "\u0bae\u0bbe\u0bb0\u0bcd.",
                "\u0b8f\u0baa\u0bcd.",
                "\u0bae\u0bc7",
                "\u0b9c\u0bc2\u0ba9\u0bcd",
                "\u0b9c\u0bc2\u0bb2\u0bc8",
                "\u0b86\u0b95.",
                "\u0b9a\u0bc6\u0baa\u0bcd.",
                "\u0b85\u0b95\u0bcd.",
                "\u0ba8\u0bb5.",
                "\u0b9f\u0bbf\u0b9a."
            ],
            "mon": [
                "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf",
                "\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf",
                "\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd",
                "\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd",
                "\u0bae\u0bc7",
                "\u0b9c\u0bc2\u0ba9\u0bcd",
                "\u0b9c\u0bc2\u0bb2\u0bc8",
                "\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd",
                "\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd",
                "\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd",
                "\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd",
                "\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd"
            ],
            "d_t_fmt": "%A %d %B %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %B %Y",
            "t_fmt": "%I:%M:%S  %Z",
            "am_pm": [
                "\u0b95\u0bbe\u0bb2\u0bc8",
                "\u0bae\u0bbe\u0bb2\u0bc8"
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
