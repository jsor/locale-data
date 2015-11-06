(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['crh_UA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "UA",
            "country_ab3": "UKR",
            "country_num": 804,
            "country_car": "UA",
            "country_isbn": null,
            "lang_name": "Q\u0131r\u0131mtatarca",
            "lang_ab": null,
            "lang_term": "crh",
            "lang_lib": "crh"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yYeE]",
            "noexpr": "^[nNhH]",
            "yesstr": "ebet",
            "nostr": "hay\u0131r"
        },
        "LC_MONETARY": {
            "currency_symbol": "gr",
            "mon_decimal_point": ".",
            "mon_thousands_sep": " ",
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
            "int_curr_symbol": "UAH ",
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
            "decimal_point": ",",
            "thousands_sep": ".",
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
            "int_select": null,
            "int_prefix": "380"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Baz",
                "Ber",
                "Sal",
                "\u00c7ar",
                "Caq",
                "Cum",
                "Cer"
            ],
            "day": [
                "Bazar",
                "Bazarertesi",
                "Sal\u0131",
                "\u00c7ar\u015fembe",
                "Cumaaq\u015fam\u0131",
                "Cuma",
                "Cumaertesi"
            ],
            "week": null,
            "abmon": [
                "Yan",
                "Fev",
                "Mar",
                "Apr",
                "May",
                "\u0130yn",
                "\u0130yl",
                "Avg",
                "Sen",
                "Okt",
                "Noy",
                "Dek"
            ],
            "mon": [
                "Yanvar",
                "Fevral",
                "Mart",
                "Aprel",
                "May\u0131s",
                "\u0130yun",
                "\u0130yul",
                "Avgust",
                "Sent\u00e2br",
                "Okt\u00e2br",
                "Noyabr",
                "Dekabr"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%T",
            "am_pm": [
                "\u00dcE",
                "\u00dcS"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
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
