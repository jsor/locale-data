(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['hr_HR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%d%N%a%N%s %h%N%z %T%N%c%N",
            "country_name": "Hrvatska",
            "country_post": "HR",
            "country_ab2": "HR",
            "country_ab3": "HRV",
            "country_num": 191,
            "country_car": "HR",
            "country_isbn": "978-953",
            "lang_name": "hrvatski",
            "lang_ab": "hr",
            "lang_term": "hrv",
            "lang_lib": "hrv"
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
            "currency_symbol": "kn",
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
            "int_curr_symbol": "HRK ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": "gosp.",
            "name_mrs": "g\u0111a",
            "name_miss": "g\u0111ica",
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
            "tel_dom_fmt": "%A %l",
            "int_select": "00",
            "int_prefix": "385"
        },
        "LC_TIME": {
            "date_fmt": "%a, %e.%m.%Y.  %H:%M:%S %Z",
            "abday": [
                "ned",
                "pon",
                "uto",
                "sri",
                "\u010det",
                "pet",
                "sub"
            ],
            "day": [
                "nedjelja",
                "ponedjeljak",
                "utorak",
                "srijeda",
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
                "sij",
                "velj",
                "o\u017eu",
                "tra",
                "svi",
                "lip",
                "srp",
                "kol",
                "ruj",
                "lis",
                "stu",
                "pro"
            ],
            "mon": [
                "sije\u010dnja",
                "velja\u010de",
                "o\u017eujka",
                "travnja",
                "svibnja",
                "lipnja",
                "srpnja",
                "kolovoza",
                "rujna",
                "listopada",
                "studenoga",
                "prosinca"
            ],
            "d_t_fmt": "%A, %d. %B %Y. %T %Z",
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
            "timezone": null,
            "alt_mon": [
                "sije\u010danj",
                "velja\u010da",
                "o\u017eujak",
                "travanj",
                "svibanj",
                "lipanj",
                "srpanj",
                "kolovoz",
                "rujan",
                "listopad",
                "studeni",
                "prosinac"
            ]
        }
    };
}));
