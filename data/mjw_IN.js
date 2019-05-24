(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['mjw_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Bhorot",
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "Karbi",
            "lang_ab": null,
            "lang_term": "mjw",
            "lang_lib": "mjw"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0nN]",
            "yesstr": "yes",
            "nostr": "no"
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
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": "",
            "name_mr": null,
            "name_mrs": "Sangpi",
            "name_miss": "Sami",
            "name_ms": ""
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
                "Bhom",
                "Ur",
                "Dur",
                "Tkel",
                "Tkem",
                "Bhta",
                "Bhti"
            ],
            "day": [
                "Bhomkuru",
                "Urmi",
                "Durmi",
                "Thelang",
                "Theman",
                "Bhomta",
                "Bhomti"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Ark",
                "Thang",
                "The",
                "Jang",
                "Aru",
                "Vos",
                "Jak",
                "Pai",
                "Chi",
                "Phe",
                "Phai",
                "Mati"
            ],
            "mon": [
                "Arkoi",
                "Thangthang",
                "There",
                "Jangmi",
                "Aru",
                "Vosik",
                "Jakhong",
                "Paipai",
                "Chiti",
                "Phere",
                "Phaikuni",
                "Matijong"
            ],
            "d_t_fmt": "%A %d %B %Y %I:%M:%S %p %Z",
            "d_fmt": "%-d\/\/%-m\/\/%y",
            "t_fmt": "%I:%M:%S %p %Z",
            "am_pm": [
                "AM",
                "PM"
            ],
            "t_fmt_ampm": "%I:%M:%S %p %Z",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": 1,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
