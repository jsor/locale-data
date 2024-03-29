(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mhr_RU'] = factory();
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
            "lang_name": "\u043c\u0430\u0440\u0438\u0439 \u0439\u044b\u043b\u043c\u0435",
            "lang_ab": null,
            "lang_term": "mhr",
            "lang_lib": "mhr"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0422\u0442]",
            "noexpr": "^[-0nN\u0423\u0443]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20bd",
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
            "date_fmt": "%A %Y %B %d %H:%M:%S %Z",
            "abday": [
                "\u0420\u0448\u0440",
                "\u0428\u0447\u043c",
                "\u041a\u0436\u043c",
                "\u0412\u0433\u0447",
                "\u0418\u0437\u0440",
                "\u041a\u0433\u0440",
                "\u0428\u043c\u0442"
            ],
            "day": [
                "\u0420\u0443\u0448\u0430\u0440\u043d\u044f",
                "\u0428\u043e\u0447\u043c\u043e",
                "\u041a\u0443\u0448\u043a\u044b\u0436\u043c\u043e",
                "\u0412\u04f1\u0440\u0433\u0435\u0447\u0435",
                "\u0418\u0437\u0430\u0440\u043d\u044f",
                "\u041a\u0443\u0433\u0430\u0440\u043d\u044f",
                "\u0428\u0443\u043c\u0430\u0442\u043a\u0435\u0447\u0435"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0428\u0440\u043a",
                "\u041f\u0433\u0436",
                "\u04f0\u0440\u043d",
                "\u0412\u0448\u0440",
                "\u0410\u0433\u0430",
                "\u041f\u0434\u0448",
                "\u0421\u0440\u043c",
                "\u0421\u0440\u043b",
                "\u0418\u0434\u043c",
                "\u0428\u044b\u0436",
                "\u041a\u043b\u043c",
                "\u0422\u0435\u043b"
            ],
            "mon": [
                "\u0428\u043e\u0440\u044b\u043a\u0439\u043e\u043b",
                "\u041f\u0443\u0440\u0433\u044b\u0436",
                "\u04f0\u044f\u0440\u043d\u044f",
                "\u0412\u04f1\u0434\u0448\u043e\u0440",
                "\u0410\u0433\u0430",
                "\u041f\u0435\u043b\u0435\u0434\u044b\u0448",
                "\u0421\u04f1\u0440\u0435\u043c",
                "\u0421\u043e\u0440\u043b\u0430",
                "\u0418\u0434\u044b\u043c",
                "\u0428\u044b\u0436\u0430",
                "\u041a\u044b\u043b\u043c\u0435",
                "\u0422\u0435\u043b\u0435"
            ],
            "d_t_fmt": "%A %Y %B %d %T",
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
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
