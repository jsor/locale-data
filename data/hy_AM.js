(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['hy_AM'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%d%N%f%N%d%N%b%N%s %h 5e %r%N%C%z %T%N%c%N",
            "country_name": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576",
            "country_post": "AM",
            "country_ab2": "AM",
            "country_ab3": "ARM",
            "country_num": 51,
            "country_car": "AM",
            "country_isbn": "978-9939,978-99930,978-99941",
            "lang_name": "\u0570\u0561\u0575\u0565\u0580\u0565\u0576",
            "lang_ab": "hy",
            "lang_term": "hye",
            "lang_lib": "arm"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYsS\u0561\u0531]",
            "noexpr": "^[-0nN\u0578\u0548]",
            "yesstr": "\u0561\u0575\u0578",
            "nostr": "\u0578\u0579"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u058f",
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
            "int_curr_symbol": "AMD ",
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
            "name_mr": "\u057a\u0580\u0576",
            "name_mrs": "\u057f\u056f\u0576",
            "name_miss": "\u0585\u0580\u056b\u0578\u0580\u0564",
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
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "374"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %r %Z",
            "abday": [
                "\u053f\u0580\u056f",
                "\u0535\u0580\u056f",
                "\u0535\u0580\u0584",
                "\u0549\u0580\u0584",
                "\u0540\u0576\u0563",
                "\u0548\u0582\u0580",
                "\u0547\u0562\u0569"
            ],
            "day": [
                "\u053f\u056b\u0580\u0561\u056f\u056b",
                "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b",
                "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b",
                "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b",
                "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b",
                "\u0548\u0582\u0580\u0562\u0561\u0569",
                "\u0547\u0561\u0562\u0561\u0569"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u0540\u0576\u057e",
                "\u0553\u057f\u0580",
                "\u0544\u0561\u0580",
                "\u0531\u057a\u0580",
                "\u0544\u0561\u0575",
                "\u0540\u0576\u057d",
                "\u0540\u056c\u057d",
                "\u0555\u0563\u057d",
                "\u054d\u0565\u057a",
                "\u0540\u0578\u056f",
                "\u0546\u0574\u0562",
                "\u0534\u0565\u056f"
            ],
            "mon": [
                "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b",
                "\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b",
                "\u0574\u0561\u0580\u057f\u056b",
                "\u0561\u057a\u0580\u056b\u056c\u056b",
                "\u0574\u0561\u0575\u056b\u057d\u056b",
                "\u0570\u0578\u0582\u0576\u056b\u057d\u056b",
                "\u0570\u0578\u0582\u056c\u056b\u057d\u056b",
                "\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b",
                "\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b",
                "\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b",
                "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b",
                "\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b"
            ],
            "d_t_fmt": "%a %d %b %Y %r",
            "d_fmt": "%m\/\/%d\/\/%y",
            "t_fmt": "%r",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 2,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null,
            "alt_mon": [
                "\u0570\u0578\u0582\u0576\u057e\u0561\u0580",
                "\u0583\u0565\u057f\u0580\u057e\u0561\u0580",
                "\u0574\u0561\u0580\u057f",
                "\u0561\u057a\u0580\u056b\u056c",
                "\u0574\u0561\u0575\u056b\u057d",
                "\u0570\u0578\u0582\u0576\u056b\u057d",
                "\u0570\u0578\u0582\u056c\u056b\u057d",
                "\u0585\u0563\u0578\u057d\u057f\u0578\u057d",
                "\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580",
                "\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580",
                "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580",
                "\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"
            ]
        }
    };
}));
