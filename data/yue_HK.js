(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['yue_HK'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%c%T%s%h%N%b%e%r%N%f%N%d%N%a",
            "country_name": "\u4e2d\u83ef\u4eba\u6c11\u5171\u548c\u570b\u9999\u6e2f\u7279\u5225\u884c\u653f\u5340",
            "country_post": null,
            "country_ab2": "HK",
            "country_ab3": "HKG",
            "country_num": 344,
            "country_car": "HK",
            "country_isbn": 962,
            "lang_name": "\u7cb5\u8a9e",
            "lang_ab": null,
            "lang_term": "yue",
            "lang_lib": "yue"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "\u4fc2",
            "nostr": "\u5514\u4fc2"
        },
        "LC_MONETARY": {
            "currency_symbol": "HK$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 0,
            "int_curr_symbol": "HKD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%f%t%g%t%d",
            "name_gen": "",
            "name_mr": "\u5148\u751f",
            "name_mrs": "\u592a\u592a",
            "name_miss": "\u5c0f\u59d0",
            "name_ms": "\u5973\u58eb"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": [
                "+%c ",
                0,
                0
            ],
            "tel_dom_fmt": null,
            "int_select": "001",
            "int_prefix": "852"
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
                "\u661f\u671f\u65e5",
                "\u661f\u671f\u4e00",
                "\u661f\u671f\u4e8c",
                "\u661f\u671f\u4e09",
                "\u661f\u671f\u56db",
                "\u661f\u671f\u4e94",
                "\u661f\u671f\u516d"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "1\u6708",
                "2\u6708",
                "3\u6708",
                "4\u6708",
                "5\u6708",
                "6\u6708",
                "7\u6708",
                "8\u6708",
                "9\u6708",
                "10\u6708",
                "11\u6708",
                "12\u6708"
            ],
            "mon": [
                "1\u6708",
                "2\u6708",
                "3\u6708",
                "4\u6708",
                "5\u6708",
                "6\u6708",
                "7\u6708",
                "8\u6708",
                "9\u6708",
                "10\u6708",
                "11\u6708",
                "12\u6708"
            ],
            "d_t_fmt": "%Y\u5e74%m\u6708%d\u65e5 %A %H\u9ede%M\u5206%S\u79d2",
            "d_fmt": "%Y\u5e74%m\u6708%d\u65e5 %A",
            "t_fmt": "%H\u9ede%M\u5206%S\u79d2",
            "am_pm": [
                "\u4e0a\u5348",
                "\u4e0b\u5348"
            ],
            "t_fmt_ampm": "%p%I\u9ede%M\u5206%S\u79d2",
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
