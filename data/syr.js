(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['syr'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": null,
            "country_ab3": null,
            "country_num": null,
            "country_car": null,
            "country_isbn": null,
            "lang_name": "\u0723\u0718\u072a\u071d\u071d\u0710",
            "lang_ab": null,
            "lang_term": "syr",
            "lang_lib": "syr"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0717]",
            "noexpr": "^[-0nN\u0720]",
            "yesstr": "\u0717\u0710",
            "nostr": "\u0720\u0710"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u00a4",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "XDR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%s%t%g%t%m%t%f",
            "name_gen": "",
            "name_mr": "\u0721\u071d\u0729\u072a\u0710",
            "name_mrs": "\u0721\u071d\u0729\u072a\u072c\u0710",
            "name_miss": "\u0721\u071d\u0729\u072a\u072c\u0710",
            "name_ms": "\u0721\u071d\u0729\u072a\u072c\u0710"
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
            "tel_int_fmt": "+%c %a%t%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": null
        },
        "LC_TIME": {
            "date_fmt": "%Z %H:%M:%S %Y %b %d %a",
            "abday": [
                "\u0710",
                "\u0712",
                "\u0713",
                "\u0715",
                "\u0717",
                "\u0725",
                "\u072b"
            ],
            "day": [
                "\u071a\u0715 \u0712\u072b\u0712\u0710",
                "\u072c\u072a\u071d\u0722 \u0712\u072b\u0712\u0710",
                "\u072c\u0720\u072c \u0712\u072b\u0712\u0710",
                "\u0710\u072a\u0712\u0725 \u0712\u072b\u0712\u0710",
                "\u071a\u0721\u072b \u0712\u072b\u0712\u0710",
                "\u0725\u072a\u0718\u0712\u072c\u0710",
                "\u072b\u0712\u072c\u0710"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u070f\u071f\u0722 \u070f\u0712",
                "\u072b\u0712\u071b",
                "\u0710\u0715\u072a",
                "\u0722\u071d\u0723\u0722",
                "\u0710\u071d\u072a",
                "\u071a\u0719\u071d\u072a\u0722",
                "\u072c\u0721\u0718\u0719",
                "\u0710\u0712",
                "\u0710\u071d\u0720\u0718\u0720",
                "\u070f\u072c\u072b \u070f\u0710",
                "\u070f\u072c\u072b \u070f\u0712",
                "\u070f\u071f\u0722 \u070f\u0710"
            ],
            "mon": [
                "\u071f\u0722\u0718\u0722 \u0710\u071a\u072a\u071d\u0710",
                "\u072b\u0712\u071b",
                "\u0710\u0715\u072a",
                "\u0722\u071d\u0723\u0722",
                "\u0710\u071d\u072a",
                "\u071a\u0719\u071d\u072a\u0722",
                "\u072c\u0721\u0718\u0719",
                "\u0710\u0712",
                "\u0710\u071d\u0720\u0718\u0720",
                "\u072c\u072b\u072a\u071d\u0722 \u0729\u0715\u0721\u071d\u0710",
                "\u072c\u072b\u072a\u071d\u0722 \u0710\u071a\u072a\u071d\u0710",
                "\u071f\u0722\u0718\u0722 \u0729\u0715\u0721\u071d\u0710"
            ],
            "d_t_fmt": "%H:%M:%S %Y %b %d %a",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "\u0729.\u071b",
                "\u0712.\u071b"
            ],
            "t_fmt_ampm": "%I:%M:%S %P",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": 1,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
