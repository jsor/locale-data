(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['iu_CA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T %z%N%c%N",
            "country_name": "\u1472\u14c7\u1455",
            "country_post": "CA",
            "country_ab2": "CA",
            "country_ab3": "CAN",
            "country_num": 124,
            "country_car": "CDN",
            "country_isbn": null,
            "lang_name": "\u1403\u14c4\u1483\u144e\u1450\u1466",
            "lang_ab": "iu",
            "lang_term": "iku",
            "lang_lib": "iku"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYsS]",
            "noexpr": "^[-0nN]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
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
            "int_curr_symbol": "CAD ",
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
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": [
                3,
                3
            ]
        },
        "LC_PAPER": {
            "height": 279,
            "width": 216
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "011",
            "int_prefix": "1"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %r %Z",
            "abday": [
                "\u14c8",
                "\u14c7",
                "\u14d5",
                "\u1431",
                "\u157f",
                "\u1405",
                "\u14ef"
            ],
            "day": [
                "\u14c8\u1466\u144e\u1591\u152d\u1550\u1555\u1483",
                "\u14c7\u14a1\u1490\u153e\u152d\u1405",
                "\u14c7\u14a1\u1490\u153e\u152d\u1405\u14d5\u1585\u146d\u1466",
                "\u1431\u1593\u14f2\u14d5\u1585\u14ef\u1405\u1466",
                "\u157f\u144e\u1585\u1470\u1466",
                "\u1405\u14ea\u14d7\u1548\u14d8\u1450\u1403\u14c7\u1585",
                "\u14ef\u1559\u1456\u1555\u1483"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u152e\u14c4",
                "\u1555\u1557",
                "\u14aa\u1505",
                "\u1403\u1433",
                "\u14aa\u1403",
                "\u152a\u14c2",
                "\u152a\u14da",
                "\u140a\u148b",
                "\u14ef\u144e",
                "\u140a\u1466",
                "\u14c4\u1555",
                "\u144e\u14ef"
            ],
            "mon": [
                "\u152e\u14c4\u140a\u14d5",
                "\u1555\u1557\u140a\u14d5",
                "\u14aa\u1505\u14ef",
                "\u1403\u1433\u14d7",
                "\u14aa\u1403",
                "\u152a\u14c2",
                "\u152a\u14da\u1403",
                "\u140a\u148b\u14ef",
                "\u14ef\u144e\u1559",
                "\u140a\u1466\u1450\u1559",
                "\u14c4\u1555\u1559",
                "\u144e\u14ef\u155d\u1559"
            ],
            "d_t_fmt": "%a %d %b %Y %r",
            "d_fmt": "%m\/\/%d\/\/%y",
            "t_fmt": "%r",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
