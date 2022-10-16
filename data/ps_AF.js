(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ps_AF'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%s %h %e %r%N%C-%z %T%N%c%N",
            "country_name": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
            "country_post": "AF",
            "country_ab2": "AF",
            "country_ab3": "AFG",
            "country_num": 4,
            "country_car": "AFG",
            "country_isbn": null,
            "lang_name": "\u067e\u069a\u062a\u0648",
            "lang_ab": "ps",
            "lang_term": "pus",
            "lang_lib": "pus"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0628f]",
            "noexpr": "^[-0nN\u062e\u0646o]",
            "yesstr": "\u0647\u0648",
            "nostr": "\u0646\u0647"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u060b",
            "mon_decimal_point": "\u066b",
            "mon_thousands_sep": "\u066c",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 0,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "AFN ",
            "int_frac_digits": 0,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%s%t%p%t%g%t%m%t%f",
            "name_gen": " % No general salutation for all persons in Pashto.",
            "name_mr": "\u069a\u0627\u063a\u0644\u06d0",
            "name_mrs": "\u0628\u064a \u0628\u064a",
            "name_miss": "\u0628\u064a \u0628\u064a",
            "name_ms": "\u0628\u064a \u0628\u064a"
        },
        "LC_NUMERIC": {
            "decimal_point": "\u066b",
            "thousands_sep": "\u066c",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%A\u2012%l",
            "int_select": "00",
            "int_prefix": "93"
        },
        "LC_TIME": {
            "date_fmt": "%A \u062f %Y \u062f %B %e\u060c %Z %H:%M:%S",
            "abday": [
                "\u06cc.",
                "\u062f.",
                "\u0633.",
                "\u0686.",
                "\u067e.",
                "\u062c.",
                "\u0634."
            ],
            "day": [
                "\u06cc\u06a9\u0634\u0646\u0628\u0647",
                "\u062f\u0648\u0634\u0646\u0628\u0647",
                "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
                "\u0686\u0627\u0631\u0634\u0646\u0628\u0647",
                "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
                "\u062c\u0645\u0639\u0647",
                "\u0634\u0646\u0628\u0647"
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
                "\u0627\u067e\u0631\u06cc\u0644",
                "\u0645\u06cd",
                "\u062c\u0648\u0646",
                "\u062c\u0648\u0644\u0627\u06cc",
                "\u0627\u06ab\u0633\u062a",
                "\u0633\u067e\u062a\u0645\u0628\u0631",
                "\u0627\u06a9\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0645\u0628\u0631",
                "\u062f\u0633\u0645\u0628\u0631"
            ],
            "mon": [
                "\u062c\u0646\u0648\u0631\u064a",
                "\u0641\u0628\u0631\u0648\u0631\u064a",
                "\u0645\u0627\u0631\u0686",
                "\u0627\u067e\u0631\u06cc\u0644",
                "\u0645\u06cd",
                "\u062c\u0648\u0646",
                "\u062c\u0648\u0644\u0627\u06cc",
                "\u0627\u06ab\u0633\u062a",
                "\u0633\u067e\u062a\u0645\u0628\u0631",
                "\u0627\u06a9\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0645\u0628\u0631",
                "\u062f\u0633\u0645\u0628\u0631"
            ],
            "d_t_fmt": "%A \u062f %Y \u062f %B %e\u060c %H:%M:%S",
            "d_fmt": "\u062f %Y \u062f %B %e",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "\u063a.\u0645.",
                "\u063a.\u0648."
            ],
            "t_fmt_ampm": "\u202b%I:%M:%S %p\u202c",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 7,
            "first_workday": 7,
            "cal_direction": 3,
            "timezone": null
        }
    };
}));
