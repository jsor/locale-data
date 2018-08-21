(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['csb_PL'] = factory();
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
            "lang_name": "kasz\u00ebbsczi j\u00e3z\u00ebk",
            "lang_ab": null,
            "lang_term": "csb",
            "lang_lib": "csb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1JjTtYy]",
            "noexpr": "^[-0nN]",
            "yesstr": "jo",
            "nostr": "ni\u00e9"
        },
        "LC_MONETARY": {
            "currency_symbol": "z\u0142",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": 3,
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
            "thousands_sep": "\u202f",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "48"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "nie",
                0,
                "wt\u00f3",
                0,
                "czw",
                0,
                "sob"
            ],
            "day": [
                "niedzela",
                "p\u00f2niedz\u00f4\u0142k",
                "wt\u00f3rk",
                "strzoda",
                "czwi\u00f4rtk",
                "pi\u0105tk",
                "sob\u00f2ta"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "st\u00eb",
                0,
                "str",
                0,
                "maj",
                0,
                "l\u00ebp",
                0,
                "s\u00e9w",
                0,
                "l\u00ebs",
                0
            ],
            "mon": [
                "st\u00ebcznika",
                "gromicznika",
                "str\u00ebmiannika",
                "\u0142\u017c\u00ebkwiata",
                "maja",
                "czerwi\u0144ca",
                "l\u00ebpi\u0144ca",
                "z\u00e9lnika",
                "s\u00e9wnika",
                "rujana",
                "l\u00ebstopadnika",
                "g\u00f2dnika"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%Y-%m-%d",
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
            "timezone": null,
            "ab_alt_mon": [
                "st\u00eb",
                0,
                "str",
                0,
                "m\u00f4j",
                0,
                "l\u00ebp",
                0,
                "s\u00e9w",
                0,
                "l\u00ebs",
                0
            ],
            "alt_mon": [
                "st\u00ebcznik",
                "gromicznik",
                "str\u00ebmiannik",
                "\u0142\u017c\u00ebkwiat",
                "m\u00f4j",
                "czerwi\u0144c",
                "l\u00ebpi\u0144c",
                "z\u00e9lnik",
                "s\u00e9wnik",
                "rujan",
                "l\u00ebstopadnik",
                "g\u00f2dnik"
            ]
        }
    };
}));
