(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['tig_ER'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u12a4\u122d\u1275\u122b",
            "country_post": "ERI",
            "country_ab2": "ER",
            "country_ab3": "ERI",
            "country_num": 232,
            "country_car": "ER",
            "country_isbn": null,
            "lang_name": "\u1275\u130d\u1228",
            "lang_ab": "",
            "lang_term": "tig",
            "lang_lib": "tig"
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
            "frac_digits": 0,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "ERN ",
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
            "name_gen": "",
            "name_mr": "\u12a3\u1276\"             % \"\u12a0\u12ed\u1270\" is informal",
            "name_mrs": "\u12c8\/\u122e",
            "name_miss": "\u12c8\/\u122a\u1275",
            "name_ms": "\u12c8\/\u122a\u1275"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": "",
            "grouping": [
                0,
                0
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "291"
        },
        "LC_TIME": {
            "date_fmt": "%A\u1361 %B %e \u12ee\u121d %r %Z %Y \u12d3\/\u121d",
            "abday": [
                "\u1230\/\u12d3",
                "\u1230\u1296 ",
                "\u1273\u120b\u1238",
                "\u12a3\u1228\u122d",
                "\u12a8\u121a\u123d",
                "\u1305\u121d\u12d3",
                "\u1230\/\u1295"
            ],
            "day": [
                "\u1230\u1295\u1260\u1275 \u12d3\u1263\u12ed",
                "\u1230\u1296",
                "\u1273\u120b\u1238\u1296",
                "\u12a3\u1228\u122d\u1263\u12d3",
                "\u12a8\u121a\u123d",
                "\u1305\u121d\u12d3\u1275",
                "\u1230\u1295\u1260\u1275 \u1295\u12a2\u123d"
            ],
            "week": null,
            "abmon": [
                "\u1325\u122a ",
                "\u1208\u12ab\u1272",
                "\u1218\u130b\u1262",
                "\u121a\u12eb\u12dd",
                "\u130d\u1295\u1266",
                "\u1230\u1290 ",
                "\u1213\u121d\u1208",
                "\u1290\u1213\u1230",
                "\u1218\u1235\u12a8",
                "\u1325\u1245\u121d",
                "\u1215\u12f3\u122d",
                "\u1273\u1215\u1233"
            ],
            "mon": [
                "\u1325\u122a",
                "\u1208\u12ab\u1272\u1275",
                "\u1218\u130b\u1262\u1275",
                "\u121a\u12eb\u12dd\u12eb",
                "\u130d\u1295\u1266\u1275",
                "\u1230\u1290",
                "\u1213\u121d\u1208",
                "\u1290\u1213\u1230",
                "\u1218\u1235\u12a8\u1228\u121d",
                "\u1325\u1245\u121d\u1272",
                "\u1215\u12f3\u122d",
                "\u1273\u1215\u1233\u1235"
            ],
            "d_t_fmt": "%A\u1361 %B %e \u12ee\u121d %Y %r %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "\u1240\u12f0\u121d \u1230\u122d \u121d\u12d5\u120d",
                "\u1213\u1246 \u1230\u122d \u121d\u12d5\u120d"
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