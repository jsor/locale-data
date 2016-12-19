(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ber_DZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": null,
            "country_post": null,
            "country_ab2": "DZ",
            "country_ab3": "DZA",
            "country_num": 12,
            "country_car": "DZ",
            "country_isbn": null,
            "lang_name": "\u2d5c\u2d30\u2d4e\u2d30\u2d49\u2d56\u2d5c",
            "lang_ab": null,
            "lang_term": "ber",
            "lang_lib": "ber"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1Bb]",
            "noexpr": "^[-0YyNn]",
            "yesstr": "b\u0259li",
            "nostr": "yox"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u062f.\u062c.",
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
            "int_curr_symbol": "DZD ",
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
            "int_prefix": "213"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "baz",
                "bir",
                "iki",
                "\u00fc\u00e7\u00fc",
                "d\u00f6r",
                "be\u015f",
                "alt"
            ],
            "day": [
                "bazar g\u00fcn\u00fc",
                "birinci g\u00fcn",
                "ikinci g\u00fcn",
                "\u00fc\u00e7\u00fcnc\u00fc g\u00fcn",
                "d\u00f6rd\u00fcnc\u00fc g\u00fcn",
                "be\u015finci g\u00fcn",
                "alt\u0131nc\u0131 g\u00fcn"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Yan",
                "Fev",
                "Mar",
                "Apr",
                "May",
                "\u0130yn",
                "\u0130yl",
                "Avq",
                "Sen",
                "Okt",
                "Noy",
                "Dek"
            ],
            "mon": [
                "yanvar",
                "fevral",
                "mart",
                "aprel",
                "may",
                "iyun",
                "iyul",
                "avqust",
                "sentyabr",
                "oktyabr",
                "noyabr",
                "dekabr"
            ],
            "d_t_fmt": "%A, %d %B %Y %T",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%T",
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
            "alt_digits": null,
            "first_weekday": 7,
            "first_workday": 1,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
