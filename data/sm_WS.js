(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sm_WS'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T, %S %z%N%c%N",
            "country_name": "Samoa",
            "country_post": "%a %N   %f %N   %d %N   %b %N   %h %s %e %r %N   %T, %c  %N",
            "country_ab2": "WS",
            "country_ab3": "WSM",
            "country_num": 882,
            "country_car": null,
            "country_isbn": null,
            "lang_name": "Gagana fa\u02bba S\u0101moa",
            "lang_ab": "sm",
            "lang_term": "smo",
            "lang_lib": "smo"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1iIyY]",
            "noexpr": "^[-0lLnN]",
            "yesstr": "ioe",
            "nostr": "leai"
        },
        "LC_MONETARY": {
            "currency_symbol": "WS$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "WST ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": 1,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": 1,
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
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": "0",
            "int_prefix": "685"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Aso Sa",
                "Aso Gaf",
                "Aso Lua",
                "Aso Lul",
                "Aso Tof",
                "Aso Far",
                "Aso To'"
            ],
            "day": [
                "Aso Sa",
                "Aso Gafua",
                "Aso Lua",
                "Aso Lulu",
                "Aso Tofi",
                "Aso Farail",
                "Aso To'ana'i"
            ],
            "week": null,
            "abmon": [
                "Ian",
                "Fep",
                "Mat",
                "Ape",
                "Me",
                "Iun",
                "Iul",
                "Aug",
                "Set",
                "Oke",
                "Nov",
                "Tes"
            ],
            "mon": [
                "Ianuari",
                "Fepuari",
                "Mati",
                "Aperila",
                "Me",
                "Iuni",
                "Iulai",
                "Auguso",
                "Setema",
                "Oketopa",
                "Novema",
                "Tesema"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
