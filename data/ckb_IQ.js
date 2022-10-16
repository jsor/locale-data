(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ckb_IQ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0639\u06ce\u0631\u0627\u0642",
            "country_post": "IRQ",
            "country_ab2": "IQ",
            "country_ab3": "IRQ",
            "country_num": 368,
            "country_car": "IQ",
            "country_isbn": null,
            "lang_name": "\u06a9\u0648\u0631\u062f\u06cc\u06cc \u0646\u0627\u0648\u06d5\u0646\u062f\u06cc",
            "lang_ab": null,
            "lang_term": "ckb",
            "lang_lib": "ckb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0628]",
            "noexpr": "^[-0nN\u0646]",
            "yesstr": "\u0628\u06d5\u06b5\u06ce",
            "nostr": "\u0646\u06d5\u062e\u06ce\u0631"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u062f.\u0639",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "+",
            "negative_sign": "-",
            "frac_digits": 3,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 2,
            "int_curr_symbol": "IQD ",
            "int_frac_digits": 3,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": "\u0628\u06d5\u0695\u06ce\u0632",
            "name_mr": "\u0643\u0627\u0643",
            "name_mrs": "\u062e\u0627\u062a\u0648",
            "name_miss": "\u062e\u0627\u062a\u0648",
            "name_ms": "\u062e\u0627\u062a\u0648"
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
            "tel_int_fmt": "+%c %a%t%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "964"
        },
        "LC_TIME": {
            "date_fmt": "%A %d %B %Y, %Z %I:%M:%S %p",
            "abday": [
                "\u0634\u06d5\u0645",
                "\u06cc\u06d5\u06a9\u0634",
                "\u062f\u0648\u0648\u0634",
                "\u0633\u06ce\u0634",
                "\u0686\u0648\u0627\u0634",
                "\u067e\u06ce\u0646\u0634",
                "\u0647\u06d5\u06cc\u0646"
            ],
            "day": [
                "\u06cc\u06d5\u0643\u0634\u06d5\u0645\u0645\u06d5",
                "\u062f\u0648\u0648\u0634\u06d5\u0645\u0645\u06d5",
                "\u0633\u06ce\u0634\u06d5\u0645\u0645\u06d5",
                "\u0686\u0648\u0627\u0631\u0634\u06d5\u0645\u0645\u06d5",
                "\u067e\u06ce\u0646\u062c\u0634\u06d5\u0645\u0645\u06d5",
                "\u0647\u06d5\u06cc\u0646\u06cc",
                "\u0634\u06d5\u0645\u0645\u06d5"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u06a9\u0627\u0662",
                "\u0634\u0648\u0628",
                "\u0626\u0627\u0632",
                "\u0646\u06cc\u0633",
                "\u0626\u0627\u06cc",
                "\u062d\u0648\u0632",
                "\u062a\u06d5\u0645",
                "\u0626\u0627\u0628",
                "\u0626\u06d5\u06cc",
                "\u062a\u0634\u0661",
                "\u062a\u0634\u0662",
                "\u06a9\u0627\u0661"
            ],
            "mon": [
                "\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
                "\u0634\u0648\u0628\u0627\u062a",
                "\u0626\u0627\u0632\u0627\u0631",
                "\u0646\u06cc\u0633\u0627\u0646",
                "\u0626\u0627\u06cc\u0627\u0631",
                "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646",
                "\u062a\u06d5\u0645\u0648\u0632",
                "\u0626\u0627\u0628",
                "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644",
                "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645",
                "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
                "\u06a9\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"
            ],
            "d_t_fmt": "%A %d %b %Y, %I:%M:%S %p",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%Z %I:%M:%S %p",
            "am_pm": [
                "\u067e\u0646",
                "\u062f\u0646"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 7,
            "first_workday": 2,
            "cal_direction": 3,
            "timezone": null
        }
    };
}));
