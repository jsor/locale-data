(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['szl_PL'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "PL",
            "country_ab3": "POL",
            "country_num": 616,
            "country_car": "PL",
            "country_isbn": null,
            "lang_name": "\u015bl\u014dnsk\u014f g\u014fdka",
            "lang_ab": null,
            "lang_term": "szl",
            "lang_lib": "szl"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1JjTtYy]",
            "noexpr": "^[-0nN]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "z\u0142",
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
            "int_curr_symbol": "PLN ",
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
            "tel_dom_fmt": null,
            "int_select": null,
            "int_prefix": "48"
        },
        "LC_TIME": {
            "date_fmt": "%a, %-d %b %Y, %T %Z",
            "abday": [
                "niy",
                "py\u0144",
                "wt\u014f",
                "str",
                "szt",
                "pj\u014d",
                "sob"
            ],
            "day": [
                "niydziela",
                "py\u0144dzi\u014fek",
                "wt\u014frek",
                "strz\u014fda",
                "sztwortek",
                "pj\u014dntek",
                "sob\u014fta"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "sty",
                "lut",
                "mer",
                "kwj",
                "moj",
                "czy",
                "lip",
                "siy",
                "wrz",
                "pa\u017a",
                "lis",
                "gru"
            ],
            "mon": [
                "styczy\u0144",
                "luty",
                "merc",
                "kwjeciy\u0144",
                "moj",
                "czyrwjy\u0144",
                "lipjy\u0144",
                "siyrpjy\u0144",
                "wrzesiy\u0144",
                "pa\u017adziernik",
                "listopad",
                "grudziy\u0144"
            ],
            "d_t_fmt": "%a, %-d %b %Y, %T",
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
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
