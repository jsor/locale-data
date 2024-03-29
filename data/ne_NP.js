(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ne_NP'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%h%s%N%T",
            "country_name": "\u0928\u0947\u092a\u093e\u0932",
            "country_post": null,
            "country_ab2": "NP",
            "country_ab3": "NPL",
            "country_num": 524,
            "country_car": "NEP",
            "country_isbn": null,
            "lang_name": "\u0928\u0947\u092a\u093e\u0932\u0940",
            "lang_ab": "ne",
            "lang_term": "nep",
            "lang_lib": "nep"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "\u0939\u094b",
            "nostr": "\u0939\u094b\u0907\u0928"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0930\u0942",
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
            "int_curr_symbol": "NPR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%g%t%m%t%f",
            "name_gen": "\u091c\u094d\u092f\u0942",
            "name_mr": "\u0936\u094d\u0930\u0940\u092e\u093e\u0928\u094d",
            "name_mrs": "\u0936\u094d\u0930\u0940\u092e\u0924\u0940",
            "name_miss": "\u0938\u0941\u0936\u094d\u0930\u0940",
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
            "tel_int_fmt": "+%c %a%t%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "977"
        },
        "LC_TIME": {
            "date_fmt": "%Y %B %d %I:%M:%S %p %Z",
            "abday": [
                "\u0906\u0907\u0924",
                "\u0938\u094b\u092e",
                "\u092e\u0919\u094d\u0917\u0932",
                "\u092c\u0941\u0927",
                "\u092c\u093f\u0939\u0940",
                "\u0936\u0941\u0915\u094d\u0930",
                "\u0936\u0928\u093f"
            ],
            "day": [
                "\u0906\u0907\u0924\u092c\u093e\u0930",
                "\u0938\u094b\u092e\u092c\u093e\u0930",
                "\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930",
                "\u092c\u0941\u0927\u092c\u093e\u0930",
                "\u092c\u093f\u0939\u0940\u092c\u093e\u0930",
                "\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930",
                "\u0936\u0928\u093f\u092c\u093e\u0930"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u091c\u0928",
                "\u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940",
                "\u092e\u093e\u0930\u094d\u091a",
                "\u0905\u092a\u094d\u0930\u093f\u0932",
                "\u092e\u0947",
                "\u091c\u0941\u0928",
                "\u091c\u0941\u0932\u093e\u0908",
                "\u0905\u0917\u0938\u094d\u091f",
                "\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930",
                "\u0905\u0915\u094d\u091f\u094b\u092c\u0930",
                "\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930",
                "\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930"
            ],
            "mon": [
                "\u091c\u0928\u0935\u0930\u0940",
                "\u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940",
                "\u092e\u093e\u0930\u094d\u091a",
                "\u0905\u092a\u094d\u0930\u093f\u0932",
                "\u092e\u0947",
                "\u091c\u0941\u0928",
                "\u091c\u0941\u0932\u093e\u0908",
                "\u0905\u0917\u0938\u094d\u091f",
                "\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930",
                "\u0905\u0915\u094d\u091f\u094b\u092c\u0930",
                "\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930",
                "\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930"
            ],
            "d_t_fmt": "%Y %B %d %I:%M:%S %p",
            "d_fmt": "%y\/\/%-m\/\/%-d",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",
                "\u0905\u092a\u0930\u093e\u0939\u094d\u0928"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
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
