(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['st_ZA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Afrika Borwa",
            "country_post": "ZA",
            "country_ab2": "ZA",
            "country_ab3": "ZAF",
            "country_num": 710,
            "country_car": "ZA",
            "country_isbn": null,
            "lang_name": "Sesotho",
            "lang_ab": "st",
            "lang_term": "sot",
            "lang_lib": "sot"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY]",
            "noexpr": "^[nN]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "R",
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
            "int_curr_symbol": "ZAR ",
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
            "int_select": "00",
            "int_prefix": "27"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %-e %H:%M:%S %Z %Y",
            "abday": [
                "Son",
                "Mma",
                "Bed",
                "Rar",
                "Ne",
                "Hla",
                "Moq"
            ],
            "day": [
                "Sontaha",
                "Mantaha",
                "Labobedi",
                "Laboraro",
                "Labone",
                "Labohlano",
                "Moqebelo"
            ],
            "week": null,
            "abmon": [
                "Phe",
                "Hla",
                "TlH",
                "Mme",
                "Mot",
                "Jan",
                "Upu",
                "Pha",
                "Leo",
                "Mph",
                "Pud",
                "Tsh"
            ],
            "mon": [
                "Pherekgong",
                "Hlakola",
                "Tlhakubele",
                "Mmese",
                "Motsheanong",
                "Phupjane",
                "Phupu",
                "Phato",
                "Leotse",
                "Mphalane",
                "Pudungwana",
                "Tshitwe"
            ],
            "d_t_fmt": "%a %-e %b %Y %T %Z",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));