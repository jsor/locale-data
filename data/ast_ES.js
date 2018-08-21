(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ast_ES'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Espa\u00f1a",
            "country_post": null,
            "country_ab2": "ES",
            "country_ab3": "ESP",
            "country_num": 724,
            "country_car": "E",
            "country_isbn": null,
            "lang_name": "asturianu",
            "lang_ab": null,
            "lang_term": "ast",
            "lang_lib": "ast"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1sSyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "s\u00ed",
            "nostr": "non"
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
            "int_select": "00",
            "int_prefix": "34"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "dom",
                "llu",
                "mar",
                "mi\u00e9",
                "xue",
                "vie",
                "s\u00e1b"
            ],
            "day": [
                "domingu",
                "llunes",
                "martes",
                "mi\u00e9rcoles",
                "xueves",
                "vienres",
                "s\u00e1badu"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "xin",
                "feb",
                "mar",
                "abr",
                "may",
                "xun",
                "xnt",
                "ago",
                "set",
                "och",
                "pay",
                "avi"
            ],
            "mon": [
                "de xineru",
                "de febreru",
                "de marzu",
                "d\u2019abril",
                "de mayu",
                "de xunu",
                "de xunetu",
                "d\u2019agostu",
                "de setiembre",
                "d\u2019ochobre",
                "de payares",
                "d\u2019avientu"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
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
            "timezone": null,
            "alt_mon": [
                "xineru",
                "febreru",
                "marzu",
                "abril",
                "mayu",
                "xunu",
                "xunetu",
                "agostu",
                "setiembre",
                "ochobre",
                "payares",
                "avientu"
            ]
        }
    };
}));
