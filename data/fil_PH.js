(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['fil_PH'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T %z%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "PH",
            "country_ab3": "PHL",
            "country_num": 608,
            "country_car": "RP",
            "country_isbn": null,
            "lang_name": "Filipino",
            "lang_ab": null,
            "lang_term": "fil",
            "lang_lib": null
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "[oOyY].*",
            "noexpr": "[hHnN].*",
            "yesstr": "oo",
            "nostr": "hindi"
        },
        "LC_MONETARY": {
            "currency_symbol": "PhP",
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
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "PHP ",
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
            "name_mr": "G.",
            "name_mrs": "Gng.",
            "name_miss": "Bb.",
            "name_ms": "Bb."
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
            "tel_int_fmt": "+%c (%a) %l",
            "tel_dom_fmt": "(%a) %l",
            "int_select": "11",
            "int_prefix": "1"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Lin",
                "Lun",
                "Mar",
                "Miy",
                "Huw",
                "Biy",
                "Sab"
            ],
            "day": [
                "Linggo",
                "Lunes",
                "Martes",
                "Miyerkoles",
                "Huwebes",
                "Biyernes",
                "Sabado"
            ],
            "week": null,
            "abmon": [
                "Ene",
                "Peb",
                "Mar",
                "Abr",
                "May",
                "Hun",
                "Hul",
                "Ago",
                "Sep",
                "Okt",
                "Nob",
                "Dis"
            ],
            "mon": [
                "Enero",
                "Pebrero",
                "Marso",
                "Abril",
                "Mayo",
                "Hunyo",
                "Hulyo",
                "Agosto",
                "Septiyembre",
                "Oktubre",
                "Nobiyembre",
                "Disyembre"
            ],
            "d_t_fmt": "%a %d %b %Y %r %Z",
            "d_fmt": "%m\/%d\/%y",
            "t_fmt": "%r",
            "am_pm": [
                "N.U.",
                "N.H."
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