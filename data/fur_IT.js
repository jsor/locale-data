(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['fur_IT'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Italie",
            "country_post": null,
            "country_ab2": "IT",
            "country_ab3": "ITA",
            "country_num": 380,
            "country_car": "I",
            "country_isbn": null,
            "lang_name": "Furlan",
            "lang_ab": null,
            "lang_term": "fur",
            "lang_lib": null
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1sSjJoOyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "s\u00ec",
            "nostr": "no"
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
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
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
            "tel_dom_fmt": null,
            "int_select": null,
            "int_prefix": "39"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Dom",
                "Lun",
                "Mar",
                "Mia",
                "Joi",
                "Vin",
                "Sab"
            ],
            "day": [
                "Domenie",
                "Lunis",
                "Martars",
                "Miarcus",
                "Joibe",
                "Vinars",
                "Sabide"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Zen",
                "Fev",
                "Mar",
                "Avr",
                "Mai",
                "Jug",
                "Lui",
                "Avo",
                "Set",
                "Otu",
                "Nov",
                "Dec"
            ],
            "mon": [
                "Zen\u00e2r",
                "Fevr\u00e2r",
                "Mar\u00e7",
                "Avr\u00eel",
                "Mai",
                "Jugn",
                "Lui",
                "Avost",
                "Setembar",
                "Otubar",
                "Novembar",
                "Decembar"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d. %m. %y",
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
