(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ar_JO'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": null,
            "country_post": null,
            "country_ab2": "JO",
            "country_ab3": "JOR",
            "country_num": 400,
            "country_car": "HKJ",
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
            "yesexpr": "^[\u0646yY].*",
            "noexpr": "^[\u0644nN].*",
            "yesstr": "\u0646\u0639\u0645",
            "nostr": "\u0644\u0627"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u062f.\u0623.",
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
            "int_curr_symbol": "JOD ",
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
            "tel_int_fmt": "+%c ;%a ;%l",
            "tel_dom_fmt": null,
            "int_select": null,
            "int_prefix": "962"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0627\u0644\u0623\u062d\u062f",
                "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
                "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
                "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
                "\u0627\u0644\u062e\u0645\u064a\u0633",
                "\u0627\u0644\u062c\u0645\u0639\u0629",
                "\u0627\u0644\u0633\u0628\u062a"
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
            "week": null,
            "abmon": [
                "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
                "\u0634\u0628\u0627\u0637",
                "\u0622\u0630\u0627\u0631",
                "\u0646\u064a\u0633\u0627\u0646",
                "\u0646\u0648\u0627\u0631",
                "\u062d\u0632\u064a\u0631\u0627\u0646",
                "\u062a\u0645\u0648\u0632",
                "\u0622\u0628",
                "\u0623\u064a\u0644\u0648\u0644",
                "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644",
                "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
                "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"
            ],
            "mon": [
                "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
                "\u0634\u0628\u0627\u0637",
                "\u0622\u0630\u0627\u0631",
                "\u0646\u064a\u0633\u0627\u0646",
                "\u0646\u0648\u0627\u0631",
                "\u062d\u0632\u064a\u0631\u0627\u0646",
                "\u062a\u0645\u0648\u0632",
                "\u0622\u0628",
                "\u0623\u064a\u0644\u0648\u0644",
                "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644",
                "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
                "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"
            ],
            "d_t_fmt": "%d %b, %Y %Z %I:%M:%S %p",
            "d_fmt": "%d %b, %Y",
            "t_fmt": "%Z %I:%M:%S ",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
