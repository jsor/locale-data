(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mfe_MU'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%h%s%N%T",
            "country_name": "Mauritius",
            "country_post": null,
            "country_ab2": "MU",
            "country_ab3": "MUS",
            "country_num": 480,
            "country_car": "MS",
            "country_isbn": "978-613,978-620,978-99903,978-99949",
            "lang_name": "kreol morisien",
            "lang_ab": null,
            "lang_term": "mfe",
            "lang_lib": "mfe"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYwW]",
            "noexpr": "^[-0nN]",
            "yesstr": "Wi",
            "nostr": "Non"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20a8",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "\u202f",
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
            "int_curr_symbol": "MUR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": 1,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": 1,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": "\u202f",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "230"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %H:%M:%S %Z %Y",
            "abday": [
                "dim",
                "lin",
                "mar",
                "mer",
                "ze",
                "van",
                "sam"
            ],
            "day": [
                "dimans",
                "lindi",
                "mardi",
                "merkredi",
                "zedi",
                "vandredi",
                "samdi"
            ],
            "week": null,
            "abmon": [
                "zan",
                "fev",
                "mar",
                "avr",
                "me",
                "zin",
                "zil",
                "out",
                "sep",
                "okt",
                "nov",
                "des"
            ],
            "mon": [
                "zanvie",
                "fevriye",
                "mars",
                "avril",
                "me",
                "zin",
                "zilye",
                "out",
                "septam",
                "oktob",
                "novam",
                "desam"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/\/%m\/\/%y",
            "t_fmt": "%T",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%l:%M:%S %P %Z",
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
