(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['wa_BE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Beljike",
            "country_post": "B",
            "country_ab2": "BE",
            "country_ab3": "BEL",
            "country_num": 56,
            "country_car": "B",
            "country_isbn": "2",
            "lang_name": "Walon",
            "lang_ab": "wa",
            "lang_term": "wln",
            "lang_lib": "wln"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1oOyYaAwW]",
            "noexpr": "^[-0nN]",
            "yesstr": "Oyi",
            "nostr": "Neni"
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
            "name_gen": "",
            "name_mr": "M.",
            "name_mrs": "Mme",
            "name_miss": "Mle",
            "name_ms": "Mme"
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
            "int_prefix": "32"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "dim",
                "lon",
                "m\u00e5r",
                "mie",
                "dju",
                "v\u00e9n",
                "sem"
            ],
            "day": [
                "dimegne",
                "londi",
                "m\u00e5rdi",
                "mierkidi",
                "djudi",
                "v\u00e9nrdi",
                "semdi"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "dja",
                "fev",
                "m\u00e5s",
                "avr",
                "may",
                "djn",
                "djl",
                "awo",
                "set",
                "oct",
                "n\u00f4v",
                "dec"
            ],
            "mon": [
                "djanv\u00ee",
                "fevr\u00ee",
                "m\u00e5ss",
                "avri",
                "may",
                "djun",
                "djulete",
                "awousse",
                "setimbe",
                "oct\u00f4be",
                "n\u00f4vimbe",
                "decimbe"
            ],
            "d_t_fmt": "Li %A %d di %B %Y %T %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%H:%M:%S",
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
