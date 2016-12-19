(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sq_MK'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Maqedoni",
            "country_post": "MK",
            "country_ab2": "MK",
            "country_ab3": "MKD",
            "country_num": 807,
            "country_car": "MK",
            "country_isbn": "9989",
            "lang_name": "shqip",
            "lang_ab": "sq",
            "lang_term": "sqi",
            "lang_lib": "alb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYpP]",
            "noexpr": "^[-0nNjJ]",
            "yesstr": "po",
            "nostr": "jo"
        },
        "LC_MONETARY": {
            "currency_symbol": "den",
            "mon_decimal_point": ",",
            "mon_thousands_sep": " ",
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
            "int_curr_symbol": "MKD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%f%t%g",
            "name_gen": "",
            "name_mr": "Z.",
            "name_mrs": "Znj.",
            "name_miss": "Zsh.",
            "name_ms": "Znj."
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": ".",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%A %l",
            "int_select": "00",
            "int_prefix": "389"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Die ",
                "H\u00ebn ",
                "Mar ",
                "M\u00ebr ",
                "Enj ",
                "Pre ",
                "Sht "
            ],
            "day": [
                "e diel ",
                "e h\u00ebn\u00eb ",
                "e mart\u00eb ",
                "e m\u00ebrkur\u00eb ",
                "e enjte ",
                "e premte ",
                "e shtun\u00eb "
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Jan",
                "Shk",
                "Mar",
                "Pri",
                "Maj",
                "Qer",
                "Kor",
                "Gsh",
                "Sht",
                "Tet",
                "N\u00ebn",
                "Dhj"
            ],
            "mon": [
                "janar",
                "shkurt",
                "mars",
                "prill",
                "maj",
                "qershor",
                "korrik",
                "gusht",
                "shtator",
                "tetor",
                "n\u00ebntor",
                "dhjetor"
            ],
            "d_t_fmt": "%Y-%b-%d %I.%M.%S.%p %Z",
            "d_fmt": "%Y-%b-%d",
            "t_fmt": "%I.%M.%S. %Z",
            "am_pm": [
                "PD",
                "MD"
            ],
            "t_fmt_ampm": "%I.%M.%S.%p %Z",
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
