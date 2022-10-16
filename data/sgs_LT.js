(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sgs_LT'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Lietova",
            "country_post": "LT",
            "country_ab2": "LT",
            "country_ab3": "LTU",
            "country_num": 440,
            "country_car": "LT",
            "country_isbn": null,
            "lang_name": "\u017demait\u0117\u0161k\u0101",
            "lang_ab": null,
            "lang_term": "sgs",
            "lang_lib": "sgs"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1TtYy]",
            "noexpr": "^[-0Nn]",
            "yesstr": "t\u01e1p",
            "nostr": "n\u0113"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "EUR ",
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
            "thousands_sep": ".",
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
            "int_select": "00",
            "int_prefix": "370"
        },
        "LC_TIME": {
            "date_fmt": "%Y m. %B %d d. %T %Z",
            "abday": [
                "Nd",
                "Pn",
                "Ot",
                "Sr",
                "\u010ct",
                "Pt",
                "Sb"
            ],
            "day": [
                "nediel\u0117s d\u00ebna",
                "panedielis",
                "oterninks",
                "sereda",
                "\u010detvergs",
                "petn\u012b\u010d\u0117",
                "sobata"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Sau",
                "Vas",
                "Kuo",
                "Bal",
                "Geg",
                "B\u0117r",
                "L\u00ebp",
                "Rgp",
                "Sie",
                "Spa",
                "Lap",
                "Grd"
            ],
            "mon": [
                "saus\u0117",
                "vasar\u0117",
                "kuova",
                "balond\u0117",
                "gego\u017e\u0117s",
                "b\u0117r\u017eel\u0117",
                "l\u00ebpas",
                "rogpj\u016bt\u0117",
                "siej\u0117s",
                "spal\u0117",
                "lapkr\u0117st\u0117",
                "gr\u016fd\u0117"
            ],
            "d_t_fmt": "%Y m. %B %d d. %T",
            "d_fmt": "%Y.%m.%d",
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
