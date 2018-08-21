(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ky_KG'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d",
            "country_post": null,
            "country_ab2": "KG",
            "country_ab3": "KGZ",
            "country_num": 417,
            "country_car": "KS",
            "country_isbn": null,
            "lang_name": "\u043a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
            "lang_ab": "ky",
            "lang_term": "kir",
            "lang_lib": "kir"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u041e\u043e]",
            "noexpr": "^[-0nN\u0416\u0436]",
            "yesstr": "\u043e\u043e\u0431\u0430",
            "nostr": "\u0436\u043e\u043a"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0441\u043e\u043c",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "\u202f",
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
            "int_curr_symbol": "KGS ",
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
            "thousands_sep": "\u202f",
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
            "int_prefix": "996"
        },
        "LC_TIME": {
            "date_fmt": "%a, %e-%b %Y \u0436, %H:%M:%S %Z",
            "abday": [
                "\u0436\u043a",
                "\u0434\u0448",
                "\u0448\u0435",
                "\u0448\u0430",
                "\u0431\u0448",
                "\u0436\u043c",
                "\u0438\u0448"
            ],
            "day": [
                "\u0436\u0435\u043a\u0448\u0435\u043c\u0431\u0438",
                "\u0434\u04af\u0439\u0448\u04e9\u043c\u0431\u04af",
                "\u0448\u0435\u0439\u0448\u0435\u043c\u0431\u0438",
                "\u0448\u0430\u0440\u0448\u0435\u043c\u0431\u0438",
                "\u0431\u0435\u0439\u0448\u0435\u043c\u0431\u0438",
                "\u0436\u0443\u043c\u0430",
                "\u0438\u0448\u0435\u043c\u0431\u0438"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u044f\u043d\u0432",
                "\u0444\u0435\u0432",
                "\u043c\u0430\u0440",
                "\u0430\u043f\u0440",
                "\u043c\u0430\u0439",
                "\u0438\u044e\u043d",
                "\u0438\u044e\u043b",
                "\u0430\u0432\u0433",
                "\u0441\u0435\u043d",
                "\u043e\u043a\u0442",
                "\u043d\u043e\u044f",
                "\u0434\u0435\u043a"
            ],
            "mon": [
                "\u044f\u043d\u0432\u0430\u0440\u044c",
                "\u0444\u0435\u0432\u0440\u0430\u043b\u044c",
                "\u043c\u0430\u0440\u0442",
                "\u0430\u043f\u0440\u0435\u043b\u044c",
                "\u043c\u0430\u0439",
                "\u0438\u044e\u043d\u044c",
                "\u0438\u044e\u043b\u044c",
                "\u0430\u0432\u0433\u0443\u0441\u0442",
                "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
                "\u043e\u043a\u0442\u044f\u0431\u0440\u044c",
                "\u043d\u043e\u044f\u0431\u0440\u044c",
                "\u0434\u0435\u043a\u0430\u0431\u0440\u044c"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
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
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
