(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ro_RO'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%d%N%s%t%h%N%b%t%e%t%r%N%z%t%T%N%S%t%c%N",
            "country_name": "Rom\u00e2nia",
            "country_post": "RO",
            "country_ab2": "RO",
            "country_ab3": "ROU",
            "country_num": 642,
            "country_car": "RO",
            "country_isbn": 973,
            "lang_name": "rom\u00e2n\u0103",
            "lang_ab": "ro",
            "lang_term": "ron",
            "lang_lib": "rum"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[DdYy].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "Lei",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "RON ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%s%t%f%t%g%t%m",
            "name_gen": null,
            "name_mr": "Dl.",
            "name_mrs": "D-na.",
            "name_miss": "D-ra.",
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
            "int_select": null,
            "int_prefix": "40"
        },
        "LC_TIME": {
            "date_fmt": "%A %-e %B %Y, %H:%M:%S %z",
            "abday": [
                "Du",
                "Lu",
                "Ma",
                "Mi",
                "Jo",
                "Vi",
                "Sb"
            ],
            "day": [
                "duminic\u0103",
                "luni",
                "mar\u0163i",
                "miercuri",
                "joi",
                "vineri",
                "s\u00e2mb\u0103t\u0103"
            ],
            "week": null,
            "abmon": [
                "ian",
                "feb",
                "mar",
                "apr",
                "mai",
                "iun",
                "iul",
                "aug",
                "sep",
                "oct",
                "nov",
                "dec"
            ],
            "mon": [
                "ianuarie",
                "februarie",
                "martie",
                "aprilie",
                "mai",
                "iunie",
                "iulie",
                "august",
                "septembrie",
                "octombrie",
                "noiembrie",
                "decembrie"
            ],
            "d_t_fmt": "%a %d %b %Y %T %z",
            "d_fmt": "%d.%m.%Y",
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
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
