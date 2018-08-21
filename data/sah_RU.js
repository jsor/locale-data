(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sah_RU'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u0420\u043e\u0441\u0441\u0438\u044f",
            "country_post": null,
            "country_ab2": "RU",
            "country_ab3": "RUS",
            "country_num": 643,
            "country_car": "RUS",
            "country_isbn": null,
            "lang_name": "\u0421\u0430\u0445\u0430 \u0442\u044b\u043b\u0430",
            "lang_ab": "",
            "lang_term": "sah",
            "lang_lib": "sah"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0434\u0414\u044d\u042d]",
            "noexpr": "^[-0nN\u043d\u041d\u0441\u0421]",
            "yesstr": "\u044d\u044d\u0445",
            "nostr": "\u0441\u0443\u043e\u0445"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20bd",
            "mon_decimal_point": ",",
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
            "int_curr_symbol": "RUB ",
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
            "int_select": "0~10",
            "int_prefix": "7"
        },
        "LC_TIME": {
            "date_fmt": "%a %Y \u0441. %B %e \u043a. %T (%Z)",
            "abday": [
                "\u0431\u0441",
                "\u0431\u043d",
                "\u043e\u043f",
                "\u0441\u0440",
                "\u0447\u043f",
                "\u0431\u0442",
                "\u0441\u0431"
            ],
            "day": [
                "\u0431\u0430\u0441\u043a\u044b\u04bb\u044b\u0430\u043d\u043d\u044c\u0430",
                "\u0431\u044d\u043d\u0438\u0434\u0438\u044d\u043d\u043d\u044c\u0438\u043a",
                "\u043e\u043f\u0442\u0443\u043e\u0440\u0443\u043d\u043d\u044c\u0443\u043a",
                "\u0441\u044d\u0440\u044d\u0434\u044d",
                "\u0447\u044d\u043f\u043f\u0438\u044d\u0440",
                "\u0431\u044d\u044d\u0442\u0438\u043d\u0441\u044d",
                "\u0441\u0443\u0431\u0443\u043e\u0442\u0430"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0442\u043e\u0445\u0441",
                "\u043e\u043b\u0443\u043d",
                "\u043a\u0443\u043b",
                "\u043c\u0443\u0443\u0441",
                "\u044b\u0430\u043c",
                "\u0431\u044d\u0441",
                "\u043e\u0442",
                "\u0430\u0442\u044b\u0440",
                "\u0431\u0430\u043b",
                "\u0430\u043b\u0442",
                "\u0441\u044d\u0442",
                "\u0430\u0445\u0441"
            ],
            "mon": [
                "\u0442\u043e\u0445\u0441\u0443\u043d\u043d\u044c\u0443",
                "\u043e\u043b\u0443\u043d\u043d\u044c\u0443",
                "\u043a\u0443\u043b\u0443\u043d \u0442\u0443\u0442\u0430\u0440",
                "\u043c\u0443\u0443\u0441 \u0443\u0441\u0442\u0430\u0440",
                "\u044b\u0430\u043c \u044b\u0439\u044b\u043d",
                "\u0431\u044d\u0441 \u044b\u0439\u044b\u043d",
                "\u043e\u0442 \u044b\u0439\u044b\u043d",
                "\u0430\u0442\u044b\u0440\u0434\u044c\u0430\u0445 \u044b\u0439\u044b\u043d",
                "\u0431\u0430\u043b\u0430\u0495\u0430\u043d \u044b\u0439\u044b\u043d",
                "\u0430\u043b\u0442\u044b\u043d\u043d\u044c\u044b",
                "\u0441\u044d\u0442\u0438\u043d\u043d\u044c\u0438",
                "\u0430\u0445\u0441\u044b\u043d\u043d\u044c\u044b"
            ],
            "d_t_fmt": "%a %Y %b %d %T (%Z)",
            "d_fmt": "%Y.%m.%d",
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
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null,
            "alt_mon": [
                "\u0442\u043e\u0445\u0441\u0443\u043d\u043d\u044c\u0443",
                "\u043e\u043b\u0443\u043d\u043d\u044c\u0443",
                "\u043a\u0443\u043b\u0443\u043d \u0442\u0443\u0442\u0430\u0440",
                "\u043c\u0443\u0443\u0441 \u0443\u0441\u0442\u0430\u0440",
                "\u044b\u0430\u043c \u044b\u0439\u0430",
                "\u0431\u044d\u0441 \u044b\u0439\u0430",
                "\u043e\u0442 \u044b\u0439\u0430",
                "\u0430\u0442\u044b\u0440\u0434\u044c\u0430\u0445 \u044b\u0439\u0430",
                "\u0431\u0430\u043b\u0430\u0495\u0430\u043d \u044b\u0439\u0430",
                "\u0430\u043b\u0442\u044b\u043d\u043d\u044c\u044b",
                "\u0441\u044d\u0442\u0438\u043d\u043d\u044c\u0438",
                "\u0430\u0445\u0441\u044b\u043d\u043d\u044c\u044b"
            ]
        }
    };
}));
