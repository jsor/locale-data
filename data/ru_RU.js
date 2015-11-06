(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ru_RU'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "RU",
            "country_ab3": "RUS",
            "country_num": 643,
            "country_car": "RUS",
            "country_isbn": null,
            "lang_name": null,
            "lang_ab": "ru",
            "lang_term": "rus",
            "lang_lib": "rus"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[\u0414\u0434Yy].*",
            "noexpr": "^[\u041d\u043dNn].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0440\u0443\u0431",
            "mon_decimal_point": ".",
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
            "tel_dom_fmt": null,
            "int_select": "0~10",
            "int_prefix": "7"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0412\u0441",
                "\u041f\u043d",
                "\u0412\u0442",
                "\u0421\u0440",
                "\u0427\u0442",
                "\u041f\u0442",
                "\u0421\u0431"
            ],
            "day": [
                "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",
                "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",
                "\u0412\u0442\u043e\u0440\u043d\u0438\u043a",
                "\u0421\u0440\u0435\u0434\u0430",
                "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
                "\u041f\u044f\u0442\u043d\u0438\u0446\u0430",
                "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"
            ],
            "week": null,
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
                "\u042f\u043d\u0432\u0430\u0440\u044c",
                "\u0424\u0435\u0432\u0440\u0430\u043b\u044c",
                "\u041c\u0430\u0440\u0442",
                "\u0410\u043f\u0440\u0435\u043b\u044c",
                "\u041c\u0430\u0439",
                "\u0418\u044e\u043d\u044c",
                "\u0418\u044e\u043b\u044c",
                "\u0410\u0432\u0433\u0443\u0441\u0442",
                "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
                "\u041e\u043a\u0442\u044f\u0431\u0440\u044c",
                "\u041d\u043e\u044f\u0431\u0440\u044c",
                "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"
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
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
