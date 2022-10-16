(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['rif_MA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Lmerruk",
            "country_post": null,
            "country_ab2": "MA",
            "country_ab3": "MAR",
            "country_num": 504,
            "country_car": "MA",
            "country_isbn": null,
            "lang_name": "Tarifit",
            "lang_ab": null,
            "lang_term": "rif",
            "lang_lib": "rif"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYwW]",
            "noexpr": "^[-0nNlL]",
            "yesstr": "Wah",
            "nostr": "Lla"
        },
        "LC_MONETARY": {
            "currency_symbol": "dh",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 0,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "MAD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%g%t%f",
            "name_gen": null,
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": "",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c%l",
            "tel_dom_fmt": "0%l",
            "int_select": "00",
            "int_prefix": "212"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %Y %H:%M:%S %Z",
            "abday": [
                "L\u1e25e",
                "Let",
                "Ttl",
                "Lar",
                "Lex",
                "Jje",
                "Sbt"
            ],
            "day": [
                "L\u1e25ed",
                "Letnayen",
                "Ttlat",
                "Larbe\u025b",
                "Lexmiss",
                "Jjem\u025ba",
                "Ssebt"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Yen",
                "Feb",
                "Mar",
                "Yeb",
                "May",
                "Yun",
                "Yul",
                "\u0194uc",
                "Cut",
                "K\u1e6du",
                "Nuv",
                "Duj"
            ],
            "mon": [
                "Yennayer",
                "Febrayer",
                "Mares",
                "Yebril",
                "Mayyu",
                "Yunyu",
                "Yulyuz",
                "\u0194uct",
                "Cutenber",
                "K\u1e6duber",
                "Nuvember",
                "Dujember"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/\/%m\/\/%y",
            "t_fmt": "%T",
            "am_pm": [
                "sb",
                "a\u025b"
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
