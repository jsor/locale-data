(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sr_RS@latin'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Srbija",
            "country_post": "RS",
            "country_ab2": "RS",
            "country_ab3": "SRB",
            "country_num": 688,
            "country_car": "SRB",
            "country_isbn": 86,
            "lang_name": "srpski",
            "lang_ab": "sr",
            "lang_term": "srp",
            "lang_lib": "srp"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1dDyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "da",
            "nostr": "ne"
        },
        "LC_MONETARY": {
            "currency_symbol": "din",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 0,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "RSD ",
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
            "name_gen": "",
            "name_mr": "g-din",
            "name_mrs": "g-\u0111a",
            "name_miss": "g-\u0111ica",
            "name_ms": "g-\u0111a"
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
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%A %l",
            "int_select": "99",
            "int_prefix": "381"
        },
        "LC_TIME": {
            "date_fmt": "%a, %e. %b %Y.  %H:%M:%S %Z",
            "abday": [
                "ned",
                "pon",
                "uto",
                "sre",
                "\u010det",
                "pet",
                "sub"
            ],
            "day": [
                "nedelja",
                "ponedeljak",
                "utorak",
                "sreda",
                "\u010detvrtak",
                "petak",
                "subota"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "jan",
                "feb",
                "mar",
                "apr",
                "maj",
                "jun",
                "jul",
                "avg",
                "sep",
                "okt",
                "nov",
                "dec"
            ],
            "mon": [
                "januar",
                "februar",
                "mart",
                "april",
                "maj",
                "jun",
                "jul",
                "avgust",
                "septembar",
                "oktobar",
                "novembar",
                "decembar"
            ],
            "d_t_fmt": "%A, %d. %B %Y. %T %Z",
            "d_fmt": "%d.%m.%Y.",
            "t_fmt": "%T",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "%T",
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
