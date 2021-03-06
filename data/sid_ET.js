(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sid_ET'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Itiyoophiya",
            "country_post": "ETH",
            "country_ab2": "ET",
            "country_ab3": "ETH",
            "country_num": 231,
            "country_car": "ETH",
            "country_isbn": null,
            "lang_name": "Sidaamu Afo",
            "lang_ab": null,
            "lang_term": "sid",
            "lang_lib": "sid"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1\u12a5yY]",
            "noexpr": "^[-0\u1290nN]",
            "yesstr": "\u12a5\u12c8",
            "nostr": "\u1290\u1296\u12a5"
        },
        "LC_MONETARY": {
            "currency_symbol": "Br",
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
            "int_curr_symbol": "ETB ",
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
            "name_gen": "",
            "name_mr": "Kalaa",
            "name_mrs": "Dukko",
            "name_miss": "Beeto",
            "name_ms": ""
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
            "tel_int_fmt": "%c-%a-%l",
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "251"
        },
        "LC_TIME": {
            "date_fmt": "%A, %B %e, %r %Z %Y",
            "abday": [
                "Sam",
                "San",
                "Mak",
                "Row",
                "Ham",
                "Arb",
                "Qid"
            ],
            "day": [
                "Sambata",
                "Sanyo",
                "Maakisanyo",
                "Roowe",
                "Hamuse",
                "Arbe",
                "Qidaame"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            "mon": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "d_t_fmt": "%A, %B %e, %Y %r %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%l:%M:%S %p",
            "am_pm": [
                "soodo",
                "hawwaro"
            ],
            "t_fmt_ampm": "%l:%M:%S %p",
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
