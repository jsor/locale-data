(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['tt_RU@iqtelif'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Ur\u0131s Pat\u015fahl\u0131q",
            "country_post": null,
            "country_ab2": "RU",
            "country_ab3": "RUS",
            "country_num": 643,
            "country_car": "RUS",
            "country_isbn": null,
            "lang_name": "tatar tele",
            "lang_ab": "tt",
            "lang_term": "tat",
            "lang_lib": "tat"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1Ee]",
            "noexpr": "^[-0YyNn]",
            "yesstr": "ey\u00ed",
            "nostr": "yuq"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20bd",
            "mon_decimal_point": ".",
            "mon_thousands_sep": "\u202f",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "RUB ",
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
            "decimal_point": ",",
            "thousands_sep": ".",
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
            "int_select": "0~10",
            "int_prefix": "7"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "Yek",
                "D\u00fc\u015f",
                "Si\u015f",
                "\u00c7er",
                "Pen",
                "Com",
                "\u015eim"
            ],
            "day": [
                "Yek\u015femb\u00ed",
                "D\u00fc\u015femb\u00ed",
                "Si\u015femb\u00ed",
                "\u00c7er\u015femb\u00ed",
                "Penc\u00ed\u015femb\u00ed",
                "Com\u011fa",
                "\u015eimbe"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "\u011e\u0131n",
                "Fiw",
                "Mar",
                "Apr",
                "May",
                "Y\u00fcn",
                "Y\u00fcl",
                "Awg",
                "Sin",
                "\u00dckt",
                "Noy",
                "Dik"
            ],
            "mon": [
                "\u011e\u0131nwar",
                "Fiwral'",
                "Mart",
                "April",
                "May",
                "Y\u00fcn",
                "Y\u00fcl",
                "Awgust",
                "Sinteb\u00edr",
                "\u00dckteb\u00edr",
                "Noyeb\u00edr",
                "Dikeb\u00edr"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%T",
            "am_pm": [
                "\u00d6A",
                "\u00d6S"
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
