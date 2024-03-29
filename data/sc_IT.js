(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sc_IT'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "It\u00e0lia",
            "country_post": null,
            "country_ab2": "IT",
            "country_ab3": "ITA",
            "country_num": 380,
            "country_car": "I",
            "country_isbn": "978-88,979-12",
            "lang_name": "sardu",
            "lang_ab": "sc",
            "lang_term": "srd",
            "lang_lib": "srd"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1eEaAsSoOyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "eja",
            "nostr": "nono"
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
            "int_prefix": "39"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %Y %H:%M:%S %Z",
            "abday": [
                "Dom",
                "Lun",
                "Mar",
                "M\u00e8r",
                "Gi\u00f2",
                "Che",
                "S\u00e0b"
            ],
            "day": [
                "Dom\u00ecnigu",
                "Lunis",
                "Martis",
                "M\u00e8rcuris",
                "Gi\u00f2bia",
                "Chen\u00e0bura",
                "S\u00e0badu"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Ghe",
                "Fre",
                "Mar",
                "Abr",
                "Maj",
                "L\u00e0m",
                "Arg",
                "Aus",
                "Cab",
                "Lad",
                "Onn",
                "Nad"
            ],
            "mon": [
                "Ghenn\u00e0rgiu",
                "Fre\u00e0rgiu",
                "Martzu",
                "Abrile",
                "Maju",
                "L\u00e0mpadas",
                "Argiolas\/\/Tr\u00eculas",
                "Austu",
                "Cabudanni",
                "Santugaine\/\/Lad\u00e0mine",
                "Onniasantu\/\/Santandria",
                "Nadale\/\/Idas"
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
