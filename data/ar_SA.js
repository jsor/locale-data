(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ar_SA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
            "country_post": null,
            "country_ab2": "SA",
            "country_ab3": "SAU",
            "country_num": 682,
            "country_car": "KSA",
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
            "currency_symbol": "\u0631.\u0633",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "",
            "mon_grouping": -1,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "SAR ",
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
            "thousands_sep": "",
            "grouping": -1
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "966"
        },
        "LC_TIME": {
            "date_fmt": "%A %e %B %Y %Z %k:%M:%S",
            "abday": [
                "\u062d",
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "day": [
                "\u0627\u0644\u0623\u062d\u062f",
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
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
            "d_t_fmt": "%A %e %B %Y %k:%M:%S",
            "d_fmt": "%A %e %B %Y",
            "t_fmt": "%k:%M:%S",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "%k:%M:%S",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": "",
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": 1,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
