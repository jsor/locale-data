(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['so_SO'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Soomaaliya",
            "country_post": "SOM",
            "country_ab2": "SO",
            "country_ab3": "SOM",
            "country_num": 706,
            "country_car": "SO",
            "country_isbn": null,
            "lang_name": "Soomaali",
            "lang_ab": "so",
            "lang_term": "som",
            "lang_lib": "som"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "haa",
            "nostr": "maya"
        },
        "LC_MONETARY": {
            "currency_symbol": "S",
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
            "int_curr_symbol": "SOS ",
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
            "name_mr": "Md",
            "name_mrs": "Mw",
            "name_miss": "",
            "name_ms": "Mw"
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
            "tel_int_fmt": "%c-%a-%l",
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "252"
        },
        "LC_TIME": {
            "date_fmt": "%A, %B %e, %r %Z %Y",
            "abday": [
                "Axd",
                "Isn",
                "Sal",
                "Arb",
                "Kha",
                "Jim",
                "Sab"
            ],
            "day": [
                "Axad",
                "Isniin",
                "Salaaso",
                "Arbaco",
                "Khamiis",
                "Jimco",
                "Sabti"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Kob",
                "Lab",
                "Sad",
                "Afr",
                "Sha",
                "Lix",
                "Tod",
                "Sid",
                "Sag",
                "Tob",
                "KIT",
                "LIT"
            ],
            "mon": [
                "Bisha Koobaad",
                "Bisha Labaad",
                "Bisha Saddexaad",
                "Bisha Afraad",
                "Bisha Shanaad",
                "Bisha Lixaad",
                "Bisha Todobaad",
                "Bisha Sideedaad",
                "Bisha Sagaalaad",
                "Bisha Tobnaad",
                "Bisha Kow iyo Tobnaad",
                "Bisha Laba iyo Tobnaad"
            ],
            "d_t_fmt": "%A, %B %e, %Y %r %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%l:%M:%S %p",
            "am_pm": [
                "subaxnimo",
                "galabnimo"
            ],
            "t_fmt_ampm": "%l:%M:%S %p",
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
