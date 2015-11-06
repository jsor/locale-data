(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ur_PK'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T %z%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "PK",
            "country_ab3": "PAK",
            "country_num": 586,
            "country_car": "PK",
            "country_isbn": null,
            "lang_name": null,
            "lang_ab": "ur",
            "lang_term": "urd",
            "lang_lib": "urd"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY\u0647\u0628f].*",
            "noexpr": "^[nN\u0646o].*",
            "yesstr": "\u0628\u0644\u0643\u0644",
            "nostr": "\u0646\u0647\u064a\u06ba"
        },
        "LC_MONETARY": {
            "currency_symbol": "Rs",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 2,
            "n_sign_posn": 1,
            "int_curr_symbol": "PKR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
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
            "int_prefix": "45"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0627\u062a\u0648\u0627\u0631",
                "\u067e\u064a\u0631",
                "\u0645\u0646\u06af\u0644",
                "\u0628\u062f\u06be",
                "\u062c\u0645\u0639\u0631\u0627\u062a",
                "\u062c\u0645\u0639\u0647",
                "\u0647\u0641\u062a\u0647"
            ],
            "day": [
                "\u0627\u062a\u0648\u0627\u0631",
                "\u067e\u064a\u0631",
                "\u0645\u0646\u06af\u0644",
                "\u0628\u062f\u06be",
                "\u062c\u0645\u0639\u0631\u0627\u062a",
                "\u062c\u0645\u0639\u0647",
                "\u0647\u0641\u062a\u0647"
            ],
            "week": null,
            "abmon": [
                "\u062c\u0646\u0648\u0631\u064a",
                "\u0641\u0631\u0648\u0631\u064a",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u064a\u0644",
                "\u0645\u0653\u06cc",
                "\u062c\u0648\u0646",
                "\u062c\u0648\u0644\u0627\u064a",
                "\u0627\u06af\u0633\u062a",
                "\u0633\u062a\u0645\u0628\u0631",
                "\u0627\u0643\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0645\u0628\u0631",
                "\u062f\u0633\u0645\u0628\u0631"
            ],
            "mon": [
                "\u062c\u0646\u0648\u0631\u064a",
                "\u0641\u0631\u0648\u0631\u064a",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u064a\u0644",
                "\u0645\u0653\u06cc",
                "\u062c\u0648\u0646",
                "\u062c\u0648\u0644\u0627\u064a",
                "\u0627\u06af\u0633\u062a",
                "\u0633\u062a\u0645\u0628\u0631",
                "\u0627\u0643\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0645\u0628\u0631",
                "\u062f\u0633\u0645\u0628\u0631"
            ],
            "d_t_fmt": "\u0648 %H:%M:%S %Z \u062a %d %B %Y",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "\u0635",
                "\u0634"
            ],
            "t_fmt_ampm": "%P %I:%M:%S",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": 3,
            "timezone": null
        }
    };
}));
