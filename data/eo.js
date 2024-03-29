(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['eo'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": null,
            "country_ab3": null,
            "country_num": null,
            "country_car": null,
            "country_isbn": null,
            "lang_name": "esperanto",
            "lang_ab": "eo",
            "lang_term": "epo",
            "lang_lib": null
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1JjYy]",
            "noexpr": "^[-0nN]",
            "yesstr": "Jes",
            "nostr": "Ne"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u00a4",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
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
            "int_curr_symbol": "XDR ",
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
            "name_mr": "s-ro",
            "name_mrs": "s-ino",
            "name_miss": null,
            "name_ms": "s-ino"
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
            "tel_int_fmt": "+%c %a%t%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": null
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %z",
            "abday": [
                "dim",
                "lun",
                "mar",
                "mer",
                "\u0135a\u016d",
                "ven",
                "sab"
            ],
            "day": [
                "diman\u0109o",
                "lundo",
                "mardo",
                "merkredo",
                "\u0135a\u016ddo",
                "vendredo",
                "sabato"
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
                "Maj",
                "Jun",
                "Jul",
                "A\u016dg",
                "Sep",
                "Okt",
                "Nov",
                "Dec"
            ],
            "mon": [
                "Januaro",
                "Februaro",
                "Marto",
                "Aprilo",
                "Majo",
                "Junio",
                "Julio",
                "A\u016dgusto",
                "Septembro",
                "Oktobro",
                "Novembro",
                "Decembro"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%Y-%m-%d",
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
