(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['om_ET'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Itoophiyaa",
            "country_post": "ETH",
            "country_ab2": "ET",
            "country_ab3": "ETH",
            "country_num": 231,
            "country_car": "ETH",
            "country_isbn": null,
            "lang_name": "Oromoo",
            "lang_ab": "om",
            "lang_term": "orm",
            "lang_lib": "orm"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
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
            "name_mr": "Ob",
            "name_mrs": "Ad",
            "name_miss": "Du",
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
                "Dil",
                "Wix",
                "Qib",
                "Rob",
                "Kam",
                "Jim",
                "San"
            ],
            "day": [
                "Dilbata",
                "Wiixata",
                "Qibxata",
                "Roobii",
                "Kamiisa",
                "Jimaata",
                "Sanbata"
            ],
            "week": null,
            "abmon": [
                "Ama",
                "Gur",
                "Bit",
                "Elb",
                "Cam",
                "Wax",
                "Ado",
                "Hag",
                "Ful",
                "Onk",
                "Sad",
                "Mud"
            ],
            "mon": [
                "Amajjii",
                "Guraandhala",
                "Bitooteessa",
                "Elba",
                "Caamsa",
                "Waxabajjii",
                "Adooleessa",
                "Hagayya",
                "Fuulbana",
                "Onkololeessa",
                "Sadaasa",
                "Muddee"
            ],
            "d_t_fmt": "%A, %B %e, %Y %r %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "WD",
                "WB"
            ],
            "t_fmt_ampm": "%X %p",
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
