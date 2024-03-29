(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['shs_CA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "CA",
            "country_ab3": "CAN",
            "country_num": 124,
            "country_car": "CDN",
            "country_isbn": null,
            "lang_name": "Secwepemcts\u00edn",
            "lang_ab": null,
            "lang_term": "shs",
            "lang_lib": "shs"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYoO]",
            "noexpr": "^[-0nN]",
            "yesstr": "yes",
            "nostr": "no"
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
            "int_curr_symbol": "CAD ",
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
            "height": 279,
            "width": 216
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "011",
            "int_prefix": "1"
        },
        "LC_TIME": {
            "date_fmt": "%a %d %b %Y %r %Z",
            "abday": [
                "Sxe",
                "Spe",
                "Sel",
                "Ske",
                "Sme",
                "Sts",
                "Stq"
            ],
            "day": [
                "Sxetspesq\u0313t",
                "Spetkesq\u0313t",
                "Selesq\u0313t",
                "Skellesq\u0313t",
                "Smesesq\u0313t",
                "Stselkstesq\u0313t",
                "Stqmekstesq\u0313t"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Kwe",
                "Tsi",
                "Sqe",
                "\u00c9wt",
                "Ell",
                "Tsp",
                "Tqw",
                "Ct\u0313\u00e9",
                "Qel",
                "W\u00e9l",
                "U7l",
                "Tet"
            ],
            "mon": [
                "Pellkwet\u0313min",
                "Pelctsipwen\u0313ten",
                "Pellsq\u00e9pts",
                "Pesll\u00e9wten",
                "Pell7ell7\u00e97llqten",
                "Pelltsp\u00e9ntsk",
                "Pelltqwelq\u0313w\u00e9l\u0313t",
                "Pellct\u0313\u00e9xel\u0313cten",
                "Pesqelql\u00e9lten",
                "Pesllw\u00e9lsten",
                "Pellc7ell7\u00e97llcwten\u0313",
                "Pelltet\u00e9tq\u0313em"
            ],
            "d_t_fmt": "%a %d %b %Y %r",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
