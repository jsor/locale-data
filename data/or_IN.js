(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['or_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "\u0b2d\u0b3e\u0b30\u0b24",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0b13\u0b21\u0b3c\u0b3f\u0b06",
            "lang_ab": "or",
            "lang_term": "ori",
            "lang_lib": "ori"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\u0b39]",
            "noexpr": "^[-0nN\u0b28]",
            "yesstr": "\u0b39\u0b01",
            "nostr": "\u0b28\u0b3e"
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
            "grouping": [
                3,
                2
            ]
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
                "\u0b30\u0b2c\u0b3f",
                "\u0b38\u0b4b\u0b2e",
                "\u0b2e\u0b19\u0b4d\u0b17\u0b33",
                "\u0b2c\u0b41\u0b27",
                "\u0b17\u0b41\u0b30\u0b41",
                "\u0b36\u0b41\u0b15\u0b4d\u0b30",
                "\u0b36\u0b28\u0b3f"
            ],
            "day": [
                "\u0b30\u0b2c\u0b3f\u0b2c\u0b3e\u0b30",
                "\u0b38\u0b4b\u0b2e\u0b2c\u0b3e\u0b30",
                "\u0b2e\u0b19\u0b4d\u0b17\u0b33\u0b2c\u0b3e\u0b30",
                "\u0b2c\u0b41\u0b27\u0b2c\u0b3e\u0b30",
                "\u0b17\u0b41\u0b30\u0b41\u0b2c\u0b3e\u0b30",
                "\u0b36\u0b41\u0b15\u0b4d\u0b30\u0b2c\u0b3e\u0b30",
                "\u0b36\u0b28\u0b3f\u0b2c\u0b3e\u0b30"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40",
                "\u0b2b\u0b47\u0b2c\u0b43\u0b06\u0b30\u0b40",
                "\u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a",
                "\u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32",
                "\u0b2e\u0b07",
                "\u0b1c\u0b41\u0b28",
                "\u0b1c\u0b41\u0b32\u0b3e\u0b07",
                "\u0b05\u0b17\u0b37\u0b4d\u0b1f",
                "\u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30",
                "\u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30",
                "\u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30",
                "\u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30"
            ],
            "mon": [
                "\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40",
                "\u0b2b\u0b47\u0b2c\u0b43\u0b06\u0b30\u0b40",
                "\u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a",
                "\u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32",
                "\u0b2e\u0b07",
                "\u0b1c\u0b41\u0b28",
                "\u0b1c\u0b41\u0b32\u0b3e\u0b07",
                "\u0b05\u0b17\u0b37\u0b4d\u0b1f",
                "\u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30",
                "\u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30",
                "\u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30",
                "\u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30"
            ],
            "d_t_fmt": "%Oe %B %Oy %OI:%OM:%OS %p %Z",
            "d_fmt": "%Od-%Om-%Oy",
            "t_fmt": "%OI:%OM:%OS %p",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%OI:%OM:%OS %p",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": [
                "\u0b66",
                "\u0b67",
                "\u0b68",
                "\u0b69",
                "\u0b6a",
                "\u0b6b",
                "\u0b6c",
                "\u0b6d",
                "\u0b6e",
                "\u0b6f",
                "\u0b67\u0b66",
                "\u0b67\u0b67",
                "\u0b67\u0b68",
                "\u0b67\u0b69",
                "\u0b67\u0b6a",
                "\u0b67\u0b6b",
                "\u0b67\u0b6c",
                "\u0b67\u0b6d",
                "\u0b67\u0b6e",
                "\u0b67\u0b6f",
                "\u0b68\u0b66",
                "\u0b68\u0b67",
                "\u0b68\u0b68",
                "\u0b68\u0b69",
                "\u0b68\u0b6a",
                "\u0b68\u0b6b",
                "\u0b68\u0b6c",
                "\u0b68\u0b6d",
                "\u0b68\u0b6e",
                "\u0b68\u0b6f",
                "\u0b69\u0b66",
                "\u0b69\u0b67",
                "\u0b69\u0b68",
                "\u0b69\u0b69",
                "\u0b69\u0b6a",
                "\u0b69\u0b6b",
                "\u0b69\u0b6c",
                "\u0b69\u0b6d",
                "\u0b69\u0b6e",
                "\u0b69\u0b6f",
                "\u0b6a\u0b66",
                "\u0b6a\u0b67",
                "\u0b6a\u0b68",
                "\u0b6a\u0b69",
                "\u0b6a\u0b6a",
                "\u0b6a\u0b6b",
                "\u0b6a\u0b6c",
                "\u0b6a\u0b6d",
                "\u0b6a\u0b6e",
                "\u0b6a\u0b6f",
                "\u0b6b\u0b66",
                "\u0b6b\u0b67",
                "\u0b6b\u0b68",
                "\u0b6b\u0b69",
                "\u0b6b\u0b6a",
                "\u0b6b\u0b6b",
                "\u0b6b\u0b6c",
                "\u0b6b\u0b6d",
                "\u0b6b\u0b6e",
                "\u0b6b\u0b6f",
                "\u0b6c\u0b66",
                "\u0b6c\u0b67",
                "\u0b6c\u0b68",
                "\u0b6c\u0b69",
                "\u0b6c\u0b6a",
                "\u0b6c\u0b6b",
                "\u0b6c\u0b6c",
                "\u0b6c\u0b6d",
                "\u0b6c\u0b6e",
                "\u0b6c\u0b6f",
                "\u0b6d\u0b66",
                "\u0b6d\u0b67",
                "\u0b6d\u0b68",
                "\u0b6d\u0b69",
                "\u0b6d\u0b6a",
                "\u0b6d\u0b6b",
                "\u0b6d\u0b6c",
                "\u0b6d\u0b6d",
                "\u0b6d\u0b6e",
                "\u0b6d\u0b6f",
                "\u0b6e\u0b66",
                "\u0b6e\u0b67",
                "\u0b6e\u0b68",
                "\u0b6e\u0b69",
                "\u0b6e\u0b6a",
                "\u0b6e\u0b6b",
                "\u0b6e\u0b6c",
                "\u0b6e\u0b6d",
                "\u0b6e\u0b6e",
                "\u0b6e\u0b6f",
                "\u0b6f\u0b66",
                "\u0b6f\u0b67",
                "\u0b6f\u0b68",
                "\u0b6f\u0b69",
                "\u0b6f\u0b6a",
                "\u0b6f\u0b6b",
                "\u0b6f\u0b6c",
                "\u0b6f\u0b6d",
                "\u0b6f\u0b6e",
                "\u0b6f\u0b6f"
            ],
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
