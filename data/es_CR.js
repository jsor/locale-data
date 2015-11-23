(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['es_CR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Costa Rica",
            "country_post": "CR",
            "country_ab2": "CR",
            "country_ab3": "CRI",
            "country_num": 188,
            "country_car": "CR",
            "country_isbn": "9930,9977,9968",
            "lang_name": "Espa\u00f1ol",
            "lang_ab": "es",
            "lang_term": "spa",
            "lang_lib": "spa"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[sSyY].*",
            "noexpr": "^[nN].*",
            "yesstr": "Si",
            "nostr": "No"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20a1",
            "mon_decimal_point": ",",
            "mon_thousands_sep": " ",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "CRC ",
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
            "name_gen": "Sr.\/Sra.",
            "name_mr": "Sr.",
            "name_mrs": "Sra.",
            "name_miss": "Srta.",
            "name_ms": "Sra."
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": " ",
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
            "tel_dom_fmt": "%l",
            "int_select": "00",
            "int_prefix": "506"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %H:%M:%S %Z %Y",
            "abday": [
                "dom",
                "lun",
                "mar",
                "mi\u00e9",
                "jue",
                "vie",
                "s\u00e1b"
            ],
            "day": [
                "domingo",
                "lunes",
                "martes",
                "mi\u00e9rcoles",
                "jueves",
                "viernes",
                "s\u00e1bado"
            ],
            "week": null,
            "abmon": [
                "ene",
                "feb",
                "mar",
                "abr",
                "may",
                "jun",
                "jul",
                "ago",
                "sep",
                "oct",
                "nov",
                "dic"
            ],
            "mon": [
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%T",
            "am_pm": [
                "a.m.",
                "p.m."
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