(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['nan_TW'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%c%N%T%N%s %h %e %r%N%b%N%d%N%f%N%a%N",
            "country_name": "\u4e2d\u83ef\u6c11\u570b",
            "country_post": "TW",
            "country_ab2": "TW",
            "country_ab3": "TWN",
            "country_num": 158,
            "country_car": "RC",
            "country_isbn": 957,
            "lang_name": "\u6f22\u8a9e\u95a9\u5357\u8a9e",
            "lang_ab": null,
            "lang_term": "nan",
            "lang_lib": "nan"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\uff59\uff39\u662f]",
            "noexpr": "^[-0nN\uff4e\uff2e\u4f13]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "NT$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 4,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "TWD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": 0,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": 0,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%f%t%g%t%d",
            "name_gen": "\u541b",
            "name_mr": "\u5148\u751f",
            "name_mrs": "\u592b\u4eba",
            "name_miss": "\u5c0f\u59d0",
            "name_ms": "\u5973\u58eb"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": 4
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c-%a-%l",
            "tel_dom_fmt": "%A-%l",
            "int_select": "00",
            "int_prefix": "886"
        },
        "LC_TIME": {
            "date_fmt": "%Y\u5e74 %b %e\u65e5 %A %H:%M:%S %Z",
            "abday": [
                "\u65e5",
                "\u4e00",
                "\u4e8c",
                "\u4e09",
                "\u56db",
                "\u4e94",
                "\u516d"
            ],
            "day": [
                "\u79ae\u62dc\u65e5",
                "\u79ae\u62dc\u4e00",
                "\u79ae\u62dc\u4e8c",
                "\u79ae\u62dc\u4e09",
                "\u79ae\u62dc\u56db",
                "\u79ae\u62dc\u4e94",
                "\u79ae\u62dc\u516d"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                " 1\u6708",
                " 2\u6708",
                " 3\u6708",
                " 4\u6708",
                " 5\u6708",
                " 6\u6708",
                " 7\u6708",
                " 8\u6708",
                " 9\u6708",
                "10\u6708",
                "11\u6708",
                "12\u6708"
            ],
            "mon": [
                "\u4e00\u6708",
                "\u4e8c\u6708",
                "\u4e09\u6708",
                "\u56db\u6708",
                "\u4e94\u6708",
                "\u516d\u6708",
                "\u4e03\u6708",
                "\u516b\u6708",
                "\u4e5d\u6708",
                "\u5341\u6708",
                "\u5341\u4e00\u6708",
                "\u5341\u4e8c\u6708"
            ],
            "d_t_fmt": "%Y\u5e74%m\u6708%d\u65e5 (%A) %H\u9ede%M\u5206%S\u79d2",
            "d_fmt": "%Y\u5e74%m\u6708%d\u65e5",
            "t_fmt": "%H\u9ede%M\u5206%S\u79d2",
            "am_pm": [
                "\u9802\u6661",
                "\u4e0b\u6661"
            ],
            "t_fmt_ampm": "%p %I\u9ede%M\u5206%S\u79d2",
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
