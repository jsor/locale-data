(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['th_TH'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%r%t%e%t%b%N%h%t%s%N%T%N%S%N%z%c%N",
            "country_name": "\u0e44\u0e17\u0e22",
            "country_post": null,
            "country_ab2": "TH",
            "country_ab3": "THA",
            "country_num": 764,
            "country_car": "T",
            "country_isbn": null,
            "lang_name": "\u0e44\u0e17\u0e22",
            "lang_ab": "th",
            "lang_term": "tha",
            "lang_lib": "tha"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0e0a]",
            "noexpr": "^[-0nN\u0e21]",
            "yesstr": "\u0e43\u0e0a\u0e48",
            "nostr": "\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0e3f",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 2,
            "n_cs_precedes": 1,
            "n_sep_by_space": 2,
            "p_sign_posn": 4,
            "n_sign_posn": 4,
            "int_curr_symbol": "THB ",
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
            "name_gen": "\u0e04\u0e38\u0e13",
            "name_mr": "\u0e19\u0e32\u0e22",
            "name_mrs": "\u0e19\u0e32\u0e07",
            "name_miss": "\u0e19\u0e32\u0e07\u0e2a\u0e32\u0e27",
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "0-%a%l",
            "int_select": "001",
            "int_prefix": "66"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %Ey %H:%M:%S %Z",
            "abday": [
                "\u0e2d\u0e32.",
                "\u0e08.",
                "\u0e2d.",
                "\u0e1e.",
                "\u0e1e\u0e24.",
                "\u0e28.",
                "\u0e2a."
            ],
            "day": [
                "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",
                "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c",
                "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23",
                "\u0e1e\u0e38\u0e18",
                "\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35",
                "\u0e28\u0e38\u0e01\u0e23\u0e4c",
                "\u0e40\u0e2a\u0e32\u0e23\u0e4c"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0e21.\u0e04.",
                "\u0e01.\u0e1e.",
                "\u0e21\u0e35.\u0e04.",
                "\u0e40\u0e21.\u0e22.",
                "\u0e1e.\u0e04.",
                "\u0e21\u0e34.\u0e22.",
                "\u0e01.\u0e04.",
                "\u0e2a.\u0e04.",
                "\u0e01.\u0e22.",
                "\u0e15.\u0e04.",
                "\u0e1e.\u0e22.",
                "\u0e18.\u0e04."
            ],
            "mon": [
                "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21",
                "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c",
                "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21",
                "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19",
                "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21",
                "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19",
                "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21",
                "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21",
                "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19",
                "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21",
                "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",
                "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"
            ],
            "d_t_fmt": "%a %e %b %Ey, %H:%M:%S",
            "d_fmt": "%d\/%m\/%Ey",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
            "era": "+:1:-543\/01\/01:+*:\u0e1e.\u0e28.:%EC %Ey",
            "era_year": null,
            "era_d_t_fmt": "\u0e27\u0e31\u0e19%A\u0e17\u0e35\u0e48 %e %B %EC %Ey, %H.%M.%S \u0e19.",
            "era_d_fmt": "%e %b %Ey",
            "era_t_fmt": "%H.%M.%S \u0e19.",
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
