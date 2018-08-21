(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['si_LK'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0",
            "country_post": null,
            "country_ab2": "LK",
            "country_ab3": "LKA",
            "country_num": 144,
            "country_car": "CL",
            "country_isbn": null,
            "lang_name": "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
            "lang_ab": "si",
            "lang_term": "sin",
            "lang_lib": "sin"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0d94]",
            "noexpr": "^[-0nN\u0db1]",
            "yesstr": "\u0d94\u0dc0\u0dca",
            "nostr": "\u0db1\u0dd0\u0dad"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0dbb\u0dd4",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "LKR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%g%t%m%t%f%t%s",
            "name_gen": "",
            "name_mr": "\u0db8\u0dba\u0dcf",
            "name_mrs": "\u0db8\u0dd2\u0dba",
            "name_miss": "\u0db8\u0dd2\u0dba",
            "name_ms": "\u0db8\u0dd2\u0dba"
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
            "tel_int_fmt": "+%c (%a)tel_dom_fmt    \"(%a) %l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "94"
        },
        "LC_TIME": {
            "date_fmt": "%Y %B %e \u0dc0\u0dd0\u0db1\u0dd2 %A %H:%M:%S %z",
            "abday": [
                "\u0d89",
                "\u0dc3",
                "\u0d85",
                "\u0db6",
                "\u0db6\u0dca\u200d\u0dbb",
                "\u0dc3\u0dd2",
                "\u0dc3\u0dd9"
            ],
            "day": [
                "\u0d89\u0dbb\u0dd2\u0daf\u0dcf",
                "\u0dc3\u0db3\u0dd4\u0daf\u0dcf",
                "\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf",
                "\u0db6\u0daf\u0dcf\u0daf\u0dcf",
                "\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf",
                "\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf",
                "\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0da2\u0db1",
                "\u0db4\u0dd9\u0db6",
                "\u0db8\u0dcf\u0dbb\u0dca",
                "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dd2",
                "\u0db8\u0dd0\u0dba\u0dd2",
                "\u0da2\u0dd6\u0db1\u0dd2",
                "\u0da2\u0dd6\u0dbd\u0dd2",
                "\u0d85\u0d9c\u0ddd",
                "\u0dc3\u0dd0\u0db4\u0dca",
                "\u0d94\u0d9a\u0dca",
                "\u0db1\u0dd9\u0dc0\u0dd0",
                "\u0daf\u0dd9\u0dc3\u0dd0"
            ],
            "mon": [
                "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2",
                "\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2",
                "\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4",
                "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca",
                "\u0db8\u0dd0\u0dba\u0dd2",
                "\u0da2\u0dd6\u0db1\u0dd2",
                "\u0da2\u0dd6\u0dbd\u0dd2",
                "\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4",
                "\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
                "\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca",
                "\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
                "\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca"
            ],
            "d_t_fmt": "%Y-%m-%d %H:%M:%S %z",
            "d_fmt": "%Y-%m-%d",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "\u0db4\u0dd9.\u0dc0.",
                "\u0db4.\u0dc0."
            ],
            "t_fmt_ampm": "%p %I:%M:%S",
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
