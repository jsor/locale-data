(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sr_ME'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430",
            "country_post": "MNE",
            "country_ab2": "ME",
            "country_ab3": "MNE",
            "country_num": 499,
            "country_car": "MNE",
            "country_isbn": "86",
            "lang_name": "\u0441\u0440\u043f\u0441\u043a\u0438",
            "lang_ab": "sr",
            "lang_term": "srp",
            "lang_lib": "srp"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYdD\u0414\u0434]",
            "noexpr": "^[-0nN\u041d\u043d]",
            "yesstr": "\u0434\u0430",
            "nostr": "\u043d\u0435"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "EUR ",
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
            "name_gen": "",
            "name_mr": "\u0433-\u0434\u0438\u043d",
            "name_mrs": "\u0433-\u0452\u0430",
            "name_miss": "\u0433-\u0452\u0438\u0446\u0430",
            "name_ms": "\u0433-\u0452\u0430"
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": "",
            "grouping": [
                0,
                0
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%A %l",
            "int_select": "99",
            "int_prefix": "382"
        },
        "LC_TIME": {
            "date_fmt": "%a, %e. %b %Y.  %H:%M:%S %Z",
            "abday": [
                "\u043d\u0435\u0434",
                "\u043f\u043e\u043d",
                "\u0443\u0442\u043e",
                "\u0441\u0440\u0438",
                "\u0447\u0435\u0442",
                "\u043f\u0435\u0442",
                "\u0441\u0443\u0431"
            ],
            "day": [
                "\u043d\u0435\u0434\u0458\u0435\u0459\u0430",
                "\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a",
                "\u0443\u0442\u043e\u0440\u0430\u043a",
                "\u0441\u0440\u0438\u0458\u0435\u0434\u0430",
                "\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a",
                "\u043f\u0435\u0442\u0430\u043a",
                "\u0441\u0443\u0431\u043e\u0442\u0430"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0458\u0430\u043d",
                "\u0444\u0435\u0431",
                "\u043c\u0430\u0440",
                "\u0430\u043f\u0440",
                "\u043c\u0430\u0458",
                "\u0458\u0443\u043d",
                "\u0458\u0443\u043b",
                "\u0430\u0432\u0433",
                "\u0441\u0435\u043f",
                "\u043e\u043a\u0442",
                "\u043d\u043e\u0432",
                "\u0434\u0435\u0446"
            ],
            "mon": [
                "\u0458\u0430\u043d\u0443\u0430\u0440",
                "\u0444\u0435\u0431\u0440\u0443\u0430\u0440",
                "\u043c\u0430\u0440\u0442",
                "\u0430\u043f\u0440\u0438\u043b",
                "\u043c\u0430\u0458",
                "\u0458\u0443\u043d",
                "\u0458\u0443\u043b",
                "\u0430\u0432\u0433\u0443\u0441\u0442",
                "\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440",
                "\u043e\u043a\u0442\u043e\u0431\u0430\u0440",
                "\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440",
                "\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"
            ],
            "d_t_fmt": "%A, %d. %B %Y. %T %Z",
            "d_fmt": "%d.%m.%Y.",
            "t_fmt": "%T",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "%T",
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
