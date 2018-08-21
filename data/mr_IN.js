(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mr_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u092d\u093e\u0930\u0924",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u092e\u0930\u093e\u0920\u0940",
            "lang_ab": "mr",
            "lang_term": "mar",
            "lang_lib": "mar"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0939]",
            "noexpr": "^[-0nN\u0928]",
            "yesstr": "\u0939\u094b\u092f",
            "nostr": "\u0928\u093e\u0939\u0940"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20b9",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                2
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
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
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
            "tel_int_fmt": [
                "+%c ",
                0,
                0
            ],
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "91"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0930\u0935\u093f",
                "\u0938\u094b\u092e",
                "\u092e\u0902\u0917\u0933",
                "\u092c\u0941\u0927",
                "\u0917\u0941\u0930\u0941",
                "\u0936\u0941\u0915\u094d\u0930",
                "\u0936\u0928\u093f"
            ],
            "day": [
                "\u0930\u0935\u093f\u0935\u093e\u0930",
                "\u0938\u094b\u092e\u0935\u093e\u0930",
                "\u092e\u0902\u0917\u0933\u0935\u093e\u0930",
                "\u092c\u0941\u0927\u0935\u093e\u0930",
                "\u0917\u0941\u0930\u0941\u0935\u093e\u0930",
                "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930",
                "\u0936\u0928\u093f\u0935\u093e\u0930"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u091c\u093e\u0928\u0947",
                "\u092b\u0947\u092c\u094d\u0930\u0941",
                "\u092e\u093e\u0930\u094d\u091a",
                "\u090f\u092a\u094d\u0930\u093f",
                "\u092e\u0947",
                "\u091c\u0942\u0928",
                "\u091c\u0941\u0932\u0948",
                "\u0911\u0917",
                "\u0938\u092a\u094d\u091f\u0947\u0902",
                "\u0911\u0915\u094d\u091f\u094b",
                "\u0928\u094b\u0935\u094d\u0939\u0947\u0902",
                "\u0921\u093f\u0938\u0947\u0902"
            ],
            "mon": [
                "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940",
                "\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940",
                "\u092e\u093e\u0930\u094d\u091a",
                "\u090f\u092a\u094d\u0930\u093f\u0932",
                "\u092e\u0947",
                "\u091c\u0942\u0928",
                "\u091c\u0941\u0932\u0948",
                "\u0911\u0917\u0938\u094d\u091f",
                "\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930",
                "\u0911\u0915\u094d\u091f\u094b\u092c\u0930",
                "\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930",
                "\u0921\u093f\u0938\u0947\u0902\u092c\u0930"
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
