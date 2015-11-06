(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['se_NO'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "NO",
            "country_ab3": "NOR",
            "country_num": 578,
            "country_car": "N",
            "country_isbn": null,
            "lang_name": "Davvis\u00e1megiella",
            "lang_ab": "se",
            "lang_term": "sme",
            "lang_lib": "sme"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[JjYy].*",
            "noexpr": "^[Ii].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": " ru",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "p_sign_posn": 4,
            "n_sign_posn": 4,
            "int_curr_symbol": "NOK ",
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
            "tel_int_fmt": "+%c %l",
            "tel_dom_fmt": "%l",
            "int_select": "00",
            "int_prefix": "47"
        },
        "LC_TIME": {
            "date_fmt": "%A, %B %d. b. %Y %H:%M:%S %Z",
            "abday": [
                "sotn",
                "vuos",
                "ma\u014b",
                "gask",
                "duor",
                "bear",
                "l\u00e1v"
            ],
            "day": [
                "sotnabeaivi",
                "vuoss\u00e1rga",
                "ma\u014b\u014bebarga",
                "gaskavahkku",
                "duorasdat",
                "bearjadat",
                "l\u00e1vvardat"
            ],
            "week": null,
            "abmon": [
                "o\u0111\u0111j",
                "guov",
                "njuk",
                "cuo\u014b",
                "mies",
                "geas",
                "suoi",
                "borg",
                "\u010dak\u010d",
                "golg",
                "sk\u00e1b",
                "juov"
            ],
            "mon": [
                "o\u0111\u0111ajagem\u00e1nu",
                "guovvam\u00e1nu",
                "njuk\u010dam\u00e1nu",
                "cuo\u014bom\u00e1nu",
                "miessem\u00e1nu",
                "geassem\u00e1nu",
                "suoidnem\u00e1nu",
                "borgem\u00e1nu",
                "\u010dak\u010dam\u00e1nu",
                "golggotm\u00e1nu",
                "sk\u00e1bmam\u00e1nu",
                "juovlam\u00e1nu"
            ],
            "d_t_fmt": "%a, %b %e. b. %Y %T %Z",
            "d_fmt": "%Y-%m-%d",
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
