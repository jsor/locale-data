(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['wal_ET'] = factory();
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
            "lang_name": "\u12c8\u120b\u12ed\u1273\u1271",
            "lang_ab": null,
            "lang_term": "wal",
            "lang_lib": "wal"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
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
            "name_mr": "\u121a\u1232\u12eb",
            "name_mrs": "\u12ac\u1273\u12cb",
            "name_miss": "\u12ac\u1273\u12e9",
            "name_ms": "\u12ac\u1273\u12e9"
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
            "date_fmt": "%A\u1363 %B %e \u130b\u120b\u1233 %r %Z %Y \u130d\/\u120b",
            "abday": [
                "\u12c8\u130b ",
                "\u1233\u12ed\u1296",
                "\u121b\u1246\u1233",
                "\u12a0\u1229\u12cb",
                "\u1203\u1219\u1233",
                "\u12a0\u122d\u1263",
                "\u1244\u122b "
            ],
            "day": [
                "\u12c8\u130b",
                "\u1233\u12ed\u1296",
                "\u121b\u1246\u1233\u129b",
                "\u12a0\u1229\u12cb",
                "\u1203\u1219\u1233",
                "\u12a0\u122d\u1263",
                "\u1244\u122b"
            ],
            "week": null,
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
            "d_t_fmt": "%A\u1363 %B %e \u130b\u120b\u1233 %Y %r %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "\u121b\u1208\u12f6",
                "\u1243\u121b"
            ],
            "t_fmt_ampm": "%X %p",
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
