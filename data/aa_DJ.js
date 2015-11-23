(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['aa_DJ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Yabuuti",
            "country_post": "DJI",
            "country_ab2": "DJ",
            "country_ab3": "DJI",
            "country_num": 262,
            "country_car": null,
            "country_isbn": null,
            "lang_name": "Qafar",
            "lang_ab": "aa",
            "lang_term": "aar",
            "lang_lib": "aar"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[oOyY].*",
            "noexpr": "^[mnMN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": " ",
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
            "int_curr_symbol": "DJF ",
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
            "name_gen": "",
            "name_mr": "Toobokoyta",
            "name_mrs": "Gisti",
            "name_miss": "Maqanxa",
            "name_ms": ""
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
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
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "253"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %r %Z %Y",
            "abday": [
                "aca",
                "etl",
                "tal",
                "arb",
                "kam",
                "gum",
                "sab"
            ],
            "day": [
                "Acaada",
                "Etleeni",
                "Talaata",
                "Arbaqa",
                "Kamiisi",
                "Gumqata",
                "Sabti"
            ],
            "week": null,
            "abmon": [
                "qun",
                "nah",
                "cig",
                "agd",
                "cax",
                "qas",
                "qad",
                "leq",
                "way",
                "dit",
                "xim",
                "kax"
            ],
            "mon": [
                "Qunxa Garablu",
                "Kudo",
                "Ciggilta Kudo",
                "Agda Baxisso",
                "Caxah Alsa",
                "Qasa Dirri",
                "Qado Dirri",
                "Liiqen",
                "Waysu",
                "Diteli",
                "Ximoli",
                "Kaxxa Garablu"
            ],
            "d_t_fmt": "%a %d %b %Y %r %Z",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "saaku",
                "carra"
            ],
            "t_fmt_ampm": "%X %p",
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