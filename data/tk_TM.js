(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['tk_TM'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "T\u00fcrkmenistan",
            "country_post": "TM",
            "country_ab2": "TM",
            "country_ab3": "TKM",
            "country_num": 795,
            "country_car": "TM",
            "country_isbn": null,
            "lang_name": "T\u00fcrkmen\u00e7e",
            "lang_ab": "tk",
            "lang_term": "tuk",
            "lang_lib": "tuk"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[hH].*",
            "noexpr": "^[\u00fd\u00ddnN].*",
            "yesstr": "hawa",
            "nostr": "\u00fdok"
        },
        "LC_MONETARY": {
            "currency_symbol": "MANAT\" % MANAT",
            "mon_decimal_point": ".\"                             % .",
            "mon_thousands_sep": ",\"                             % ,",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-\"                             % -",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "TMM \"        % TMM",
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
            "name_mr": "",
            "name_mrs": "",
            "name_miss": "",
            "name_ms": ""
        },
        "LC_NUMERIC": {
            "decimal_point": ".\" % .",
            "thousands_sep": ",\" % ,",
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
            "int_select": null,
            "int_prefix": null
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Du\u015f",
                "Si\u015f",
                "\u00c7ar",
                "Pen",
                "Ann",
                "\u015een",
                "\u00ddek"
            ],
            "day": [
                "Du\u015fenbe",
                "Si\u015fenbe",
                "\u00c7ar\u015fenbe",
                "Pen\u015fenbe",
                "Anna",
                "\u015eenbe",
                "\u00ddek\u015fenbe"
            ],
            "week": null,
            "abmon": [
                "\u00ddan",
                "Few",
                "Mar",
                "Apr",
                "Ma\u00fd",
                "I\u00fdn",
                "I\u00fdl",
                "Awg",
                "Sen",
                "Okt",
                "No\u00fd",
                "Dek"
            ],
            "mon": [
                "\u00ddanwar",
                "Fewral",
                "Mart",
                "Aprel",
                "Ma\u00fd",
                "I\u00fdun",
                "I\u00fdul",
                "Awgust",
                "Sent\u00fdabr",
                "Okt\u00fdabr",
                "No\u00fdabr",
                "Dekabr"
            ],
            "d_t_fmt": "%d.%m.%Y %T",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));