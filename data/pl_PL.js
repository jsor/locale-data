(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['pl_PL'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Polska",
            "country_post": null,
            "country_ab2": "PL",
            "country_ab3": "POL",
            "country_num": 616,
            "country_car": "PL",
            "country_isbn": null,
            "lang_name": "polski",
            "lang_ab": "pl",
            "lang_term": "pol",
            "lang_lib": "pol"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1TtYy]",
            "noexpr": "^[-0nN]",
            "yesstr": "tak",
            "nostr": "nie"
        },
        "LC_MONETARY": {
            "currency_symbol": "z\u0142",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
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
            "int_curr_symbol": "PLN ",
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
            "thousands_sep": "\u202f",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "48"
        },
        "LC_TIME": {
            "date_fmt": "%a, %-d %b %Y, %T %Z",
            "abday": [
                "nie",
                "pon",
                "wto",
                "\u015bro",
                "czw",
                "pi\u0105",
                "sob"
            ],
            "day": [
                "niedziela",
                "poniedzia\u0142ek",
                "wtorek",
                "\u015broda",
                "czwartek",
                "pi\u0105tek",
                "sobota"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "sty",
                "lut",
                "mar",
                "kwi",
                "maj",
                "cze",
                "lip",
                "sie",
                "wrz",
                "pa\u017a",
                "lis",
                "gru"
            ],
            "mon": [
                "stycznia",
                "lutego",
                "marca",
                "kwietnia",
                "maja",
                "czerwca",
                "lipca",
                "sierpnia",
                "wrze\u015bnia",
                "pa\u017adziernika",
                "listopada",
                "grudnia"
            ],
            "d_t_fmt": "%a, %-d %b %Y, %T",
            "d_fmt": "%d.%m.%Y",
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
            "timezone": null,
            "alt_mon": [
                "stycze\u0144",
                "luty",
                "marzec",
                "kwiecie\u0144",
                "maj",
                "czerwiec",
                "lipiec",
                "sierpie\u0144",
                "wrzesie\u0144",
                "pa\u017adziernik",
                "listopad",
                "grudzie\u0144"
            ]
        }
    };
}));
