(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['byn_ER'] = factory();
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
            "lang_name": "\u1265\u120a\u1295",
            "lang_ab": "",
            "lang_term": "byn",
            "lang_lib": "byn"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u12a5]",
            "noexpr": "^[-0nN\u1290]",
            "yesstr": "\u12a5\u12c8",
            "nostr": "\u1290\u1296\u12a5"
        },
        "LC_MONETARY": {
            "currency_symbol": "Nfk",
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
            "name_mrs": "\u12c8\/\/\u122e",
            "name_miss": "\u12c8\/\/\u122a\u1275",
            "name_ms": "\u12c8\/\/\u122a\u1275"
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
            "date_fmt": "%A\u1361 %B %e \u130d\u122d\u130b %r %Z %Y \u12a3\u12f5",
            "abday": [
                "\u1230\/\u1245",
                "\u1230\u1291",
                "\u1230\u120a\u131d",
                "\u1208\u1313",
                "\u12a3\u121d\u12f5",
                "\u12a3\u122d\u1265",
                "\u1230\/\u123d"
            ],
            "day": [
                "\u1230\u1295\u1260\u122d \u1245\u12f3\u12c5",
                "\u1230\u1291",
                "\u1230\u120a\u131d",
                "\u1208\u1313 \u12c8\u122a \u1208\u1265\u12cb",
                "\u12a3\u121d\u12f5",
                "\u12a3\u122d\u1265",
                "\u1230\u1295\u1260\u122d \u123d\u1313\u12c5"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u120d\u12f0\u1275",
                "\u12ab\u1265\u12bd",
                "\u12ad\u1265\u120b",
                "\u134b\u1305\u12ba",
                "\u12ad\u1262\u1245",
                "\u121d\/\u1275",
                "\u12b0\u122d",
                "\u121b\u122d\u12eb",
                "\u12eb\u12b8\u1292",
                "\u1218\u1270\u1209",
                "\u121d\/\u121d",
                "\u1270\u1215\u1233"
            ],
            "mon": [
                "\u120d\u12f0\u1275\u122a",
                "\u12ab\u1265\u12bd\u1265\u1272",
                "\u12ad\u1265\u120b",
                "\u134b\u1305\u12ba\u122a",
                "\u12ad\u1262\u1245\u122a",
                "\u121d\u12aa\u12a4\u120d \u1275\u1313\u0305\u1292\u122a",
                "\u12b0\u122d\u12a9",
                "\u121b\u122d\u12eb\u121d \u1275\u122a",
                "\u12eb\u12b8\u1292 \u1218\u1233\u1245\u1208\u122a",
                "\u1218\u1270\u1209",
                "\u121d\u12aa\u12a4\u120d \u1218\u123d\u12c8\u122a",
                "\u1270\u1215\u1233\u1235\u122a"
            ],
            "d_t_fmt": "%A\u1361 %B %e \u130d\u122d\u130b %Y %r %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "\u134b\u12f1\u1235 \u1303\u1265",
                "\u134b\u12f1\u1235 \u12f0\u121d\u1262"
            ],
            "t_fmt_ampm": "%X %p",
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
