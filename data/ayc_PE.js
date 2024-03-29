(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ayc_PE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Piruw",
            "country_post": null,
            "country_ab2": "PE",
            "country_ab3": "PER",
            "country_num": 604,
            "country_car": "PE",
            "country_isbn": null,
            "lang_name": "Aymar aru",
            "lang_ab": "ay",
            "lang_term": "ayc",
            "lang_lib": "ayc"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1uUsSyY]",
            "noexpr": "^[-0jJnN]",
            "yesstr": "Ukhamawa",
            "nostr": "Janiwa"
        },
        "LC_MONETARY": {
            "currency_symbol": "S\/\/",
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
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "PEN ",
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
            "int_prefix": "51"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "tum",
                "lun",
                "mar",
                "mir",
                "juy",
                "wir",
                "saw"
            ],
            "day": [
                "tuminku",
                "lunisa",
                "martisa",
                "mirkulisa",
                "juywisa",
                "wirnisa",
                "saw\u00e4ru"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "ini",
                "phi",
                "mar",
                "awr",
                "may",
                "jun",
                "jul",
                "awu",
                "sit",
                "ukt",
                "nuw",
                "ris"
            ],
            "mon": [
                "in\u00efru",
                "phiwriru",
                "marsu",
                "awrila",
                "mayu",
                "junyu",
                "julyu",
                "awustu",
                "sitimri",
                "uktuwri",
                "nuwimri",
                "risimri"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d\/\/%m\/\/%y",
            "t_fmt": "%T",
            "am_pm": [
                "VM",
                "NM"
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
