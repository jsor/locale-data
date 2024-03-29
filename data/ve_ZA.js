(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ve_ZA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Afurika Tshipembe",
            "country_post": "ZA",
            "country_ab2": "ZA",
            "country_ab3": "ZAF",
            "country_num": 710,
            "country_car": "ZA",
            "country_isbn": null,
            "lang_name": "Tshiven\u1e13a",
            "lang_ab": "ve",
            "lang_term": "ven",
            "lang_lib": "ven"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYeE]",
            "noexpr": "^[-0nNhH]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "R",
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
            "int_curr_symbol": "ZAR ",
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
            "tel_dom_fmt": "(%A) %l",
            "int_select": "00",
            "int_prefix": "27"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "Swo",
                "Mus",
                "Vhi",
                "Rar",
                "\u1e4ba",
                "\u1e70an",
                "Mug"
            ],
            "day": [
                "Swondaha",
                "Musumbuluwo",
                "\u1e3cavhuvhili",
                "\u1e3cavhuraru",
                "\u1e3cavhu\u1e4ba",
                "\u1e3cavhu\u1e71anu",
                "Mugivhela"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Pha",
                "Luh",
                "Fam",
                "Lam",
                "Shu",
                "Lwi",
                "Lwa",
                "Ngu",
                "Khu",
                "Tsh",
                "\u1e3car",
                "Nye"
            ],
            "mon": [
                "Phando",
                "Luhuhi",
                "\u1e70hafamuhwe",
                "Lambamai",
                "Shundunthule",
                "Fulwi",
                "Fulwana",
                "\u1e70hangule",
                "Khubvumedzi",
                "Tshimedzi",
                "\u1e3cara",
                "Nyendavhusiku"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d\/\/%m\/\/%Y",
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
