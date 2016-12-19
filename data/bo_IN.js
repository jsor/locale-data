(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['bo_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0f62\u0f92\u0fb1\u0f0b\u0f42\u0f62\u0f0b",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0f54\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b",
            "lang_ab": "bo",
            "lang_term": "bod",
            "lang_lib": "tib"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1\u0f68Yy]",
            "noexpr": "^[-0\u0f58Nn]",
            "yesstr": "\u0f61\u0f72\u0f53\u0f0d",
            "nostr": "\u0f58\u0f72\u0f53\u0f0d"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20b9",
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
            "int_curr_symbol": "INR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": " ",
            "name_gen": null,
            "name_mr": null,
            "name_mrs": null,
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
            "tel_int_fmt": "+%c ;%a ;%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "91"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0f49\u0f72\u0f0b",
                "\u0f5f\u0fb3\u0f0b",
                "\u0f58\u0f72\u0f62\u0f0b",
                "\u0f63\u0fb7\u0f42\u0f0b",
                "\u0f54\u0f74\u0f62\u0f0b",
                "\u0f66\u0f44\u0f66\u0f0b",
                "\u0f66\u0fa4\u0f7a\u0f53\u0f0b"
            ],
            "day": [
                "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b",
                "\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b",
                "\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b",
                "\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f55\u0f0b",
                "\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f74\u0f62\u0f0b\u0f56\u0f74\u0f0b",
                "\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b",
                "\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f55\u0f0b"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0f5f\u0fb3\u0f0b\u0f21",
                "\u0f5f\u0fb3\u0f0b\u0f22",
                "\u0f5f\u0fb3\u0f0b\u0f23",
                "\u0f5f\u0fb3\u0f0b\u0f24",
                "\u0f5f\u0fb3\u0f0b\u0f25",
                "\u0f5f\u0fb3\u0f0b\u0f26",
                "\u0f5f\u0fb3\u0f0b\u0f27",
                "\u0f5f\u0fb3\u0f0b\u0f28",
                "\u0f5f\u0fb3\u0f0b\u0f29",
                "\u0f5f\u0fb3\u0f0b\u0f21\u0f20",
                "\u0f5f\u0fb3\u0f0b\u0f21\u0f21",
                "\u0f5f\u0fb3\u0f0b\u0f21\u0f22"
            ],
            "mon": [
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f55\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54\u0f0b",
                "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54\u0f0b"
            ],
            "d_t_fmt": "\u0f54\u0f66\u0fb1\u0f72\u0f0b\u0f63\u0f7c%y\u0f5f\u0f63%m\u0f5a\u0f7a\u0f66%d\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51%H\u0f40\u0f66\u0f62\u0f0b\u0f58%M\u0f40\u0f66\u0f62\u0f0b\u0f46%S",
            "d_fmt": "\u0f54\u0f66\u0fb1\u0f72\u0f0b\u0f63\u0f7c%y\u0f5f\u0f63%m\u0f5a\u0f7a\u0f66%d",
            "t_fmt": "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51%H\u0f40\u0f66\u0f62\u0f0b\u0f58%M\u0f40\u0f66\u0f62\u0f0b\u0f46%S",
            "am_pm": [
                "\u0f44\u0f66\u0f0b\u0f46",
                "\u0f55\u0fb1\u0f72\u0f0b\u0f46"
            ],
            "t_fmt_ampm": "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51%I\u0f40\u0f66\u0f62\u0f0b\u0f58%M\u0f40\u0f66\u0f62\u0f0b\u0f46%S %p",
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
