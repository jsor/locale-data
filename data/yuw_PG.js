(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['yuw_PG'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Papua New Guinea",
            "country_post": "",
            "country_ab2": "PG",
            "country_ab3": "PNG",
            "country_num": 598,
            "country_car": "PNG",
            "country_isbn": null,
            "lang_name": "Yau\/Nungon",
            "lang_ab": "",
            "lang_term": "yuw",
            "lang_lib": "yuw"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u00f6\u00d6]",
            "noexpr": "^[-0nNmM]",
            "yesstr": "\u00f6\u00f6",
            "nostr": "muuno"
        },
        "LC_MONETARY": {
            "currency_symbol": "K",
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
            "int_curr_symbol": "PGK ",
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
            "int_select": "00",
            "int_prefix": "675"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "s\u00f6n",
                "m\u00f6n",
                "sin",
                "mit",
                "soi",
                "nen",
                "sab"
            ],
            "day": [
                "s\u00f6nda",
                "m\u00f6nda",
                "sinda",
                "mitiw\u00f6",
                "sogipbono",
                "nenggo",
                "s\u00f6ndanggie"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "jen",
                "feb",
                "mas",
                "epr",
                "mei",
                "jun",
                "jul",
                "\u00f6gu",
                "sep",
                "\u00f6kt",
                "n\u00f6w",
                "dis"
            ],
            "mon": [
                "jenuari",
                "febuari",
                "mas",
                "epril",
                "mei",
                "jun",
                "julai",
                "\u00f6gus",
                "septemba",
                "\u00f6ktoba",
                "n\u00f6wemba",
                "diksemba"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/\/%m\/\/%y",
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
