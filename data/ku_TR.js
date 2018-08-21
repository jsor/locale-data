(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ku_TR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Turkey",
            "country_post": "TR",
            "country_ab2": "TR",
            "country_ab3": "TUR",
            "country_num": 792,
            "country_car": "TR",
            "country_isbn": 975,
            "lang_name": "kurdi",
            "lang_ab": "ku",
            "lang_term": "kur",
            "lang_lib": "kur"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1eEdDyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "er\u00ea",
            "nostr": "n\u00e2"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ba",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "TRY ",
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
            "name_gen": "Say\u0131n",
            "name_mr": "M.",
            "name_mrs": "Jne",
            "name_miss": "K\u00e7k",
            "name_ms": "Jne"
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
            "int_prefix": "90"
        },
        "LC_TIME": {
            "date_fmt": "%A %d %B %Y",
            "abday": [
                "y\u00eak",
                "dus",
                "s\u00eas",
                "\u00e7ar",
                "p\u00ean",
                "\u00een\u00ee",
                "sep"
            ],
            "day": [
                "y\u00eaks\u00eam",
                "dus\u00eam",
                "s\u00eas\u00eam",
                "\u00e7ars\u00eam",
                "p\u00eancs\u00eam",
                "\u00een\u00ee",
                "sept"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u00c7il",
                "Sib",
                "Ada",
                "N\u00ees",
                "Gul",
                "Hez",
                "T\u00eer",
                "Teb",
                "\u00celo",
                "Cot",
                "Mij",
                "Kan"
            ],
            "mon": [
                "\u00c7ile",
                "Sibat",
                "Adar",
                "N\u00eesan",
                "Gulan",
                "Hez\u00eeran",
                "T\u00eermeh",
                "Tebax",
                "\u00celon",
                "Cotmeh",
                "Mijdar",
                "Kan\u00fbn"
            ],
            "d_t_fmt": "%A %d %B %Y %T %Z",
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
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
