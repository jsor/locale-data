(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['yo_NG'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Oril\u1eb9\u0300-\u00e8d\u00e8 N\u00e0\u00ecj\u00edr\u00ed\u00e0",
            "country_post": null,
            "country_ab2": "NG",
            "country_ab3": "NGA",
            "country_num": 566,
            "country_car": "WAN",
            "country_isbn": 978,
            "lang_name": "\u00c8d\u00e8 Yor\u00f9b\u00e1",
            "lang_ab": "yo",
            "lang_term": "yor",
            "lang_lib": "yor"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1EeyYNn]",
            "noexpr": "^[-0rROoKk]",
            "yesstr": "B\u1eb9\u0301\u1eb9\u0300ni",
            "nostr": "B\u1eb9\u0301\u1eb9\u0300k\u1ecd\u0301"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20a6",
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
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "NGN ",
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
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
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
            "tel_dom_fmt": "(%A) %l",
            "int_select": "009",
            "int_prefix": "234"
        },
        "LC_TIME": {
            "date_fmt": "\u1ecdj\u1ecd\u0301 %a, %d o\u1e63\u00f9 %b \u1ecdd\u00fan %Y %T %Z",
            "abday": [
                "\u00c0\u00eck\u00fa",
                "Aj\u00e9",
                "\u00ccs\u1eb9\u0301gun",
                "\u1eccj\u1ecd\u0301r\u00fa",
                "\u1eccj\u1ecd\u0301b\u1ecd",
                "\u1eb8t\u00ec",
                "\u00c0b\u00e1m\u1eb9\u0301ta"
            ],
            "day": [
                "\u1eccj\u1ecd\u0301 \u00c0\u00eck\u00fa",
                "\u1eccj\u1ecd\u0301 Aj\u00e9",
                "\u1eccj\u1ecd\u0301 \u00ccs\u1eb9\u0301gun",
                "\u1eccj\u1ecd\u0301r\u00fa",
                "\u1eccj\u1ecd\u0301b\u1ecd",
                "\u1eccj\u1ecd\u0301 \u1eb8t\u00ec",
                "\u1eccj\u1ecd\u0301 \u00c0b\u00e1m\u1eb9\u0301ta"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u1e62\u1eb9\u0301r\u1eb9\u0301",
                "\u00c8r\u00e8l\u00e8",
                "\u1eb8r\u1eb9\u0300n\u00e0",
                "\u00ccgb\u00e9",
                "\u1eb8\u0300bibi",
                "\u00d2k\u00fadu",
                "Ag\u1eb9m\u1ecd",
                "\u00d2g\u00fan",
                "Owewe",
                "\u1ecc\u0300w\u00e0r\u00e0",
                "B\u00e9l\u00fa",
                "\u1ecc\u0300p\u1eb9\u0300"
            ],
            "mon": [
                "O\u1e63\u00f9 \u1e62\u1eb9\u0301r\u1eb9\u0301",
                "O\u1e63\u00f9 \u00c8r\u00e8l\u00e8",
                "O\u1e63\u00f9 \u1eb8r\u1eb9\u0300n\u00e0",
                "O\u1e63\u00f9 \u00ccgb\u00e9",
                "O\u1e63\u00f9 \u1eb8\u0300bibi",
                "O\u1e63\u00f9 \u00d2k\u00fadu",
                "O\u1e63\u00f9 Ag\u1eb9m\u1ecd",
                "O\u1e63\u00f9 \u00d2g\u00fan",
                "O\u1e63\u00f9 Owewe",
                "O\u1e63\u00f9 \u1ecc\u0300w\u00e0r\u00e0",
                "O\u1e63\u00f9 B\u00e9l\u00fa",
                "O\u1e63\u00f9 \u1ecc\u0300p\u1eb9\u0300"
            ],
            "d_t_fmt": "\u1ecdj\u1ecd\u0301 %a, %d o\u1e63\u00f9 %b \u1ecdd\u00fan %Y %T",
            "d_fmt": "%d\/\/%m\/\/%y",
            "t_fmt": "%r",
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
