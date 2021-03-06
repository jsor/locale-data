(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['uz_UZ@cyrillic'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%C%N%T%N%s %h%N%f%N%b%N%d%N%e %r%N%a%N%z",
            "country_name": "\u040e\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u043e\u043d",
            "country_post": "UZ\" % ??",
            "country_ab2": "UZ",
            "country_ab3": "UZB",
            "country_num": 860,
            "country_car": "UZ",
            "country_isbn": null,
            "lang_name": "\u040e\u0437\u0431\u0435\u043a\u0447\u0430",
            "lang_ab": "uz",
            "lang_term": "uzb",
            "lang_lib": "uzb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1hH\u04b2\u04b3]",
            "noexpr": "^[-0nNyYjJ\u0419\u0439]",
            "yesstr": "\u04b3\u0430",
            "nostr": "\u0439\u045e\u049b"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0441\u045e\u043c",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
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
            "int_curr_symbol": "UZS ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%f%t%g%t%m",
            "name_gen": "\u04b2\u0443\u0440\u043c\u0430\u0442\u043b\u0438",
            "name_mr": "\u0416\u0430\u043d\u043e\u0431",
            "name_mrs": "\u0425\u043e\u043d\u0438\u043c",
            "name_miss": "",
            "name_ms": ""
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
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
            "int_prefix": "998"
        },
        "LC_TIME": {
            "date_fmt": "%d %B, %Y \u0439\u0438\u043b, %A",
            "abday": [
                "\u042f\u043a\u0448",
                "\u0414\u0443\u0448",
                "\u0421\u0435\u0448",
                "\u0427\u043e\u0440",
                "\u041f\u0430\u0439",
                "\u0416\u0443\u043c",
                "\u0428\u0430\u043d"
            ],
            "day": [
                "\u042f\u043a\u0448\u0430\u043d\u0431\u0430",
                "\u0414\u0443\u0448\u0430\u043d\u0431\u0430",
                "\u0421\u0435\u0448\u0430\u043d\u0431\u0430",
                "\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430",
                "\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430",
                "\u0416\u0443\u043c\u0430",
                "\u0428\u0430\u043d\u0431\u0430"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u042f\u043d\u0432",
                "\u0424\u0435\u0432",
                "\u041c\u0430\u0440",
                "\u0410\u043f\u0440",
                "\u041c\u0430\u0439",
                "\u0418\u044e\u043d",
                "\u0418\u044e\u043b",
                "\u0410\u0432\u0433",
                "\u0421\u0435\u043d",
                "\u041e\u043a\u0442",
                "\u041d\u043e\u044f",
                "\u0414\u0435\u043a"
            ],
            "mon": [
                "\u042f\u043d\u0432\u0430\u0440",
                "\u0424\u0435\u0432\u0440\u0430\u043b",
                "\u041c\u0430\u0440\u0442",
                "\u0410\u043f\u0440\u0435\u043b",
                "\u041c\u0430\u0439",
                "\u0418\u044e\u043d",
                "\u0418\u044e\u043b",
                "\u0410\u0432\u0433\u0443\u0441\u0442",
                "\u0421\u0435\u043d\u0442\u044f\u0431\u0440",
                "\u041e\u043a\u0442\u044f\u0431\u0440",
                "\u041d\u043e\u044f\u0431\u0440",
                "\u0414\u0435\u043a\u0430\u0431\u0440"
            ],
            "d_t_fmt": "%T, %d %B, %Y \u0439\u0438\u043b, %A",
            "d_fmt": "%d\/\/%m\/\/%y",
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
