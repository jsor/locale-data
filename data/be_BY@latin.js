(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['be_BY@latin'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Bie\u0142aru\u015b",
            "country_post": null,
            "country_ab2": "BY",
            "country_ab3": "BLR",
            "country_num": 112,
            "country_car": "BY",
            "country_isbn": null,
            "lang_name": "bie\u0142aruskaja mova",
            "lang_ab": "be",
            "lang_term": "bel",
            "lang_lib": "bel"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1TtYy]",
            "noexpr": "^[-0Nn]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "Rub",
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
            "int_curr_symbol": "BYR ",
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
            "int_select": "8~10",
            "int_prefix": "375"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Nia",
                "Pan",
                "A\u016dt",
                "Sie",
                "\u010ca\u0107",
                "Pia",
                "Sub"
            ],
            "day": [
                "Niadziela",
                "Paniadzie\u0142ak",
                "A\u016dtorak",
                "Sierada",
                "\u010ca\u0107vier",
                "Piatnica",
                "Subota"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Stu",
                "Lut",
                "Sak",
                "Kra",
                "Maj",
                "\u010cer",
                "Lip",
                "\u017dni",
                "Vie",
                "Kas",
                "Lis",
                "\u015ani"
            ],
            "mon": [
                "studzienia",
                "lutaha",
                "sakavika",
                "krasavika",
                "maja",
                "\u010dervienia",
                "lipienia",
                "\u017eni\u016dnia",
                "viera\u015bnia",
                "kastry\u010dnika",
                "listapada",
                "\u015bnie\u017enia"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d.%m.%Y",
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
                "Studzie\u0144",
                "Luty",
                "Sakavik",
                "Krasavik",
                "Maj",
                "\u010cervie\u0144",
                "Lipie\u0144",
                "\u017dnivie\u0144",
                "Vierasie\u0144",
                "Kastry\u010dnik",
                "Listapad",
                "\u015anie\u017ea\u0144"
            ]
        }
    };
}));
