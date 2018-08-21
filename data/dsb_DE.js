(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['dsb_DE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Nimska",
            "country_post": "D",
            "country_ab2": "DE",
            "country_ab3": "DEU",
            "country_num": 276,
            "country_car": "D",
            "country_isbn": 3,
            "lang_name": "dolnoserb\u0161\u0107ina",
            "lang_ab": "",
            "lang_term": "dsb",
            "lang_lib": "dsb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1jJhHyY]",
            "noexpr": "^[-0nN]",
            "yesstr": "jo",
            "nostr": "n\u011b"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "int_curr_symbol": "EUR ",
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
            "name_mr": "kn\u011bz",
            "name_mrs": "kn\u011bni",
            "name_miss": "kn\u011b\u017ena",
            "name_ms": "kn\u011bni"
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
            "tel_dom_fmt": "%A %l",
            "int_select": "00",
            "int_prefix": "49"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Nj",
                "P\u00f3",
                "Wa",
                "Sr",
                "St",
                "P\u011b",
                "So"
            ],
            "day": [
                "Nje\u017aela",
                "P\u00f3nje\u017aele",
                "Wa\u0142tora",
                "Srjoda",
                "Stw\u00f3rtk",
                "P\u011btk",
                "Sobota"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Jan",
                "Feb",
                "M\u011br",
                "Apr",
                "Maj",
                "Jun",
                "Jul",
                "Awg",
                "Sep",
                "Okt",
                "Now",
                "Dec"
            ],
            "mon": [
                "januara",
                "februara",
                "m\u011brca",
                "apryla",
                "maja",
                "junija",
                "julija",
                "awgusta",
                "septembra",
                "oktobra",
                "nowembra",
                "decembra"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d.%m.%Y",
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
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null,
            "alt_mon": [
                "Januar",
                "Februar",
                "M\u011brc",
                "Apryl",
                "Maj",
                "Junij",
                "Julij",
                "Awgust",
                "September",
                "Oktober",
                "Nowember",
                "December"
            ]
        }
    };
}));
