(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sv_SE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Sverige",
            "country_post": null,
            "country_ab2": "SE",
            "country_ab3": "SWE",
            "country_num": 752,
            "country_car": "S",
            "country_isbn": null,
            "lang_name": "svenska",
            "lang_ab": "sv",
            "lang_term": "swe",
            "lang_lib": "swe"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1jJyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "ja",
            "nostr": "nej"
        },
        "LC_MONETARY": {
            "currency_symbol": "kr",
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
            "int_curr_symbol": "SEK ",
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
            "tel_int_fmt": "+%c-%a-%l",
            "tel_dom_fmt": "0%a-%l",
            "int_select": "00",
            "int_prefix": "46"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %Y %H:%M:%S %Z",
            "abday": [
                "s\u00f6n",
                "m\u00e5n",
                "tis",
                "ons",
                "tor",
                "fre",
                "l\u00f6r"
            ],
            "day": [
                "s\u00f6ndag",
                "m\u00e5ndag",
                "tisdag",
                "onsdag",
                "torsdag",
                "fredag",
                "l\u00f6rdag"
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
                "maj",
                "jun",
                "jul",
                "aug",
                "sep",
                "okt",
                "nov",
                "dec"
            ],
            "mon": [
                "januari",
                "februari",
                "mars",
                "april",
                "maj",
                "juni",
                "juli",
                "augusti",
                "september",
                "oktober",
                "november",
                "december"
            ],
            "d_t_fmt": "%a %e %b %Y %H:%M:%S",
            "d_fmt": "%Y-%m-%d",
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
