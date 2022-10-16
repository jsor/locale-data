(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['is_IS'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u00cdsland",
            "country_post": null,
            "country_ab2": "IS",
            "country_ab3": "ISL",
            "country_num": 352,
            "country_car": "IS",
            "country_isbn": null,
            "lang_name": "\u00edslenska",
            "lang_ab": "is",
            "lang_term": "isl",
            "lang_lib": "ice"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1jJyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "j\u00e1",
            "nostr": "nei"
        },
        "LC_MONETARY": {
            "currency_symbol": "kr",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 0,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "ISK ",
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
            "int_prefix": "354"
        },
        "LC_TIME": {
            "date_fmt": "%a %e.%b %Y, %T %Z",
            "abday": [
                "sun",
                "m\u00e1n",
                "\u00feri",
                "mi\u00f0",
                "fim",
                "f\u00f6s",
                "lau"
            ],
            "day": [
                "sunnudagur",
                "m\u00e1nudagur",
                "\u00feri\u00f0judagur",
                "mi\u00f0vikudagur",
                "fimmtudagur",
                "f\u00f6studagur",
                "laugardagur"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "jan",
                "feb",
                "mar",
                "apr",
                "ma\u00ed",
                "j\u00fan",
                "j\u00fal",
                "\u00e1g\u00fa",
                "sep",
                "okt",
                "n\u00f3v",
                "des"
            ],
            "mon": [
                "jan\u00faar",
                "febr\u00faar",
                "mars",
                "apr\u00edl",
                "ma\u00ed",
                "j\u00fan\u00ed",
                "j\u00fal\u00ed",
                "\u00e1g\u00fast",
                "september",
                "okt\u00f3ber",
                "n\u00f3vember",
                "desember"
            ],
            "d_t_fmt": "%a %e.%b %Y, %T",
            "d_fmt": "%a %e.%b %Y",
            "t_fmt": "%T",
            "am_pm": [
                "fh",
                "eh"
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
