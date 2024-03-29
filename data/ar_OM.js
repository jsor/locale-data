(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ar_OM'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0639\u064f\u0645\u0627\u0646",
            "country_post": null,
            "country_ab2": "OM",
            "country_ab3": "OMN",
            "country_num": 512,
            "country_car": "OM",
            "country_isbn": null,
            "lang_name": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
            "lang_ab": "ar",
            "lang_term": "ara",
            "lang_lib": "ara"
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
            "currency_symbol": "\u0631.\u0639.",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 3,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 2,
            "int_curr_symbol": "OMR ",
            "int_frac_digits": 3,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%f%t%g",
            "name_gen": "-san",
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
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
            "int_prefix": "968"
        },
        "LC_TIME": {
            "date_fmt": "%d %b, %Y %Z %I:%M:%S %p",
            "abday": [
                "\u062d",
                "\u0646",
                "\u062b",
                "\u0631",
                "\u062e",
                "\u062c",
                "\u0633"
            ],
            "day": [
                "\u0627\u0644\u0623\u062d\u062f",
                "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
                "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
                "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
                "\u0627\u0644\u062e\u0645\u064a\u0633",
                "\u0627\u0644\u062c\u0645\u0639\u0629",
                "\u0627\u0644\u0633\u0628\u062a"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u064a\u0646\u0627",
                "\u0641\u0628\u0631",
                "\u0645\u0627\u0631",
                "\u0623\u0628\u0631",
                "\u0645\u0627\u064a",
                "\u064a\u0648\u0646",
                "\u064a\u0648\u0644",
                "\u0623\u063a\u0633",
                "\u0633\u0628\u062a",
                "\u0623\u0643\u062a",
                "\u0646\u0648\u0641",
                "\u062f\u064a\u0633"
            ],
            "mon": [
                "\u064a\u0646\u0627\u064a\u0631",
                "\u0641\u0628\u0631\u0627\u064a\u0631",
                "\u0645\u0627\u0631\u0633",
                "\u0623\u0628\u0631\u064a\u0644",
                "\u0645\u0627\u064a\u0648",
                "\u064a\u0648\u0646\u064a\u0648",
                "\u064a\u0648\u0644\u064a\u0648",
                "\u0623\u063a\u0633\u0637\u0633",
                "\u0633\u0628\u062a\u0645\u0628\u0631",
                "\u0623\u0643\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0641\u0645\u0628\u0631",
                "\u062f\u064a\u0633\u0645\u0628\u0631"
            ],
            "d_t_fmt": "%d %b, %Y %I:%M:%S %p",
            "d_fmt": "%d %b, %Y",
            "t_fmt": "%Z %I:%M:%S %p",
            "am_pm": [
                "\u0635",
                "\u0645"
            ],
            "t_fmt_ampm": "%Z %I:%M:%S %p",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 7,
            "first_workday": 1,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
