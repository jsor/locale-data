(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['niu_NZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "NZ",
            "country_ab3": "NZL",
            "country_num": 554,
            "country_car": "NZ",
            "country_isbn": null,
            "lang_name": null,
            "lang_ab": null,
            "lang_term": "niu",
            "lang_lib": "niu"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1\u0113\u0112yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "Talia",
            "nostr": "Nakai"
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
            "int_curr_symbol": "NZD ",
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
            "int_prefix": "64"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Tapu",
                "Gofua",
                "Ua",
                "Lotu",
                "Tuloto",
                "Falaile",
                "Faiumu"
            ],
            "day": [
                "Aho Tapu",
                "Aho Gofua",
                "Aho Ua",
                "Aho Lotu",
                "Aho Tuloto",
                "Aho Falaile",
                "Aho Faiumu"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Ian",
                "Fep",
                "Mas",
                "Ape",
                "Me",
                "Iun",
                "Iul",
                "Aok",
                "Sep",
                "Oke",
                "Nov",
                "Tes"
            ],
            "mon": [
                "Ianuali",
                "Fepuali",
                "Masi",
                "Apelila",
                "Me",
                "Iuni",
                "Iulai",
                "Aokuso",
                "Sepetema",
                "Oketopa",
                "Novema",
                "Tesemo"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/%m\/%y",
            "t_fmt": "%T",
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
