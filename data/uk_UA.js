(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['uk_UA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%t%f%t%d%N%s%t%h%t, %b%t%e%t%r%N%T%t%S%N%z%N%c",
            "country_name": "\u0423\u043a\u0440\u0430\u0457\u043d\u0430\" % Ukrayina",
            "country_post": "UA",
            "country_ab2": "UA",
            "country_ab3": "UKR",
            "country_num": 804,
            "country_car": "UA",
            "country_isbn": 966,
            "lang_name": "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430\" % ukrayins`ka [mova]",
            "lang_ab": "uk",
            "lang_term": "ukr",
            "lang_lib": "ukr"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^([+1Yy]|[\u0422\u0442][\u0410\u0430][\u041a\u043a]?)$",
            "noexpr": "^([-0Nn]|[\u041d\u043d][\u0406\u0456])$",
            "yesstr": "\u0442\u0430\u043a",
            "nostr": "\u043d\u0456"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0433\u0440\u043d.\" % hr (hryvnya)",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f\" % \nnbsp (0X202F)",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 2,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "UAH ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": 2,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": 1,
            "int_p_sign_posn": 4,
            "int_n_sign_posn": 4
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f\" % pan Volodymyr Mykolayovych Lisivka",
            "name_gen": "\u0448\u0430\u043d\u043e\u0432\u043d\u0438\u0439(-\u043d\u0430)\" % shanovnyj(-na)",
            "name_mr": "\u043f\u0430\u043d\" % pane",
            "name_mrs": "\u043f\u0430\u043d\u0456\" % pani",
            "name_miss": "\u043f\u0430\u043d\u043d\u0430\" % panna",
            "name_ms": "\u043f\u0430\u043d\u0456\" % pani"
        },
        "LC_NUMERIC": {
            "decimal_point": ",\" % see LC_MONETARY:mon_decimal_pint",
            "thousands_sep": "\u202f\" % \nnbsp (0X202F)",
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
            "tel_dom_fmt": "(%A) %l",
            "int_select": "8~10",
            "int_prefix": "380"
        },
        "LC_TIME": {
            "date_fmt": "%A, %-d %B %Y %X %z",
            "abday": [
                "\u043d\u0434",
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "day": [
                "\u043d\u0435\u0434\u0456\u043b\u044f",
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
                "\u0441\u0456\u0447",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "mon": [
                "\u0441\u0456\u0447\u043d\u044f",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "d_t_fmt": "%a, %d-%b-%Y %X %z",
            "d_fmt": "%d.%m.%y",
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
            "cal_direction": 2,
            "timezone": null,
            "alt_mon": [
                "\u0441\u0456\u0447\u0435\u043d\u044c",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    };
}));
