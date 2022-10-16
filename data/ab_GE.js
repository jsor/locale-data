(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ab_GE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%d%N%f%N%d%N%b%N%s %h 5e %r%N%C%z %T%N%c%N",
            "country_name": "\u041a\u044b\u0440\u04ad\u0442\u04d9\u044b\u043b\u0430",
            "country_post": null,
            "country_ab2": "GE",
            "country_ab3": "GEO",
            "country_num": 268,
            "country_car": "GE",
            "country_isbn": 99928,
            "lang_name": "\u0410\u0525\u0441\u0448\u04d9\u0430",
            "lang_ab": "ab",
            "lang_term": "abk",
            "lang_lib": "abk"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0430\u0410]",
            "noexpr": "^[-0nN\u043c\u041c]",
            "yesstr": "\u0430\u0430\u0438",
            "nostr": "\u043c\u0430\u043f"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20be",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "GEL ",
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
            "int_prefix": "995"
        },
        "LC_TIME": {
            "date_fmt": "%Y \u0430\u0448\u044b\u049b\u04d9\u0441 %d %B, %T %Z",
            "abday": [
                "\u0410\u043c",
                "\u0410\u0448\u04d9",
                "\u0410\u04a9",
                "\u0410\u0445",
                "\u0410\u0525",
                "\u0410\u0445\u04d9",
                "\u0410\u0441"
            ],
            "day": [
                "\u0410\u043c\u04bd\u044b\u0448\u0430",
                "\u0410\u0448\u04d9\u0430\u0445\u044c\u0430",
                "\u0410\u04a9\u0430\u0448\u0430",
                "\u0410\u0445\u0430\u0448\u0430",
                "\u0410\u0525\u0448\u044c\u0430\u0448\u0430",
                "\u0410\u0445\u04d9\u0430\u0448\u0430",
                "\u0410\u0441\u0430\u0431\u0448\u0430"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0410\u0436\u044c",
                "\u0416\u04d9\u0430\u0431",
                "\u0425\u04d9\u0430\u0436\u04d9",
                "\u041c\u0448",
                "\u041b\u0430\u04b5",
                "\u0420\u0430\u0448\u04d9",
                "\u0524\u0445\u044b\u043d\u0433\u04d9",
                "\u041d\u0430\u043d\u04b3\u04d9",
                "\u0426\u04d9\u044b\u0431",
                "\u0416\u044c\u04ad",
                "\u0410\u0431\u04b5",
                "\u0524\u0445\u044b\u043d\u04b7"
            ],
            "mon": [
                "\u0410\u0436\u044c\u044b\u0440\u043d\u044b\u04b3\u04d9\u0430",
                "\u0416\u04d9\u0430\u0431\u0440\u0430\u043d",
                "\u0425\u04d9\u0430\u0436\u04d9\u043a\u044b\u0440\u0430",
                "\u041c\u0448\u0430\u0525\u044b",
                "\u041b\u0430\u04b5\u0430\u0440\u0430",
                "\u0420\u0430\u0448\u04d9\u0430\u0440\u0430",
                "\u0524\u0445\u044b\u043d\u0433\u04d9\u044b",
                "\u041d\u0430\u043d\u04b3\u04d9\u0430",
                "\u0426\u04d9\u044b\u0431\u0431\u0440\u0430",
                "\u0416\u044c\u04ad\u0430\u0430\u0440\u0430",
                "\u0410\u0431\u04b5\u0430\u0440\u0430",
                "\u0524\u0445\u044b\u043d\u04b7\u043a\u04d9\u044b\u043d"
            ],
            "d_t_fmt": "%Y \u0430\u0448\u044b\u049b\u04d9\u0441 %d %B, %T",
            "d_fmt": "%m\/\/%d\/\/%Y",
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
