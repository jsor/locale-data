(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mn_MN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Mongolia",
            "country_post": "MN",
            "country_ab2": "MN",
            "country_ab3": "MNG",
            "country_num": 496,
            "country_car": "MGL",
            "country_isbn": 99929,
            "lang_name": "\u041c\u043e\u043d\u0433\u043e\u043b \u0445\u044d\u043b",
            "lang_ab": "mn",
            "lang_term": "mon",
            "lang_lib": "mon"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[\u0442\u0422yY].*",
            "noexpr": "^[\u04af\u04aenN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ae",
            "mon_decimal_point": ".",
            "mon_thousands_sep": " ",
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
            "int_curr_symbol": "MNT ",
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
            "name_mr": "\u041d\u043e\u0451\u043d",
            "name_mrs": "\u0425\u0430\u0442\u0430\u0433\u0442\u0430\u0439",
            "name_miss": "\u0425\u0430\u0442\u0430\u0433\u0442\u0430\u0439",
            "name_ms": "\u0425\u0430\u0442\u0430\u0433\u0442\u0430\u0439"
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
            "tel_int_fmt": "(+%c %a) %l",
            "tel_dom_fmt": "(0%a) %l",
            "int_select": "00",
            "int_prefix": "976"
        },
        "LC_TIME": {
            "date_fmt": "%Z %Y \u043e\u043d\u044b %B %e, %a %H:%M:%S",
            "abday": [
                "\u041d\u044f",
                "\u0414\u0430",
                "\u041c\u044f",
                "\u041b\u0445",
                "\u041f\u04af",
                "\u0411\u0430",
                "\u0411\u044f"
            ],
            "day": [
                "\u041d\u044f\u043c",
                "\u0414\u0430\u0432\u0430\u0430",
                "\u041c\u044f\u0433\u043c\u0430\u0440",
                "\u041b\u0445\u0430\u0433\u0432\u0430",
                "\u041f\u04af\u0440\u044d\u0432",
                "\u0411\u0430\u0430\u0441\u0430\u043d",
                "\u0411\u044f\u043c\u0431\u0430"
            ],
            "week": null,
            "abmon": [
                "\u0425\u0443\u043b",
                "\u04ae\u0445\u044d",
                "\u0411\u0430\u0440",
                "\u0422\u0443\u0443",
                "\u041b\u0443\u0443",
                "\u041c\u043e\u0433",
                "\u041c\u043e\u0440",
                "\u0425\u043e\u043d",
                "\u0411\u0438\u0447",
                "\u0422\u0430\u0445",
                "\u041d\u043e\u0445",
                "\u0413\u0430\u0445"
            ],
            "mon": [
                "\u0425\u0443\u043b\u0433\u0430\u043d\u0430 \u0441\u0430\u0440\u044b\u043d",
                "\u04ae\u0445\u044d\u0440 \u0441\u0430\u0440\u044b\u043d",
                "\u0411\u0430\u0440 \u0441\u0430\u0440\u044b\u043d",
                "\u0422\u0443\u0443\u043b\u0430\u0439 \u0441\u0430\u0440\u044b\u043d",
                "\u041b\u0443\u0443 \u0441\u0430\u0440\u044b\u043d",
                "\u041c\u043e\u0433\u043e\u0439 \u0441\u0430\u0440\u044b\u043d",
                "\u041c\u043e\u0440\u044c \u0441\u0430\u0440\u044b\u043d",
                "\u0425\u043e\u043d\u044c \u0441\u0430\u0440\u044b\u043d",
                "\u0411\u0438\u0447 \u0441\u0430\u0440\u044b\u043d",
                "\u0422\u0430\u0445\u0438\u0430 \u0441\u0430\u0440\u044b\u043d",
                "\u041d\u043e\u0445\u043e\u0439 \u0441\u0430\u0440\u044b\u043d",
                "\u0413\u0430\u0445\u0430\u0439 \u0441\u0430\u0440\u044b\u043d"
            ],
            "d_t_fmt": "%Y %b %d, %a %T",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));