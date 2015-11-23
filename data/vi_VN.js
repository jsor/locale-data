(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['vi_VN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Vi\u1ec7t nam",
            "country_post": null,
            "country_ab2": "VN",
            "country_ab3": "VNM",
            "country_num": 704,
            "country_car": "VN",
            "country_isbn": null,
            "lang_name": "Vi\u1ec7t ng\u1eef",
            "lang_ab": "vi",
            "lang_term": "vie",
            "lang_lib": "vie"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[1yYcC].*",
            "noexpr": "^[0nNkK].*",
            "yesstr": "C\u00f3",
            "nostr": "Kh\u00f4ng"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ab",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 0,
            "p_cs_precedes": 0,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "VND ",
            "int_frac_digits": 0,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%f%t%m%t%g",
            "name_gen": "",
            "name_mr": "\u00d4.",
            "name_mrs": "B.",
            "name_miss": "C.",
            "name_ms": ""
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
            "tel_int_fmt": "+%c ;%a ;%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "84"
        },
        "LC_TIME": {
            "date_fmt": "%A, %d %B n\u0103m %Y %T %Z",
            "abday": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "day": [
                "Ch\u1ee7 nh\u1eadt",
                "Th\u1ee9 hai",
                "Th\u1ee9 ba",
                "Th\u1ee9 t\u01b0",
                "Th\u1ee9 n\u0103m",
                "Th\u1ee9 s\u00e1u",
                "Th\u1ee9 b\u1ea3y"
            ],
            "week": null,
            "abmon": [
                "Th01",
                "Th02",
                "Th03",
                "Th04",
                "Th05",
                "Th06",
                "Th07",
                "Th08",
                "Th09",
                "Th10",
                "Th11",
                "Th12"
            ],
            "mon": [
                "Th\u00e1ng m\u1ed9t",
                "Th\u00e1ng hai",
                "Th\u00e1ng ba",
                "Th\u00e1ng t\u01b0",
                "Th\u00e1ng n\u0103m",
                "Th\u00e1ng s\u00e1u",
                "Th\u00e1ng b\u1ea3y",
                "Th\u00e1ng t\u00e1m",
                "Th\u00e1ng ch\u00edn",
                "Th\u00e1ng m\u01b0\u1eddi",
                "Th\u00e1ng m\u01b0\u1eddi m\u1ed9t",
                "Th\u00e1ng m\u01b0\u1eddi hai"
            ],
            "d_t_fmt": "%A, %d %B N\u0103m %Y %T %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%T",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M %p",
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