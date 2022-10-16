(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['az_AZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "???",
            "country_name": "Az\u0259rbaycan",
            "country_post": null,
            "country_ab2": "AZ",
            "country_ab3": "AZE",
            "country_num": 31,
            "country_car": "AZ",
            "country_isbn": null,
            "lang_name": "az\u0259rbaycan",
            "lang_ab": "az",
            "lang_term": "aze",
            "lang_lib": "aze"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1bBhH]",
            "noexpr": "^[-0YyNn]",
            "yesstr": "h\u0259",
            "nostr": "yox"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20bc",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "AZN ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "???",
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
            "int_select": "00",
            "int_prefix": "994"
        },
        "LC_TIME": {
            "date_fmt": "%A, %d %B %Y %T %Z",
            "abday": [
                "baz",
                "ber",
                "\u00e7ax",
                "\u00e7\u0259r",
                "cax",
                "c\u00fcm",
                "\u015fnb"
            ],
            "day": [
                "bazar g\u00fcn\u00fc",
                "bazar ert\u0259si",
                "\u00e7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131",
                "\u00e7\u0259r\u015f\u0259nb\u0259",
                "c\u00fcm\u0259 ax\u015fam\u0131",
                "c\u00fcm\u0259",
                "\u015f\u0259nb\u0259"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Yan",
                "Fev",
                "Mar",
                "Apr",
                "May",
                "\u0130yn",
                "\u0130yl",
                "Avq",
                "Sen",
                "Okt",
                "Noy",
                "Dek"
            ],
            "mon": [
                "yanvar",
                "fevral",
                "mart",
                "aprel",
                "may",
                "iyun",
                "iyul",
                "avqust",
                "sentyabr",
                "oktyabr",
                "noyabr",
                "dekabr"
            ],
            "d_t_fmt": "%A, %d %B %Y %T",
            "d_fmt": "%d.%m.%Y",
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
