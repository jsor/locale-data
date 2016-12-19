(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ga_IE@euro'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u00c9ire",
            "country_post": null,
            "country_ab2": "IE",
            "country_ab3": "IRL",
            "country_num": 372,
            "country_car": "IRL",
            "country_isbn": null,
            "lang_name": "Gaeilge",
            "lang_ab": "ga",
            "lang_term": "gle",
            "lang_lib": "gle"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1tTyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "t\u00e1",
            "nostr": "n\u00edl"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
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
            "int_select": null,
            "int_prefix": "353"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Domh",
                "Luan",
                "M\u00e1irt",
                "C\u00e9ad",
                "D\u00e9ar",
                "Aoine",
                "Sath"
            ],
            "day": [
                "D\u00e9 Domhnaigh",
                "D\u00e9 Luain",
                "D\u00e9 M\u00e1irt",
                "D\u00e9 C\u00e9adaoin",
                "D\u00e9ardaoin",
                "D\u00e9 hAoine",
                "D\u00e9 Sathairn"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Ean",
                "Feabh",
                "M\u00e1rta",
                "Aib",
                "Beal",
                "Meith",
                "I\u00fail",
                "L\u00fan",
                "MF\u00f3mh",
                "DF\u00f3mh",
                "Samh",
                "Noll"
            ],
            "mon": [
                "Ean\u00e1ir",
                "Feabhra",
                "M\u00e1rta",
                "Aibre\u00e1n",
                "Bealtaine",
                "Meitheamh",
                "I\u00fail",
                "L\u00fanasa",
                "Me\u00e1n F\u00f3mhair",
                "Deireadh F\u00f3mhair",
                "Samhain",
                "Nollaig"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
