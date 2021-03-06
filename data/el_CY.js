(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['el_CY'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2",
            "country_post": null,
            "country_ab2": "CY",
            "country_ab3": "CYP",
            "country_num": 196,
            "country_car": "CY",
            "country_isbn": null,
            "lang_name": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
            "lang_ab": "el",
            "lang_term": "ell",
            "lang_lib": "gre"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u03bd\u039d]",
            "noexpr": "^[-0nN\u03bf\u039f\u03cc\u038c]",
            "yesstr": "\u03bd\u03b1\u03b9",
            "nostr": "\u03cc\u03c7\u03b9"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 0,
            "n_cs_precedes": 0,
            "n_sep_by_space": 0,
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
            "thousands_sep": ".",
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
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "357"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %r %Z",
            "abday": [
                "\u039a\u03c5\u03c1",
                "\u0394\u03b5\u03c5",
                "\u03a4\u03c1\u03b9",
                "\u03a4\u03b5\u03c4",
                "\u03a0\u03b5\u03bc",
                "\u03a0\u03b1\u03c1",
                "\u03a3\u03b1\u03b2"
            ],
            "day": [
                "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae",
                "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1",
                "\u03a4\u03c1\u03af\u03c4\u03b7",
                "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7",
                "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7",
                "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae",
                "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0399\u03b1\u03bd",
                "\u03a6\u03b5\u03b2",
                "\u039c\u03b1\u03c1",
                "\u0391\u03c0\u03c1",
                "\u039c\u03b1\u0390",
                "\u0399\u03bf\u03c5\u03bd",
                "\u0399\u03bf\u03c5\u03bb",
                "\u0391\u03c5\u03b3",
                "\u03a3\u03b5\u03c0",
                "\u039f\u03ba\u03c4",
                "\u039d\u03bf\u03b5",
                "\u0394\u03b5\u03ba"
            ],
            "mon": [
                "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5",
                "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5",
                "\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5",
                "\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5",
                "\u039c\u03b1\u0390\u03bf\u03c5",
                "\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5",
                "\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5",
                "\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5",
                "\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5",
                "\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5",
                "\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5",
                "\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5"
            ],
            "d_t_fmt": "%a %d %b %Y %r %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%r",
            "am_pm": [
                "\u03c0\u03bc",
                "\u03bc\u03bc"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null,
            "ab_alt_mon": [
                "\u0399\u03b1\u03bd",
                "\u03a6\u03b5\u03b2",
                "\u039c\u03ac\u03c1",
                "\u0391\u03c0\u03c1",
                "\u039c\u03ac\u03b9",
                "\u0399\u03bf\u03cd\u03bd",
                "\u0399\u03bf\u03cd\u03bb",
                "\u0391\u03cd\u03b3",
                "\u03a3\u03b5\u03c0",
                "\u039f\u03ba\u03c4",
                "\u039d\u03bf\u03ad",
                "\u0394\u03b5\u03ba"
            ],
            "alt_mon": [
                "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
                "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
                "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2",
                "\u039c\u03ac\u03b9\u03bf\u03c2",
                "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2",
                "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2",
                "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2",
                "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
                "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2",
                "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
                "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"
            ]
        }
    };
}));
