(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ks_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u06c1\u0650\u0646\u065b\u062f\u0648\u0633\u062a\u0627\u0646",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "k\u1ea1\u0304\u0161ur",
            "lang_ab": "ks",
            "lang_term": "kas",
            "lang_lib": "kas"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1\u0622yY]",
            "noexpr": "^[-0\u0646nN]",
            "yesstr": "\u0622",
            "nostr": "\u0646\u0639"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20b9",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
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
            "name_mr": "\u062c\u0646\u0627\u0628",
            "name_mrs": "\u0645\u0633\u0645\u0627\u062a",
            "name_miss": "\u0645\u0633\u0645\u0627\u062a",
            "name_ms": "\u0645\u062d\u062a\u0631\u0645\u0647"
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
            "tel_int_fmt": "+%c ;%a ;%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "91"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0622\u062a\u0647\u0648\u0627\u0631",
                "\u0698\u0621\u0646\u062a\u0631\u0648\u0627\u0631",
                "\u0628\u0648\u0621\u06ba\u0648\u0627\u0631",
                "\u0628\u0648\u062f\u0647\u0648\u0627\u0631",
                "\u0628\u0631\u0649\u0633\u0648\u0627\u0631",
                "\u062c\u0645\u0639",
                "\u0628\u0679\u0648\u0627\u0631"
            ],
            "day": [
                "\u0622\u062a\u0647\u0648\u0627\u0631",
                "\u0698\u0621\u0646\u062f\u0631\u0648\u0627\u0631",
                "\u0628\u0648\u0621\u06ba\u0648\u0627\u0631",
                "\u0628\u0648\u062f\u0647\u0648\u0627\u0631",
                "\u0628\u0631\u0649\u0633\u0648\u0627\u0631",
                "\u062c\u0645\u0639",
                "\u0628\u0679\u0648\u0627\u0631"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u062c\u0646\u0648\u0631\u06cc",
                "\u0641\u0631\u0648\u0631\u06cc",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u06cc\u0644",
                "\u0645\u0626",
                "\u062c\u0648\u0646",
                "\u062c\u064f\u0644\u0626",
                "\u0627\u06af\u0633\u062a",
                "\u0633\u062a\u0646\u0628\u0631",
                "\u0627\u06a9\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u06ba\u0628\u0631",
                "\u062f\u0633\u0646\u0628\u0631"
            ],
            "mon": [
                "\u062c\u0646\u0648\u0631\u06cc",
                "\u0641\u0631\u0648\u0631\u06cc",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u06cc\u0644",
                "\u0645\u0626",
                "\u062c\u0648\u0646",
                "\u062c\u064f\u0644\u0626",
                "\u0627\u06af\u0633\u062a",
                "\u0633\u062a\u0646\u0628\u0631",
                "\u0627\u06a9\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u06ba\u0628\u0631",
                "\u062f\u0633\u0646\u0628\u0631"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%I:%M:%S  %Z",
            "am_pm": [
                "\u062f\u0648\u067e\u06be\u0631\u0628\u0631\u0648\u0646\u06be",
                "\u062f\u0648\u067e\u06be\u0631\u067e\u062a\u06be"
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
