(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['tr_TR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Turkey",
            "country_post": "TR",
            "country_ab2": "TR",
            "country_ab3": "TUR",
            "country_num": 792,
            "country_car": "TR",
            "country_isbn": 975,
            "lang_name": "Turkish",
            "lang_ab": "tr",
            "lang_term": "tur",
            "lang_lib": "tur"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yYeE]",
            "noexpr": "^[nNhH]",
            "yesstr": "evet",
            "nostr": "hay\u0131r"
        },
        "LC_MONETARY": {
            "currency_symbol": "TL",
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
            "int_curr_symbol": "TRY ",
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
            "name_gen": "Say\u0131n",
            "name_mr": "Bay",
            "name_mrs": "Bayan",
            "name_miss": "Bayan",
            "name_ms": "Bayan"
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
            "int_prefix": "90"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Paz",
                "Pzt",
                "Sal",
                "\u00c7r\u015f",
                "Pr\u015f",
                "Cum",
                "Cts"
            ],
            "day": [
                "Pazar",
                "Pazartesi",
                "Sal\u0131",
                "\u00c7ar\u015famba",
                "Per\u015fembe",
                "Cuma",
                "Cumartesi"
            ],
            "week": null,
            "abmon": [
                "Oca",
                "\u015eub",
                "Mar",
                "Nis",
                "May",
                "Haz",
                "Tem",
                "A\u011fu",
                "Eyl",
                "Eki",
                "Kas",
                "Ara"
            ],
            "mon": [
                "Ocak",
                "\u015eubat",
                "Mart",
                "Nisan",
                "May\u0131s",
                "Haziran",
                "Temmuz",
                "A\u011fustos",
                "Eyl\u00fcl",
                "Ekim",
                "Kas\u0131m",
                "Aral\u0131k"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d-%m-%Y",
            "t_fmt": "%T",
            "am_pm": [
                "\u00d6\u00d6",
                "\u00d6S"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 2,
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
