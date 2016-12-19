(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ml_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0d07\u0d28\u0d4d\u0d24\u0d4d\u0d2f",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
            "lang_ab": "ml",
            "lang_term": "mal",
            "lang_lib": "mal"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1\u0d05\u0d24\u0d46yY]",
            "noexpr": "^[-0\u0d05\u0d32\u0d4d\u0d32nN]",
            "yesstr": "\u0d05\u0d24\u0d46",
            "nostr": "\u0d05\u0d32\u0d4d\u0d32"
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
            "name_gen": "\u0d36\u0d4d\u0d30\u0d40",
            "name_mr": "\u0d36\u0d4d\u0d30\u0d40\u0d2e\u0d3e\u0d28\u0d41\u0d4d",
            "name_mrs": "\u0d36\u0d4d\u0d30\u0d40\u0d2e\u0d24\u0d3f",
            "name_miss": "\u0d15\u0d41\u0d2e\u0d3e\u0d30\u0d3f",
            "name_ms": "\u0d36\u0d4d\u0d30\u0d40\u0d2e\u0d24\u0d3f"
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
                "\u0d1e\u0d3e",
                "\u0d24\u0d3f",
                "\u0d1a\u0d4a",
                "\u0d2c\u0d41",
                "\u0d35\u0d4d\u0d2f\u0d3e",
                "\u0d35\u0d46",
                "\u0d36"
            ],
            "day": [
                "\u0d1e\u0d3e\u0d2f\u0d30\u0d4d\u200d",
                "\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d4d\u200d",
                "\u0d1a\u0d4a\u0d35\u0d4d\u0d35",
                "\u0d2c\u0d41\u0d27\u0d28\u0d4d\u200d",
                "\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02",
                "\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f",
                "\u0d36\u0d28\u0d3f"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0d1c\u0d28\u0d41",
                "\u0d2b\u0d46\u0d2c\u0d4d",
                "\u0d2e\u0d3e\u0d30\u0d4d\u200d",
                "\u0d0f\u0d2a\u0d4d\u0d30",
                "\u0d2e\u0d46",
                "\u0d1c\u0d42\u0d23\u0d4d\u200d",
                "\u0d1c\u0d42\u0d32\u0d48",
                "\u0d06\u0d17\u0d4d",
                "\u0d38\u0d46\u0d2a\u0d4d",
                "\u0d12\u0d15\u0d4d\u0d1f\u0d4b",
                "\u0d28\u0d35\u0d02",
                "\u0d21\u0d3f\u0d38\u0d02"
            ],
            "mon": [
                "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f",
                "\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f",
                "\u0d2e\u0d3e\u0d30\u0d4d\u200d\u0d1a\u0d4d\u0d1a\u0d4d",
                "\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d32\u0d4d\u200d ",
                "\u0d2e\u0d46\u0d2f\u0d4d",
                "\u0d1c\u0d42\u0d23\u0d4d\u200d",
                "\u0d1c\u0d42\u0d32\u0d48",
                "\u0d06\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d",
                "\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d30\u0d4d\u200d",
                "\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d30\u0d4d\u200d",
                "\u0d28\u0d35\u0d02\u0d2c\u0d30\u0d4d\u200d",
                "\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d30\u0d4d\u200d"
            ],
            "d_t_fmt": "%A %d %B %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %B %Y",
            "t_fmt": "%I:%M:%S  %Z",
            "am_pm": [
                "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46",
                "\u0d35\u0d48\u0d15\u0d41"
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
