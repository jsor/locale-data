(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['az_IR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u0627\u06cc\u0631\u0627\u0646",
            "country_post": null,
            "country_ab2": "IR",
            "country_ab3": "IRN",
            "country_num": 364,
            "country_car": "IR",
            "country_isbn": "964",
            "lang_name": "\u062a\u06c6\u0631\u06a9\u062c\u0647",
            "lang_ab": "az",
            "lang_term": "azb",
            "lang_lib": "aze"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0647\u0628]",
            "noexpr": "^[-0nN\u06cc\u062e]",
            "yesstr": "\u0647\u0646",
            "nostr": "\u06cc\u0648\u0652\u062e"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0631\u06cc\u0627\u0644",
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
            "int_curr_symbol": "IRR ",
            "int_frac_digits": 0,
            "int_p_cs_precedes": 0,
            "int_p_sep_by_space": 1,
            "int_n_cs_precedes": 0,
            "int_n_sep_by_space": 1,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%d%t%s%t%g%t%m%t%f",
            "name_gen": "",
            "name_mr": "\u0622\u063a\u0627",
            "name_mrs": "\u062e\u0627\u0646\u06cc\u0645",
            "name_miss": "\u062e\u0627\u0646\u06cc\u0645",
            "name_ms": "\u062e\u0627\u0646\u06cc\u0645"
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
            "tel_int_fmt": "\u202a+%c %a %l\u202c",
            "tel_dom_fmt": "\u202a%A\u2012%l\u202c",
            "int_select": "00",
            "int_prefix": "98"
        },
        "LC_TIME": {
            "date_fmt": "\u202b%A %Oe %B %Oy\u060c \u0633\u0627\u0639\u0627\u062a first_weekday 7",
            "abday": [
                "\u06cc\u06a9\u0634\u0646\u0628\u0647",
                "\u062f\u0648\u0634\u0646\u0628\u0647",
                "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
                "\u0686\u0627\u0631\u0634\u0646\u0628\u0647",
                "\u062c\u06c6\u0645\u0639\u0647 \u0622\u062e\u0634\u0627\u0645\u06cc",
                "\u062c\u06c6\u0645\u0639\u0647",
                "\u0634\u0646\u0628\u0647"
            ],
            "day": [
                "\u06cc\u06a9\u0634\u0646\u0628\u0647",
                "\u062f\u0648\u0634\u0646\u0628\u0647",
                "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
                "\u0686\u0627\u0631\u0634\u0646\u0628\u0647",
                "\u062c\u06c6\u0645\u0639\u0647 \u0622\u062e\u0634\u0627\u0645\u06cc",
                "\u062c\u06c6\u0645\u0639\u0647",
                "\u0634\u0646\u0628\u0647"
            ],
            "week": null,
            "abmon": [
                "\u0698\u0627\u0646\u0648\u06cc\u0647",
                "\u0641\u0648\u0631\u06cc\u0647",
                "\u0645\u0627\u0631\u0633",
                "\u0622\u0648\u0631\u06cc\u0644",
                "\u0645\u0626\u06cc",
                "\u0698\u0648\u0626\u0646",
                "\u062c\u0648\u0644\u0627\u06cc",
                "\u0622\u0642\u06c7\u0633\u062a",
                "\u0633\u067e\u062a\u0627\u0645\u0628\u0631",
                "\u0627\u0648\u0652\u06a9\u062a\u0648\u0652\u0628\u0631",
                "\u0646\u0648\u0652\u0648\u0627\u0645\u0628\u0631",
                "\u062f\u0633\u0627\u0645\u0628\u0631"
            ],
            "mon": [
                "\u0698\u0627\u0646\u0648\u06cc\u0647",
                "\u0641\u0648\u0631\u06cc\u0647",
                "\u0645\u0627\u0631\u0633",
                "\u0622\u0648\u0631\u06cc\u0644",
                "\u0645\u0626\u06cc",
                "\u0698\u0648\u0626\u0646",
                "\u062c\u0648\u0644\u0627\u06cc",
                "\u0622\u0642\u06c7\u0633\u062a",
                "\u0633\u067e\u062a\u0627\u0645\u0628\u0631",
                "\u0627\u0648\u0652\u06a9\u062a\u0648\u0652\u0628\u0631",
                "\u0646\u0648\u0652\u0648\u0627\u0645\u0628\u0631",
                "\u062f\u0633\u0627\u0645\u0628\u0631"
            ],
            "d_t_fmt": "\u202b%A %Oe %B %Oy\u060c %OH:%OM:%OS\u202c",
            "d_fmt": "%Oy\/\/%Om\/\/%Od",
            "t_fmt": "%OH:%OM:%OS",
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
            "alt_digits": [
                "\u06f0\u06f0",
                "\u06f0\u06f1",
                "\u06f0\u06f2",
                "\u06f0\u06f3",
                "\u06f0\u06f4",
                "\u06f0\u06f5",
                "\u06f0\u06f6",
                "\u06f0\u06f7",
                "\u06f0\u06f8",
                "\u06f0\u06f9",
                "\u06f1\u06f0",
                "\u06f1\u06f1",
                "\u06f1\u06f2",
                "\u06f1\u06f3",
                "\u06f1\u06f4",
                "\u06f1\u06f5",
                "\u06f1\u06f6",
                "\u06f1\u06f7",
                "\u06f1\u06f8",
                "\u06f1\u06f9",
                "\u06f2\u06f0",
                "\u06f2\u06f1",
                "\u06f2\u06f2",
                "\u06f2\u06f3",
                "\u06f2\u06f4",
                "\u06f2\u06f5",
                "\u06f2\u06f6",
                "\u06f2\u06f7",
                "\u06f2\u06f8",
                "\u06f2\u06f9",
                "\u06f3\u06f0",
                "\u06f3\u06f1",
                "\u06f3\u06f2",
                "\u06f3\u06f3",
                "\u06f3\u06f4",
                "\u06f3\u06f5",
                "\u06f3\u06f6",
                "\u06f3\u06f7",
                "\u06f3\u06f8",
                "\u06f3\u06f9",
                "\u06f4\u06f0",
                "\u06f4\u06f1",
                "\u06f4\u06f2",
                "\u06f4\u06f3",
                "\u06f4\u06f4",
                "\u06f4\u06f5",
                "\u06f4\u06f6",
                "\u06f4\u06f7",
                "\u06f4\u06f8",
                "\u06f4\u06f9",
                "\u06f5\u06f0",
                "\u06f5\u06f1",
                "\u06f5\u06f2",
                "\u06f5\u06f3",
                "\u06f5\u06f4",
                "\u06f5\u06f5",
                "\u06f5\u06f6",
                "\u06f5\u06f7",
                "\u06f5\u06f8",
                "\u06f5\u06f9",
                "\u06f6\u06f0",
                "\u06f6\u06f1",
                "\u06f6\u06f2",
                "\u06f6\u06f3",
                "\u06f6\u06f4",
                "\u06f6\u06f5",
                "\u06f6\u06f6",
                "\u06f6\u06f7",
                "\u06f6\u06f8",
                "\u06f6\u06f9",
                "\u06f7\u06f0",
                "\u06f7\u06f1",
                "\u06f7\u06f2",
                "\u06f7\u06f3",
                "\u06f7\u06f4",
                "\u06f7\u06f5",
                "\u06f7\u06f6",
                "\u06f7\u06f7",
                "\u06f7\u06f8",
                "\u06f7\u06f9",
                "\u06f8\u06f0",
                "\u06f8\u06f1",
                "\u06f8\u06f2",
                "\u06f8\u06f3",
                "\u06f8\u06f4",
                "\u06f8\u06f5",
                "\u06f8\u06f6",
                "\u06f8\u06f7",
                "\u06f8\u06f8",
                "\u06f8\u06f9",
                "\u06f9\u06f0",
                "\u06f9\u06f1",
                "\u06f9\u06f2",
                "\u06f9\u06f3",
                "\u06f9\u06f4",
                "\u06f9\u06f5",
                "\u06f9\u06f6",
                "\u06f9\u06f7",
                "\u06f9\u06f8",
                "\u06f9\u06f9"
            ],
            "first_weekday": null,
            "first_workday": 7,
            "cal_direction": 3,
            "timezone": null
        }
    };
}));
