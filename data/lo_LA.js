(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['lo_LA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%r%t%e%t%b%N%h%t%s%N%T%N%S%N%z%c%N",
            "country_name": "\u0ea5\u0eb2\u0ea7",
            "country_post": null,
            "country_ab2": "LA",
            "country_ab3": "LAO",
            "country_num": 418,
            "country_car": "LAO",
            "country_isbn": null,
            "lang_name": "\u0ea5\u0eb2\u0ea7",
            "lang_ab": "lo",
            "lang_term": "lao",
            "lang_lib": "lao"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY\u0ea1]",
            "noexpr": "^[nN\u0e9a]",
            "yesstr": "\u0ec1\u0ea1\u0ec8\u0e99",
            "nostr": "\u0e9a\u0ecd\u0ec8\u0ec1\u0ea1\u0ec8\u0e99"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ad",
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
            "p_sep_by_space": 2,
            "n_cs_precedes": 1,
            "n_sep_by_space": 2,
            "p_sign_posn": 4,
            "n_sign_posn": 4,
            "int_curr_symbol": "LAK ",
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
            "name_mr": "\u0e97.",
            "name_mrs": "\u0e99.",
            "name_miss": null,
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
            "tel_dom_fmt": "(%A)%l",
            "int_select": "001",
            "int_prefix": "856"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %Ey %H:%M:%S %Z",
            "abday": [
                "\u0ead\u0eb2.",
                "\u0e88.",
                "\u0e84.",
                "\u0e9e.",
                "\u0e9e\u0eab.",
                "\u0eaa.",
                "\u0eaa."
            ],
            "day": [
                "\u0ead\u0eb2\u0e97\u0eb4\u0e94",
                "\u0e88\u0eb1\u0e99",
                "\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99",
                "\u0e9e\u0eb8\u0e94",
                "\u0e9e\u0eb0\u0eab\u0eb1\u0e94",
                "\u0eaa\u0eb8\u0e81",
                "\u0ec0\u0eaa\u0ebb\u0eb2"
            ],
            "week": null,
            "abmon": [
                "\u0ea1.\u0e81.",
                "\u0e81.\u0e9e.",
                "\u0ea1.\u0e99.",
                "\u0ea1.\u0eaa.",
                "\u0e9e.\u0e9e.",
                "\u0ea1\u0eb4.\u0e96.",
                "\u0e81.\u0ea5.",
                "\u0eaa.\u0eab.",
                "\u0e81.\u0e8d.",
                "\u0e95.\u0ea5.",
                "\u0e9e.\u0e88.",
                "\u0e97.\u0ea7."
            ],
            "mon": [
                "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99",
                "\u0e81\u0eb8\u0ea1\u0e9f\u0eb2",
                "\u0ea1\u0eb5\u0e99\u0eb2",
                "\u0ec0\u0ea1\u0eaa\u0eb2",
                "\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2",
                "\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2",
                "\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94",
                "\u0eaa\u0eb4\u0e87\u0eab\u0eb2",
                "\u0e81\u0eb1\u0e99\u0e8d\u0eb2",
                "\u0e95\u0eb8\u0ea5\u0eb2",
                "\u0e9e\u0eb0\u0e88\u0eb4\u0e81",
                "\u0e97\u0eb1\u0e99\u0ea7\u0eb2"
            ],
            "d_t_fmt": "%a %e %b %Ey, %H:%M:%S",
            "d_fmt": "%d\/%m\/%Ey",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
            "era": "+:1:-543\/01\/01:+*:\u0e9e.\u0eaa.:%EC %Ey",
            "era_year": null,
            "era_d_t_fmt": "\u0ea7\u0eb1\u0e99%A\u0e97\u0eb5\u0ec8 %e %B %EC %Ey, %H.%M.%S \u0e99.",
            "era_d_fmt": "%e %b %Ey",
            "era_t_fmt": "%H.%M.%S \u0e99.",
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
