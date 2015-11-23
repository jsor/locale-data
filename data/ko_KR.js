(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ko_KR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "KR",
            "country_ab3": "KOR",
            "country_num": 410,
            "country_car": "ROK",
            "country_isbn": null,
            "lang_name": "\ud55c\uad6d\ub9d0",
            "lang_ab": "ko",
            "lang_term": "kor",
            "lang_lib": "kor"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY\uc608]",
            "noexpr": "^[nN\uc544]",
            "yesstr": null,
            "nostr": "\uc544\ub2c8\uc624"
        },
        "LC_MONETARY": {
            "currency_symbol": "\uffe6",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 0,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 4,
            "int_curr_symbol": "KRW ",
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
            "tel_dom_fmt": "(%A) %l",
            "int_select": null,
            "int_prefix": "82"
        },
        "LC_TIME": {
            "date_fmt": "%Y. %m. %d. (%a) %H:%M:%S %Z",
            "abday": [
                "\uc77c",
                "\uc6d4",
                "\ud654",
                "\uc218",
                "\ubaa9",
                "\uae08",
                "\ud1a0"
            ],
            "day": [
                "\uc77c\uc694\uc77c",
                "\uc6d4\uc694\uc77c",
                "\ud654\uc694\uc77c",
                "\uc218\uc694\uc77c",
                "\ubaa9\uc694\uc77c",
                "\uae08\uc694\uc77c",
                "\ud1a0\uc694\uc77c"
            ],
            "week": null,
            "abmon": [
                " 1\uc6d4",
                " 2\uc6d4",
                " 3\uc6d4",
                " 4\uc6d4",
                " 5\uc6d4",
                " 6\uc6d4",
                " 7\uc6d4",
                " 8\uc6d4",
                " 9\uc6d4",
                "10\uc6d4",
                "11\uc6d4",
                "12\uc6d4"
            ],
            "mon": [
                "1\uc6d4",
                "2\uc6d4",
                "3\uc6d4",
                "4\uc6d4",
                "5\uc6d4",
                "6\uc6d4",
                "7\uc6d4",
                "8\uc6d4",
                "9\uc6d4",
                "10\uc6d4",
                "11\uc6d4",
                "12\uc6d4"
            ],
            "d_t_fmt": "%x (%a) %r",
            "d_fmt": "%Y\ub144 %m\uc6d4 %d\uc77c",
            "t_fmt": "%H\uc2dc %M\ubd84 %S\ucd08",
            "am_pm": [
                "\uc624\uc804",
                "\uc624\ud6c4"
            ],
            "t_fmt_ampm": "%p %I\uc2dc %M\ubd84 %S\ucd08",
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