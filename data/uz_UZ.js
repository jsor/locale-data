(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['uz_UZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%C%N%T%N%s %h%N%f%N%b%N%d%N%e %r%N%a%N%z",
            "country_name": "O'zbekistan",
            "country_post": "UZ\" % ??",
            "country_ab2": "UZ",
            "country_ab3": "UZB",
            "country_num": 860,
            "country_car": "UZ",
            "country_isbn": null,
            "lang_name": "O'zbek",
            "lang_ab": "uz",
            "lang_term": "uzb",
            "lang_lib": "uzb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[YyHh].*",
            "noexpr": "^[JjNn].*",
            "yesstr": "Ha",
            "nostr": "Yo'q"
        },
        "LC_MONETARY": {
            "currency_symbol": "so'm",
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
            "int_curr_symbol": "UZS ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%f%t%g%t%m",
            "name_gen": "Hurmatli",
            "name_mr": "Janob",
            "name_mrs": "Xonim",
            "name_miss": "",
            "name_ms": ""
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
            "tel_dom_fmt": null,
            "int_select": null,
            "int_prefix": "27"
        },
        "LC_TIME": {
            "date_fmt": "%d %B, %Y yil, %A",
            "abday": [
                "Yak",
                "Du",
                "Se",
                "Cho",
                "Pay",
                "Ju",
                "Sha"
            ],
            "day": [
                "Yakshanba",
                "Dushanba",
                "Seshanba",
                "Chorshanba",
                "Payshanba",
                "Juma",
                "Shanba"
            ],
            "week": null,
            "abmon": [
                "Yan",
                "Fev",
                "Mar",
                "Apr",
                "May",
                "Iyn",
                "Iyl",
                "Avg",
                "Sen",
                "Okt",
                "Noy",
                "Dek"
            ],
            "mon": [
                "Yanvar",
                "Fevral",
                "Mart",
                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "Avgust",
                "Sentyabr",
                "Oktyabr",
                "Noyabr",
                "Dekabr"
            ],
            "d_t_fmt": "%T, %d %B, %Y yil, %A",
            "d_fmt": "%d\/%m\/%y",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
