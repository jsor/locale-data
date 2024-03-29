(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['kl_GL'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Kalaallit Nunaat",
            "country_post": null,
            "country_ab2": "GL",
            "country_ab3": "GRL",
            "country_num": 304,
            "country_car": "KN",
            "country_isbn": null,
            "lang_name": "kalaallisut",
            "lang_ab": "kl",
            "lang_term": "kal",
            "lang_lib": "kal"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1JjYyAa]",
            "noexpr": "^[-0Nn]",
            "yesstr": "aap",
            "nostr": "naagga"
        },
        "LC_MONETARY": {
            "currency_symbol": "kr.",
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
            "p_sep_by_space": 2,
            "n_cs_precedes": 1,
            "n_sep_by_space": 2,
            "p_sign_posn": 4,
            "n_sign_posn": 4,
            "int_curr_symbol": "DKK ",
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
            "int_prefix": "299"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %d %Y %T %Z",
            "abday": [
                "sap",
                "ata",
                "mar",
                "pin",
                "sis",
                "tal",
                "arf"
            ],
            "day": [
                "sapaat",
                "ataasinngorneq",
                "marlunngorneq",
                "pingasunngorneq",
                "sisamanngorneq",
                "tallimanngorneq",
                "arfininngorneq"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "jan",
                "feb",
                "mar",
                "apr",
                "maj",
                "jun",
                "jul",
                "aug",
                "sep",
                "okt",
                "nov",
                "dec"
            ],
            "mon": [
                "januaarip",
                "februaarip",
                "marsip",
                "apriilip",
                "maajip",
                "juunip",
                "juulip",
                "aggustip",
                "septembarip",
                "oktobarip",
                "novembarip",
                "decembarip"
            ],
            "d_t_fmt": "%a %b %d %Y %T",
            "d_fmt": "%b %d %Y",
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
                "januaari",
                "februaari",
                "marsi",
                "apriili",
                "maaji",
                "juuni",
                "juuli",
                "aggusti",
                "septembari",
                "oktobari",
                "novembari",
                "decembari"
            ]
        }
    };
}));
