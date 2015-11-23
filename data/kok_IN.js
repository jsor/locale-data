(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['kok_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": null,
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0915\u094b\u0902\u0915\u0923\u0940",
            "lang_ab": null,
            "lang_term": "kok",
            "lang_lib": "kok"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^(\u0939\u092f|[yY])",
            "noexpr": "^(\u0928\u094d\u0939\u0940|[nN])",
            "yesstr": null,
            "nostr": null
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
            "name_fmt": "%p%t%f%t%g",
            "name_gen": "",
            "name_mr": "\u0936\u094d\u0930\u0940",
            "name_mrs": "\u0936\u094d\u0930\u0940\u092e\u0924\u0940",
            "name_miss": "\u0915\u0941\u092e\u093e\u0930\u0940",
            "name_ms": "\u0915\u0941\u092e\u093e\u0930"
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
                "\u0906\u092f\u0924\u093e\u0930",
                "\u0938\u094b\u092e\u093e\u0930",
                "\u092e\u0902\u0917\u0933\u0935\u093e\u0930",
                "\u092c\u0941\u0927\u0935\u093e\u0930",
                "\u092c\u0947\u0930\u0947\u0938\u0924\u093e\u0930",
                "\u0936\u0941\u0915\u0930\u093e\u0930",
                "\u0936\u0947\u0928\u0935\u093e\u0930"
            ],
            "day": [
                "\u0906\u092f\u0924\u093e\u0930",
                "\u0938\u094b\u092e\u093e\u0930",
                "\u092e\u0902\u0917\u0933\u0935\u093e\u0930",
                "\u092c\u0941\u0927\u0935\u093e\u0930",
                "\u092c\u0947\u0930\u0947\u0938\u0924\u093e\u0930",
                "\u0936\u0941\u0915\u0930\u093e\u0930",
                "\u0936\u0947\u0928\u0935\u093e\u0930"
            ],
            "week": null,
            "abmon": [
                "\u091c\u0947\u0928\u0935\u0930\u0940",
                "\u092b\u0947\u092c\u094d\u0930\u0930\u0940",
                "\u092e\u093e\u0930\u091a",
                "\u090f\u092a\u094d\u0930\u0940\u0932",
                "\u092e\u0947\u0902",
                "\u091c\u0941\u0928",
                "\u091c\u0941\u0932\u0948",
                "\u0913\u0917\u0938\u094d\u091f",
                "\u0938\u0947\u092a\u091f\u0947\u0902\u092c\u0930",
                "\u0913\u0915\u091f\u094b\u092c\u0930",
                "\u0928\u094b\u0935\u0947\u0902\u092c\u0930",
                "\u0926\u093f\u0938\u0947\u0902\u092c\u0930"
            ],
            "mon": [
                "\u091c\u0947\u0928\u0935\u0930\u0940",
                "\u092b\u0947\u092c\u094d\u0930\u0930\u0940",
                "\u092e\u093e\u0930\u091a",
                "\u090f\u092a\u094d\u0930\u0940\u0932",
                "\u092e\u0947\u0902",
                "\u091c\u0941\u0928",
                "\u091c\u0941\u0932\u0948",
                "\u0913\u0917\u0938\u094d\u091f",
                "\u0938\u0947\u092a\u091f\u0947\u0902\u092c\u0930",
                "\u0913\u0915\u091f\u094b\u092c\u0930",
                "\u0928\u094b\u0935\u0947\u0902\u092c\u0930",
                "\u0926\u093f\u0938\u0947\u0902\u092c\u0930"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%I:%M:%S  %Z",
            "am_pm": [
                "\u092e.\u092a\u0942.",
                "\u092e.\u0928\u0902."
            ],
            "t_fmt_ampm": "%I:%M:%S %p %Z",
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