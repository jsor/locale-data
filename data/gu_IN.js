(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['gu_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0aad\u0abe\u0ab0\u0aa4",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",
            "lang_ab": "gu",
            "lang_term": "guj",
            "lang_lib": "guj"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0ab9]",
            "noexpr": "^[-0nN\u0aa8]",
            "yesstr": "\u0ab9\u0abe",
            "nostr": "\u0aa8\u0ab9\u0ac0\u0a82"
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
            "name_gen": "\u0a9c\u0abe\u0aa4\u0abf",
            "name_mr": "\u0ab6\u0acd\u0ab0\u0ac0\u0aae\u0abe\u0aa8",
            "name_mrs": "\u0ab6\u0acd\u0ab0\u0ac0\u0aae\u0aa4\u0abf",
            "name_miss": "\u0a95\u0ac1\u0aae\u0abe\u0ab0\u0ac0",
            "name_ms": "\u0ab8\u0ab6\u0acd\u0ab0\u0ac0"
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
            "date_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "abday": [
                "\u0ab0\u0ab5\u0abf",
                "\u0ab8\u0acb\u0aae",
                "\u0aae\u0a82\u0a97\u0ab3",
                "\u0aac\u0ac1\u0aa7",
                "\u0a97\u0ac1\u0ab0\u0ac1",
                "\u0ab6\u0ac1\u0a95\u0acd\u0ab0",
                "\u0ab6\u0aa8\u0abf"
            ],
            "day": [
                "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0",
                "\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0",
                "\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0",
                "\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0",
                "\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0",
                "\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0",
                "\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1",
                "\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1",
                "\u0aae\u0abe\u0ab0\u0acd\u0a9a",
                "\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2",
                "\u0aae\u0ac7",
                "\u0a9c\u0ac2\u0aa8",
                "\u0a9c\u0ac1\u0ab2\u0abe\u0a88",
                "\u0a91\u0a97\u0ab8\u0acd\u0a9f",
                "\u0ab8\u0aaa\u0acd\u0a9f\u0ac7",
                "\u0a91\u0a95\u0acd\u0a9f\u0acb",
                "\u0aa8\u0ab5\u0ac7",
                "\u0aa1\u0abf\u0ab8\u0ac7"
            ],
            "mon": [
                "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0",
                "\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0",
                "\u0aae\u0abe\u0ab0\u0acd\u0a9a",
                "\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2",
                "\u0aae\u0ac7",
                "\u0a9c\u0ac2\u0aa8",
                "\u0a9c\u0ac1\u0ab2\u0abe\u0a88",
                "\u0a91\u0a97\u0ab8\u0acd\u0a9f",
                "\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0",
                "\u0a91\u0a95\u0acd\u0a9f\u0acb\u0aac\u0ab0",
                "\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0",
                "\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p",
            "d_fmt": "%-d\/\/%-m\/\/%y",
            "t_fmt": "%I:%M:%S %p %Z",
            "am_pm": [
                "\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",
                "\u0ab8\u0abe\u0a82\u0a9c\u0ac7"
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
