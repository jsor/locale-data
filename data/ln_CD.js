(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ln_CD'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Repibiki demokratiki ya Kong\u00f3",
            "country_post": "CD",
            "country_ab2": "CD",
            "country_ab3": "COD",
            "country_num": 180,
            "country_car": "CGO",
            "country_isbn": 2,
            "lang_name": "ling\u00e1la",
            "lang_ab": "ln",
            "lang_term": "lin",
            "lang_lib": "lin"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yYiI\u025b\u0190]",
            "noexpr": "^[nNtT]",
            "yesstr": "\u00cdyo",
            "nostr": "T\u025b\u0302"
        },
        "LC_MONETARY": {
            "currency_symbol": "FC",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "CDF ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f%m",
            "name_gen": "Mb\u0254\u0301t\u025b",
            "name_mr": "Tat\u00e1",
            "name_mrs": "Mam\u00e1",
            "name_miss": "Mam\u00e1",
            "name_ms": "Mam\u00e1 "
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": "",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a%t%l",
            "tel_dom_fmt": "%a %l",
            "int_select": "00",
            "int_prefix": "243"
        },
        "LC_TIME": {
            "date_fmt": "%A %-e %B %Y, %H:%M:%S (UTC%z)",
            "abday": [
                "m1.",
                "m2.",
                "m3.",
                "m4.",
                "m5.",
                "m6.",
                "m7."
            ],
            "day": [
                "Lom\u00edngo",
                "Mos\u00e1l\u00e1 m\u0254\u030ck\u0254\u0301",
                "Mis\u00e1l\u00e1 m\u00edbal\u00e9",
                "Mis\u00e1l\u00e1 m\u00eds\u00e1to",
                "Mis\u00e1l\u00e1 m\u00ednei",
                "Mis\u00e1l\u00e1 m\u00edt\u00e1no",
                "Mp\u0254\u0301s\u0254"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "s\u00e1nz\u00e11.",
                "s\u00e1nz\u00e12.",
                "s\u00e1nz\u00e13.",
                "s\u00e1nz\u00e14.",
                "s\u00e1nz\u00e15.",
                "s\u00e1nz\u00e16.",
                "s\u00e1nz\u00e17.",
                "s\u00e1nz\u00e18.",
                "s\u00e1nz\u00e19.",
                "s\u00e1nz10.",
                "s\u00e1nz\u00e111.",
                "s\u00e1nz\u00e112."
            ],
            "mon": [
                "Yanw\u00e1li",
                "Febw\u00e1li",
                "M\u00e1rsi",
                "Apr\u00edli",
                "M\u00e1y\u00ed",
                "Y\u00fani",
                "Y\u00fali",
                "Aug\u00fasto",
                "S\u025bt\u025b\u0301mb\u025b",
                "\u0254k\u0254t\u0254\u0301b\u025b",
                "Nov\u025b\u0301mb\u025b",
                "D\u025bs\u025b\u0301mb\u025b"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/%m\/%Y",
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
