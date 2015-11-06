(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['cs_CZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u010cesk\u00e1 republika",
            "country_post": "CZ",
            "country_ab2": "CZ",
            "country_ab3": "CZE",
            "country_num": 203,
            "country_car": "CZ",
            "country_isbn": null,
            "lang_name": "\u010ce\u0161tina",
            "lang_ab": "cs",
            "lang_term": "ces",
            "lang_lib": "cze"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[aAyY].*",
            "noexpr": "^[nN].*",
            "yesstr": "ano",
            "nostr": "ne"
        },
        "LC_MONETARY": {
            "currency_symbol": "K\u010d",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u00a0",
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
            "int_curr_symbol": "CZK ",
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
            "name_mr": "Pan",
            "name_mrs": "Pan\u00ed",
            "name_miss": "Sle\u010dna",
            "name_ms": "Pan\u00ed"
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": "\u00a0",
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
            "tel_dom_fmt": "(0%a) %l",
            "int_select": "00",
            "int_prefix": "420"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Ne",
                "Po",
                "\u00dat",
                "St",
                "\u010ct",
                "P\u00e1",
                "So"
            ],
            "day": [
                "Ned\u011ble",
                "Pond\u011bl\u00ed",
                "\u00dater\u00fd",
                "St\u0159eda",
                "\u010ctvrtek",
                "P\u00e1tek",
                "Sobota"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "led",
                "\u00fano",
                "b\u0159e",
                "dub",
                "kv\u011b",
                "\u010den",
                "\u010dec",
                "srp",
                "z\u00e1\u0159",
                "\u0159\u00edj",
                "lis",
                "pro"
            ],
            "mon": [
                "leden",
                "\u00fanor",
                "b\u0159ezen",
                "duben",
                "kv\u011bten",
                "\u010derven",
                "\u010dervenec",
                "srpen",
                "z\u00e1\u0159\u00ed",
                "\u0159\u00edjen",
                "listopad",
                "prosinec"
            ],
            "d_t_fmt": "%a\u00a0%-d.\u00a0%B\u00a0%Y,\u00a0%H:%M:%S\u00a0%Z",
            "d_fmt": "%-d.%-m.%Y",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "%I:%M:%S",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 2,
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
