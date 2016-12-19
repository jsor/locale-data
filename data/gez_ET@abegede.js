(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['gez_ET@abegede'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u12a2\u1275\u12ee\u1335\u12eb",
            "country_post": "ETH",
            "country_ab2": "ET",
            "country_ab3": "ETH",
            "country_num": 231,
            "country_car": "ETH",
            "country_isbn": null,
            "lang_name": "\u130d\u12d5\u12dd",
            "lang_ab": null,
            "lang_term": "gez",
            "lang_lib": null
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
            "currency_symbol": "Br",
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
            "int_curr_symbol": "ETB ",
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
            "name_gen": "",
            "name_mr": "\u12a0\u1276\"             % \"\u12a0\u12ed\u1270\" is informal",
            "name_mrs": "\u12c8\/\u122e",
            "name_miss": "\u12c8\/\u122a\u1275",
            "name_ms": "\u12c8\/\u122a\u1275"
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
            "tel_int_fmt": "%c-%a-%l",
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "251"
        },
        "LC_TIME": {
            "date_fmt": "%A\u1365%B\u1361%e\u1361\u1218\u12d3\u120d\u1275\u1361%r\u1361%Z\u1361%Y\u1361\u12d3\/\u121d",
            "abday": [
                "\u12a5\u1281\u12f5",
                "\u1230\u1291\u12ed",
                "\u1220\u1209\u1235",
                "\u122b\u1265\u12d5",
                "\u1210\u1219\u1235",
                "\u12d3\u122d\u1260",
                "\u1240\u12f3\u121a"
            ],
            "day": [
                "\u12a5\u1281\u12f5",
                "\u1230\u1291\u12ed",
                "\u1220\u1209\u1235",
                "\u122b\u1265\u12d5",
                "\u1210\u1219\u1235",
                "\u12d3\u122d\u1260",
                "\u1240\u12f3\u121a\u1275"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u1303\u1295\u12e9",
                "\u134c\u1265\u1229",
                "\u121b\u122d\u127d",
                "\u12a4\u1355\u1228",
                "\u121c\u12ed ",
                "\u1301\u1295 ",
                "\u1301\u120b\u12ed",
                "\u12a6\u1308\u1235",
                "\u1234\u1355\u1274",
                "\u12a6\u12ad\u1270",
                "\u1296\u126c\u121d",
                "\u12f2\u1234\u121d"
            ],
            "mon": [
                "\u1303\u1295\u12e9\u12c8\u122a",
                "\u134c\u1265\u1229\u12c8\u122a",
                "\u121b\u122d\u127d",
                "\u12a4\u1355\u1228\u120d",
                "\u121c\u12ed",
                "\u1301\u1295",
                "\u1301\u120b\u12ed",
                "\u12a6\u1308\u1235\u1275",
                "\u1234\u1355\u1274\u121d\u1260\u122d",
                "\u12a6\u12ad\u1270\u12cd\u1260\u122d",
                "\u1296\u126c\u121d\u1260\u122d",
                "\u12f2\u1234\u121d\u1260\u122d"
            ],
            "d_t_fmt": "%A\u1365%B\u1361%e\u1361\u1218\u12d3\u120d\u1275\u1361%Y\u1361%r\u1361%Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "\u133d\u1263\u1215",
                "\u121d\u1234\u1275"
            ],
            "t_fmt_ampm": "%X\u1361%p",
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
