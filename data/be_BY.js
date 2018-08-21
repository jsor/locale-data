(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['be_BY'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",
            "country_post": null,
            "country_ab2": "BY",
            "country_ab3": "BLR",
            "country_num": 112,
            "country_car": "BY",
            "country_isbn": null,
            "lang_name": "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
            "lang_ab": "be",
            "lang_term": "bel",
            "lang_lib": "bel"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0422\u0442]",
            "noexpr": "^[-0nN\u041d\u043d]",
            "yesstr": "\u0442\u0430\u043a",
            "nostr": "\u043d\u0435"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0440\u0443\u0431",
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
            "int_curr_symbol": "BYR ",
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
            "int_select": "8~10",
            "int_prefix": "375"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u041d\u044f\u0434",
                "\u041f\u0430\u043d",
                "\u0410\u045e\u0442",
                "\u0421\u0440\u0434",
                "\u0427\u0446\u0432",
                "\u041f\u044f\u0442",
                "\u0421\u0443\u0431"
            ],
            "day": [
                "\u041d\u044f\u0434\u0437\u0435\u043b\u044f",
                "\u041f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a",
                "\u0410\u045e\u0442\u043e\u0440\u0430\u043a",
                "\u0421\u0435\u0440\u0430\u0434\u0430",
                "\u0427\u0430\u0446\u0432\u0435\u0440",
                "\u041f\u044f\u0442\u043d\u0456\u0446\u0430",
                "\u0421\u0443\u0431\u043e\u0442\u0430"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0441\u0442\u0443",
                "\u043b\u044e\u0442",
                "\u0441\u0430\u043a",
                "\u043a\u0440\u0430",
                "\u043c\u0430\u044f",
                "\u0447\u044d\u0440",
                "\u043b\u0456\u043f",
                "\u0436\u043d\u0456",
                "\u0432\u0435\u0440",
                "\u043a\u0430\u0441",
                "\u043b\u0456\u0441",
                "\u0441\u043d\u0435"
            ],
            "mon": [
                "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f",
                "\u043b\u044e\u0442\u0430\u0433\u0430",
                "\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430",
                "\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430",
                "\u043c\u0430\u044f",
                "\u0447\u044d\u0440\u0432\u0435\u043d\u044f",
                "\u043b\u0456\u043f\u0435\u043d\u044f",
                "\u0436\u043d\u0456\u045e\u043d\u044f",
                "\u0432\u0435\u0440\u0430\u0441\u043d\u044f",
                "\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430",
                "\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430",
                "\u0441\u043d\u0435\u0436\u043d\u044f"
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
            "timezone": null,
            "alt_mon": [
                "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c",
                "\u043b\u044e\u0442\u044b",
                "\u0441\u0430\u043a\u0430\u0432\u0456\u043a",
                "\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a",
                "\u043c\u0430\u0439",
                "\u0447\u044d\u0440\u0432\u0435\u043d\u044c",
                "\u043b\u0456\u043f\u0435\u043d\u044c",
                "\u0436\u043d\u0456\u0432\u0435\u043d\u044c",
                "\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c",
                "\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a",
                "\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434",
                "\u0441\u043d\u0435\u0436\u0430\u043d\u044c"
            ],
            "ab_alt_mon": [
                "\u0441\u0442\u0443",
                "\u043b\u044e\u0442",
                "\u0441\u0430\u043a",
                "\u043a\u0440\u0430",
                "\u043c\u0430\u0439",
                "\u0447\u044d\u0440",
                "\u043b\u0456\u043f",
                "\u0436\u043d\u0456",
                "\u0432\u0435\u0440",
                "\u043a\u0430\u0441",
                "\u043b\u0456\u0441",
                "\u0441\u043d\u0435"
            ]
        }
    };
}));
