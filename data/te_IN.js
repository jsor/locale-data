(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['te_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%d%N%f%N%r%t%e%N%h%t%b%N%s%t%N%T%t%z%N%S%N%c",
            "country_name": "\u0c2d\u0c3e\u0c30\u0c24\u0c26\u0c47\u0c36\u0c02",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
            "lang_ab": "te",
            "lang_term": "tel",
            "lang_lib": "tel"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0c05]",
            "noexpr": "^[-0nN\u0c35]",
            "yesstr": "\u0c05\u0c35\u0c41\u0c28\u0c41",
            "nostr": "\u0c35\u0c26\u0c4d\u0c26\u0c41"
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
            "name_fmt": "%p%t%f%t%g%t%m",
            "name_gen": "",
            "name_mr": "\u0c36\u0c4d\u0c30\u0c40",
            "name_mrs": "\u0c36\u0c4d\u0c30\u0c40\u0c2e\u0c24\u0c3f",
            "name_miss": "\u0c15\u0c41\u0c2e\u0c3e\u0c30\u0c3f",
            "name_ms": ""
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
            "date_fmt": "%B %d %A %Y %p%I.%M.%S %Z",
            "abday": [
                "\u0c06\u0c26\u0c3f",
                "\u0c38\u0c4b\u0c2e",
                "\u0c2e\u0c02\u0c17\u0c33",
                "\u0c2c\u0c41\u0c27",
                "\u0c17\u0c41\u0c30\u0c41",
                "\u0c36\u0c41\u0c15\u0c4d\u0c30",
                "\u0c36\u0c28\u0c3f"
            ],
            "day": [
                "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02",
                "\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02",
                "\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02",
                "\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02",
                "\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02",
                "\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02",
                "\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0c1c\u0c28",
                "\u0c2b\u0c3f\u0c2c\u0c4d\u0c30",
                "\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f",
                "\u0c0f\u0c2a\u0c4d\u0c30\u0c3f",
                "\u0c2e\u0c47",
                "\u0c1c\u0c42\u0c28\u0c4d",
                "\u0c1c\u0c41\u0c32\u0c48",
                "\u0c06\u0c17",
                "\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02",
                "\u0c05\u0c15\u0c4d\u0c1f\u0c4b",
                "\u0c28\u0c35\u0c02",
                "\u0c21\u0c3f\u0c38\u0c46\u0c02"
            ],
            "mon": [
                "\u0c1c\u0c28\u0c35\u0c30\u0c3f",
                "\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f",
                "\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f",
                "\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d",
                "\u0c2e\u0c47",
                "\u0c1c\u0c42\u0c28\u0c4d",
                "\u0c1c\u0c41\u0c32\u0c48",
                "\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41",
                "\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d",
                "\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d",
                "\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d",
                "\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d"
            ],
            "d_t_fmt": "%B %d %A %Y %p%I.%M.%S",
            "d_fmt": "%d-%m-%y",
            "t_fmt": "%p%I.%M.%S %Z",
            "am_pm": [
                "\u0c09.",
                "\u0c38\u0c3e."
            ],
            "t_fmt_ampm": "%p%I.%M.%S %Z",
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
