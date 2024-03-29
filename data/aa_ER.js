(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['aa_ER'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Eretria",
            "country_post": "ERI",
            "country_ab2": "ER",
            "country_ab3": "ERI",
            "country_num": 232,
            "country_car": "ER",
            "country_isbn": null,
            "lang_name": "Qafar",
            "lang_ab": "aa",
            "lang_term": "aar",
            "lang_lib": "aar"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0mnMN]",
            "yesstr": "Yeey",
            "nostr": "Maleey"
        },
        "LC_MONETARY": {
            "currency_symbol": "Nfk",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 0,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "ERN ",
            "int_frac_digits": 0,
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
            "name_mr": "Toobokoyta",
            "name_mrs": "Gisti",
            "name_miss": "Maqanxa",
            "name_ms": ""
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
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
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "291"
        },
        "LC_TIME": {
            "date_fmt": "%A, %B %e, %r %Z %Y",
            "abday": [
                "Aca",
                "Etl",
                "Tal",
                "Arb",
                "Kam",
                "Gum",
                "Sab"
            ],
            "day": [
                "Acaada",
                "Etleeni",
                "Talaata",
                "Arbaqa",
                "Kamiisi",
                "Gumqata",
                "Sabti"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Qun",
                "Nah",
                "Cig",
                "Agd",
                "Cax",
                "Qas",
                "Qad",
                "Leq",
                "Way",
                "Dit",
                "Xim",
                "Kax"
            ],
            "mon": [
                "Qunxa Garablu",
                "Naharsi Kudo",
                "Ciggilta Kudo",
                "Agda Baxis",
                "Caxah Alsa",
                "Qasa Dirri",
                "Qado Dirri",
                "Liiqen",
                "Waysu",
                "Diteli",
                "Ximoli",
                "Kaxxa Garablu"
            ],
            "d_t_fmt": "%A, %B %e, %Y %r %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%l:%M:%S %p",
            "am_pm": [
                "saaku",
                "carra"
            ],
            "t_fmt_ampm": "%l:%M:%S %p",
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
