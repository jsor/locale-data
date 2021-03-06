(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['cy_GB'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%d%N%f%N%d%N%b%N%s %h 5e %r%N%C%z %T%N%c%N",
            "country_name": "Y Deyrnas Unedig",
            "country_post": "GB",
            "country_ab2": "GB",
            "country_ab3": "GBR",
            "country_num": 826,
            "country_car": "GB",
            "country_isbn": 0,
            "lang_name": "Cymraeg",
            "lang_ab": "cy",
            "lang_term": "cym",
            "lang_lib": "wel"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1iItTyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "ie",
            "nostr": "na"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u00a3",
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
            "int_curr_symbol": "GBP ",
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
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
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
            "tel_dom_fmt": "%A %l",
            "int_select": "00",
            "int_prefix": "44"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %H:%M:%S %Z %Y",
            "abday": [
                "Sul",
                "Llu",
                "Maw",
                "Mer",
                "Iau",
                "Gwe",
                "Sad"
            ],
            "day": [
                "Sul",
                "Llun",
                "Mawrth",
                "Mercher",
                "Iau",
                "Gwener",
                "Sadwrn"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Ion",
                "Chw",
                "Maw",
                "Ebr",
                "Mai",
                "Meh",
                "Gor",
                "Aws",
                "Med",
                "Hyd",
                "Tach",
                "Rha"
            ],
            "mon": [
                "Ionawr",
                "Chwefror",
                "Mawrth",
                "Ebrill",
                "Mai",
                "Mehefin",
                "Gorffennaf",
                "Awst",
                "Medi",
                "Hydref",
                "Tachwedd",
                "Rhagfyr"
            ],
            "d_t_fmt": "Dydd %A %d mis %B %Y %T %Z",
            "d_fmt": "%d.%m.%y",
            "t_fmt": "%T",
            "am_pm": [
                "am",
                "pm"
            ],
            "t_fmt_ampm": "%l:%M:%S %P %Z",
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
