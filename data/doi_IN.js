(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['doi_IN'] = factory();
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
            "lang_name": "\u0921\u094b\u0917\u0930\u0940",
            "lang_ab": null,
            "lang_term": "doi",
            "lang_lib": "doi"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0911]",
            "noexpr": "^[-0nN\u0928]",
            "yesstr": "\u0911\u0939",
            "nostr": "\u0928\u093e"
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
                "\u0910\u0924",
                "\u0938\u094b\u092e",
                "\u092e\u0902\u0917\u0932",
                "\u092c\u0941\u0927",
                "\u092c\u0940\u0930",
                "\u0936\u0941\u0915\u094d\u0915\u0930",
                "\u0936\u094d\u0928\u0940\u091a\u0930"
            ],
            "day": [
                "\u0910\u0924\u092c\u093e\u0930",
                "\u0938\u094b\u092e\u092c\u093e\u0930",
                "\u092e\u0902\u0917\u0932\u092c\u0930",
                "\u092c\u0941\u0927\u092c\u093e\u0930",
                "\u092c\u0940\u0930\u092c\u093e\u0930",
                "\u0936\u0941\u0915\u094d\u0915\u0930\u092c\u093e\u0930",
                "\u0936\u094d\u0928\u0940\u091a\u0930\u092c\u093e\u0930"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u091c\u0928\u0935\u0930\u0940",
                "\u092b\u0930\u0935\u0930\u0940",
                "\u092e\u093e\u0930\u094d\u091a",
                "\u090f\u092a\u094d\u0930\u0948\u0932",
                "\u092e\u0947\u0908",
                "\u091c\u0942\u0928",
                "\u091c\u0942\u0932\u0948",
                "\u0905\u0917\u0938\u094d\u0924",
                "\u0938\u093f\u0924\u0902\u092c\u0930",
                "\u0905\u0915\u094d\u0924\u0942\u092c\u0930",
                "\u0928\u0935\u0902\u092c\u0930",
                "\u0926\u093f\u0938\u0902\u092c\u0930"
            ],
            "mon": [
                "\u091c\u0928\u0935\u0930\u0940",
                "\u092b\u0930\u0935\u0930\u0940",
                "\u092e\u093e\u0930\u094d\u091a",
                "\u090f\u092a\u094d\u0930\u0948\u0932",
                "\u092e\u0947\u0908",
                "\u091c\u0942\u0928",
                "\u091c\u0942\u0932\u0948",
                "\u0905\u0917\u0938\u094d\u0924",
                "\u0938\u093f\u0924\u0902\u092c\u0930",
                "\u0905\u0915\u094d\u0924\u0942\u092c\u0930",
                "\u0928\u0935\u0902\u092c\u0930",
                "\u0926\u093f\u0938\u0902\u092c\u0930"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%I:%M:%S  %Z",
            "am_pm": [
                "\u0938\u091e\u0902",
                "\u0938\u092c\u0947\u0930"
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
