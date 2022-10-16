(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mg_MG'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Madagasikara",
            "country_post": null,
            "country_ab2": "MG",
            "country_ab3": "MDG",
            "country_num": 450,
            "country_car": "RM",
            "country_isbn": null,
            "lang_name": "Malagasy",
            "lang_ab": "mg",
            "lang_term": "mlg",
            "lang_lib": "mlg"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1eEyY]",
            "noexpr": "^[-0tTnN]",
            "yesstr": "Eny",
            "nostr": "Tsia"
        },
        "LC_MONETARY": {
            "currency_symbol": "Ar",
            "mon_decimal_point": ",",
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
            "int_curr_symbol": "MGA ",
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
            "tel_dom_fmt": "%a %l",
            "int_select": "00",
            "int_prefix": "261"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "lhd",
                "lts",
                "tlt",
                "lrb",
                "lkm",
                "zom",
                "sab"
            ],
            "day": [
                "alahady",
                "alatsinainy",
                "talata",
                "alarobia",
                "alakamisy",
                "zoma",
                "sabotsy"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mey",
                "Jon",
                "Jol",
                "Aog",
                "Sep",
                "Okt",
                "Nov",
                "Des"
            ],
            "mon": [
                "Janoary",
                "Febroary",
                "Martsa",
                "Aprily",
                "Mey",
                "Jona",
                "Jolay",
                "Aogositra",
                "Septambra",
                "Oktobra",
                "Novambra",
                "Desambra"
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
            "timezone": null
        }
    };
}));
