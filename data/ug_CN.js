(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ug_CN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%c%N%T%N%s %h %e %r%N%b%N%d%N%f%N%a%N",
            "country_name": "\u062c\u06c7\u06ad\u06af\u0648",
            "country_post": null,
            "country_ab2": "CN",
            "country_ab3": "CHN",
            "country_num": 156,
            "country_car": "CHN",
            "country_isbn": 7,
            "lang_name": "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5",
            "lang_ab": "ug",
            "lang_term": "uig",
            "lang_lib": "uig"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u06be]",
            "noexpr": "^[-0nN\u064a]",
            "yesstr": "\u06be\u06d5\u0626\u06d5",
            "nostr": "\u064a\u0627\u0642"
        },
        "LC_MONETARY": {
            "currency_symbol": "\uffe5",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 4,
            "n_sign_posn": 4,
            "int_curr_symbol": "CNY ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": 0,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": 0,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%p%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
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
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "0%a %l",
            "int_select": "00",
            "int_prefix": "86"
        },
        "LC_TIME": {
            "date_fmt": "%a\u060c %d-%m-%Y\u060c %T",
            "abday": [
                "\u064a",
                "\u062f",
                "\u0633",
                "\u0686",
                "\u067e",
                "\u062c",
                "\u0634"
            ],
            "day": [
                "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5",
                "\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5",
                "\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5",
                "\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5",
                "\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5",
                "\u062c\u06c8\u0645\u06d5",
                "\u0634\u06d5\u0646\u0628\u06d5"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u064a\u0627\u0646\u06cb\u0627\u0631",
                "\u0641\u06d0\u06cb\u0631\u0627\u0644",
                "\u0645\u0627\u0631\u062a",
                "\u0626\u0627\u067e\u0631\u06d0\u0644",
                "\u0645\u0627\u064a",
                "\u0626\u0649\u064a\u06c7\u0646",
                "\u0626\u0649\u064a\u06c7\u0644",
                "\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a",
                "\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631",
                "\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631",
                "\u0646\u0648\u064a\u0627\u0628\u0649\u0631",
                "\u062f\u06d0\u0643\u0627\u0628\u0649\u0631"
            ],
            "mon": [
                "\u064a\u0627\u0646\u06cb\u0627\u0631",
                "\u0641\u06d0\u06cb\u0631\u0627\u0644",
                "\u0645\u0627\u0631\u062a",
                "\u0626\u0627\u067e\u0631\u06d0\u0644",
                "\u0645\u0627\u064a",
                "\u0626\u0649\u064a\u06c7\u0646",
                "\u0626\u0649\u064a\u06c7\u0644",
                "\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a",
                "\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631",
                "\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631",
                "\u0646\u0648\u064a\u0627\u0628\u0649\u0631",
                "\u062f\u06d0\u0643\u0627\u0628\u0649\u0631"
            ],
            "d_t_fmt": "%a\u060c %d-%m-%Y\u060c %T",
            "d_fmt": "%a\u060c %d-%m-%Y",
            "t_fmt": "%T",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
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
