(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ha_NG'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Najeriya",
            "country_post": null,
            "country_ab2": "NG",
            "country_ab3": "NGA",
            "country_num": 566,
            "country_car": "WAN",
            "country_isbn": 978,
            "lang_name": "Hausa",
            "lang_ab": "ha",
            "lang_term": "hau",
            "lang_lib": "hau"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1TtiIYy]",
            "noexpr": "^[-0bBaAnN]",
            "yesstr": "i",
            "nostr": "a\u02bca"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20a6",
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
            "int_curr_symbol": "NGN ",
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
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "(%A) %l",
            "int_select": "009",
            "int_prefix": "234"
        },
        "LC_TIME": {
            "date_fmt": "ranar %A, %d ga %B cikin %r %Z",
            "abday": [
                "Lah",
                "Lit",
                "Tal",
                "Lar",
                "Alh",
                "Jum",
                "Asa"
            ],
            "day": [
                "Lahadi",
                "Litini",
                "Talata",
                "Laraba",
                "Alhamis",
                "Juma'a",
                "Asabar"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Jan",
                "Fab",
                "Mar",
                "Afi",
                "May",
                "Yun",
                "Yul",
                "Agu",
                "Sat",
                "Okt",
                "Nuw",
                "Dis"
            ],
            "mon": [
                "Janairu",
                "Faburairu",
                "Maris",
                "Afirilu",
                "Mayu",
                "Yuni",
                "Yuli",
                "Agusta",
                "Satumba",
                "Oktoba",
                "Nuwamba",
                "Disamba"
            ],
            "d_t_fmt": "ranar %A, %d ga %B cikin %r",
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
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
