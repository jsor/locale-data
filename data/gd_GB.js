(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['gd_GB'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%S%N%c%N",
            "country_name": "An R\u00ecoghachd Aonaichte",
            "country_post": null,
            "country_ab2": "GB",
            "country_ab3": "GBR",
            "country_num": 826,
            "country_car": "GB",
            "country_isbn": 0,
            "lang_name": "G\u00e0idhlig",
            "lang_ab": "gd",
            "lang_term": "gla",
            "lang_lib": "gla"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1tTyY]",
            "noexpr": "^[-0cCnN]",
            "yesstr": "tha",
            "nostr": "chan eil"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u00a3",
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
            "int_curr_symbol": "GBP ",
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
                3
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%A %l",
            "int_select": "00",
            "int_prefix": "44"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %T %Z",
            "abday": [
                "DiD",
                "DiL",
                "DiM",
                "DiC",
                "Dia",
                "Dih",
                "DiS"
            ],
            "day": [
                "DiD\u00f2mhnaich",
                "DiLuain",
                "DiM\u00e0irt",
                "DiCiadain",
                "DiarDaoin",
                "DihAoine",
                "DiSathairne"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Faoi",
                "Gearr",
                "M\u00e0rt",
                "Gibl",
                "C\u00e8it",
                "\u00d2gmh",
                "Iuch",
                "L\u00f9na",
                "Sult",
                "D\u00e0mh",
                "Samh",
                "D\u00f9bh"
            ],
            "mon": [
                "dhen Fhaoilleach",
                "dhen Ghearran",
                "dhen Mh\u00e0rt",
                "dhen Ghiblean",
                "dhen Ch\u00e8itean",
                "dhen \u00d2gmhios",
                "dhen Iuchar",
                "dhen L\u00f9nastal",
                "dhen t-Sultain",
                "dhen D\u00e0mhair",
                "dhen t-Samhain",
                "dhen D\u00f9bhlachd"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
            "d_fmt": "%d\/\/%m\/\/%y",
            "t_fmt": "%r",
            "am_pm": [
                "m",
                "f"
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
                "Am Faoilleach",
                "An Gearran",
                "Am M\u00e0rt",
                "An Giblean",
                "An C\u00e8itean",
                "An t-\u00d2gmhios",
                "An t-Iuchar",
                "An L\u00f9nastal",
                "An t-Sultain",
                "An D\u00e0mhair",
                "An t-Samhain",
                "An D\u00f9bhlachd"
            ]
        }
    };
}));
