(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ik_CA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Kanada",
            "country_post": null,
            "country_ab2": "CA",
            "country_ab3": "CAN",
            "country_num": 124,
            "country_car": "CDN",
            "country_isbn": null,
            "lang_name": "I\u00f1upiatun",
            "lang_ab": "ik",
            "lang_term": "ipk",
            "lang_lib": "ipk"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYiIaA]",
            "noexpr": "^[-0nNqQ]",
            "yesstr": "aa",
            "nostr": "qa\u00f1aa"
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
            "int_curr_symbol": "CAD ",
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
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": [
                3,
                3
            ]
        },
        "LC_PAPER": {
            "height": 279,
            "width": 216
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "011",
            "int_prefix": "1"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %r %Z",
            "abday": [
                "Min",
                "Sav",
                "Ila",
                "Qit",
                "Sis",
                "Tal",
                "Maq"
            ],
            "day": [
                "Min\u0121uiqsioiq",
                "Sava\u0142\u0142iq",
                "Ilaqtchiioiq",
                "Qitchiioiq",
                "Sisamiioiq",
                "Tallimmiioiq",
                "Maqin\u0121uoiq"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "S\u00f1t",
                "S\u00f1s",
                "Pan",
                "Qil",
                "Sup",
                "I\u0121\u00f1",
                "Itc",
                "Ti\u00f1",
                "Ami",
                "Sik",
                "Nip",
                "Siq"
            ],
            "mon": [
                "Siqi\u00f1\u00f1aatchiaq",
                "Siqi\u00f1\u00f1aasrugruk",
                "Paniqsiqsiivik",
                "Qil\u0121ich Tatqiat",
                "Suppivik",
                "I\u0121\u00f1ivik",
                "Itchavik",
                "Ti\u00f1\u00f1ivik",
                "Ami\u0121aiqsivik",
                "Sikkuvik",
                "Nippivik",
                "Siqi\u00f1\u0121i\u1e37aq"
            ],
            "d_t_fmt": "%a %d %b %Y %r",
            "d_fmt": "%d\/\/%m\/\/%y",
            "t_fmt": "%r",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
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
