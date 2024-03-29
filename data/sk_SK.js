(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sk_SK'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Slovensko",
            "country_post": null,
            "country_ab2": "SK",
            "country_ab3": "SVK",
            "country_num": 703,
            "country_car": "SK",
            "country_isbn": null,
            "lang_name": "sloven\u010dina",
            "lang_ab": "sk",
            "lang_term": "slk",
            "lang_lib": "slo"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1aA\u00e1\u00c1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "\u00e1no",
            "nostr": "nie"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
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
            "thousands_sep": "\u202f",
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
            "int_prefix": "421"
        },
        "LC_TIME": {
            "date_fmt": "%a\u00a0%e.\u00a0%B\u00a0%Y,\u00a0%H:%M:%S\u00a0%Z",
            "abday": [
                "Ne",
                "Po",
                "Ut",
                "St",
                "\u0160t",
                "Pi",
                "So"
            ],
            "day": [
                "Nede\u013ea",
                "Pondelok",
                "Utorok",
                "Streda",
                "\u0160tvrtok",
                "Piatok",
                "Sobota"
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
                "m\u00e1j",
                "j\u00fan",
                "j\u00fal",
                "aug",
                "sep",
                "okt",
                "nov",
                "dec"
            ],
            "mon": [
                "janu\u00e1r",
                "febru\u00e1r",
                "marec",
                "apr\u00edl",
                "m\u00e1j",
                "j\u00fan",
                "j\u00fal",
                "august",
                "september",
                "okt\u00f3ber",
                "november",
                "december"
            ],
            "d_t_fmt": "%a\u00a0%e.\u00a0%B\u00a0%Y,\u00a0%H:%M:%S",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%H:%M:%S",
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
