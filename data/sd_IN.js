(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sd_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0627\u0646\u068a\u064a\u0627",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0633\u0646\u068c\u064a",
            "lang_ab": "sd",
            "lang_term": "snd",
            "lang_lib": "snd"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1\u0646yY]",
            "noexpr": "^[-0\u0644nN]",
            "yesstr": "\u0646\u0639\u0645",
            "nostr": "\u0644\u0627"
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
            "name_mr": "\u0634\u0631\u064a",
            "name_mrs": "\u0634\u0631\u064a\u0645\u062a\u064a",
            "name_miss": "\u06aa\u0645\u0627\u0631\u064a",
            "name_ms": "\u06aa\u0645\u0627\u0631"
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
                "\u0622\u0631\u062a\u0648\u0627\u0631\u064f",
                "\u0633\u0648\u0645\u0631\u064f",
                "\u0645\u0646\u06af\u0644\u064f",
                "\u067b\u064f\u068c\u0631\u064f",
                "\u0648\u0633\u067e\u062a",
                "\u062c\u064f\u0645\u0648",
                "\u0687\u0646\u0687\u0631"
            ],
            "day": [
                "\u0622\u0631\u062a\u0648\u0627\u0631\u064f",
                "\u0633\u0648\u0645\u0631\u064f",
                "\u0645\u0646\u06af\u0644\u064f",
                "\u067b\u064f\u068c\u0631\u064f",
                "\u0648\u0633\u067e\u062a",
                "\u062c\u064f\u0645\u0648",
                "\u0687\u0646\u0687\u0631"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u062c\u0646\u0648\u0631\u064a",
                "\u0641\u0628\u0631\u0648\u0631\u064a",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u064a\u0644",
                "\u0645\u064a",
                "\u062c\u0648\u0646",
                "\u062c\u0648\u0644\u0627\u0621\u0650",
                "\u0622\u06af\u0633\u067d",
                "\u0633\u064a\u067e\u067d\u064a\u0645\u0628\u0631",
                "\u0622\u06aa\u067d\u0648\u0628\u0631",
                "\u0646\u0648\u0645\u0628\u0631",
                "\u068a\u0633\u0645\u0628\u0631"
            ],
            "mon": [
                "\u062c\u0646\u0648\u0631\u064a",
                "\u0641\u0628\u0631\u0648\u0631\u064a",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u064a\u0644",
                "\u0645\u064a",
                "\u062c\u0648\u0646",
                "\u062c\u0648\u0644\u0627\u0621\u0650",
                "\u0622\u06af\u0633\u067d",
                "\u0633\u064a\u067e\u067d\u064a\u0645\u0628\u0631",
                "\u0622\u06aa\u067d\u0648\u0628\u0631",
                "\u0646\u0648\u0645\u0628\u0631",
                "\u068a\u0633\u0645\u0628\u0631"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p",
            "d_fmt": "%-d\/\/%-m\/\/%y",
            "t_fmt": "%I:%M:%S %p %Z",
            "am_pm": [
                "AM",
                "PM"
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
