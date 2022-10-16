(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['unm_US'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T, %S %z%N%c%N",
            "country_name": "USA",
            "country_post": "USA",
            "country_ab2": "US",
            "country_ab3": "USA",
            "country_num": 840,
            "country_car": "USA",
            "country_isbn": 0,
            "lang_name": "Lenape",
            "lang_ab": null,
            "lang_term": "unm",
            "lang_lib": "unm"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0kKmM]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "USD ",
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
            "thousands_sep": "\u202f",
            "grouping": [
                2,
                2,
                2,
                3
            ]
        },
        "LC_PAPER": {
            "height": 279,
            "width": 216
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c (%a) %l",
            "tel_dom_fmt": "(%a) %l",
            "int_select": "11",
            "int_prefix": "1"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "ken",
                "man",
                "tus",
                "lel",
                "tas",
                "pel",
                "sat"
            ],
            "day": [
                "kentuwei",
                "manteke",
                "tusteke",
                "lelai",
                "tasteke",
                "pelaiteke",
                "sateteke"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "eni",
                "chk",
                "xam",
                "kwe",
                "tai",
                "nip",
                "lai",
                "win",
                "tah",
                "puk",
                "kun",
                "mux"
            ],
            "mon": [
                "enikwsi",
                "chkwali",
                "xamokhwite",
                "kwetayoxe",
                "tainipen",
                "kichinipen",
                "lainipen",
                "winaminke",
                "kichitahkok",
                "puksit",
                "wini",
                "muxkotae"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d\/\/%m\/\/%y",
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
