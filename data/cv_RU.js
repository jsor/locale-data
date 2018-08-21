(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['cv_RU'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "RU",
            "country_ab3": "RUS",
            "country_num": 643,
            "country_car": "RUS",
            "country_isbn": null,
            "lang_name": "\u0427\u04d1\u0432\u0430\u0448\u043b\u0430",
            "lang_ab": "cv",
            "lang_term": "chv",
            "lang_lib": "chv"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20bd",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "\u202f",
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
            "int_curr_symbol": "RUB ",
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
            "int_select": "0~10",
            "int_prefix": "7"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "vr",
                "tn",
                "yt",
                "jn",
                "k\u015f",
                "er",
                "\u0161m"
            ],
            "day": [
                "vyrsarnikun",
                "tuntikun",
                "ytlarikun",
                "junkun",
                "k\u0115\u015fnernikun",
                "ernekun",
                "\u0161\u0103matkun"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "K\u0102R",
                "NAR",
                "PU\u0160",
                "AKA",
                "\u015eU",
                "\u015e\u0114R",
                "UT\u0102",
                "\u015eUR",
                "AV\u0102",
                "JUP",
                "C\u00dcK",
                "RA\u0160"
            ],
            "mon": [
                "k\u0103rlac",
                "nar\u0103s",
                "pu\u0161",
                "aka",
                "\u015fu",
                "\u015f\u0115rtme",
                "ut\u0103",
                "\u015furla",
                "av\u0103n",
                "jupa",
                "c\u00fck",
                "ra\u0161tav"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
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
