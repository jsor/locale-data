(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['zh_TW'] = factory();
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
            "lang_name": "\u4e2d\u6587",
            "lang_ab": "zh",
            "lang_term": "zho",
            "lang_lib": "chi"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\uff59\uff39\u662f]",
            "noexpr": "^[-0nN\uff4e\uff2e\u4e0d\u5426]",
            "yesstr": "\u662f",
            "nostr": "\u4e0d\u662f"
        },
        "LC_MONETARY": {
            "currency_symbol": "NT$",
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
            "tel_int_fmt": "+%c-%a-%l",
            "tel_dom_fmt": "%A-%l",
            "int_select": "00",
            "int_prefix": "886"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
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
                "\u9031\u65e5",
                "\u9031\u4e00",
                "\u9031\u4e8c",
                "\u9031\u4e09",
                "\u9031\u56db",
                "\u9031\u4e94",
                "\u9031\u516d"
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
            "d_t_fmt": "\u897f\u5143%Y\u5e74%m\u6708%d\u65e5 (%A) %H\u6642date_fmt \"\u897f\u5143%Y\u5e74%m\u6708%d\u65e5 (%A) %H\u6642d_fmt\t\"\u897f\u5143%Y\u5e74%m\u6708%d\u65e5",
            "d_fmt": "%m\/%d\/%y",
            "t_fmt": "%H\u6642%M\u5206%S\u79d2",
            "am_pm": [
                "\u4e0a\u5348",
                "\u4e0b\u5348"
            ],
            "t_fmt_ampm": "%p %I\u6642%M\u5206%S\u79d2",
            "era": [
                "+:2:1913\/\/01\/\/01:+*:\u6c11\u570b:%EC%Ey\u5e74",
                "+:1:1912\/\/01\/\/01:1912\/\/12\/\/31:\u6c11\u570b:%EC\u5143\u5e74",
                "+:1:1911\/\/12\/\/31:-*:\u6c11\u524d:%EC%Ey\u5e74"
            ],
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
