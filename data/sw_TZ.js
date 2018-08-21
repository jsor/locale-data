(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sw_TZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T, %S %z%N%c%N",
            "country_name": "Tanzania",
            "country_post": "TZ",
            "country_ab2": "TZ",
            "country_ab3": "TZA",
            "country_num": 834,
            "country_car": "EAT",
            "country_isbn": null,
            "lang_name": "Kiswahili",
            "lang_ab": "sw",
            "lang_term": "swa",
            "lang_lib": "swa"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1nNyY]",
            "noexpr": "^[-0hHlL]",
            "yesstr": "Ndiyo",
            "nostr": "Hapana"
        },
        "LC_MONETARY": {
            "currency_symbol": "TSh",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "TZS ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%g%m%t%f",
            "name_gen": null,
            "name_mr": "Bw.",
            "name_mrs": null,
            "name_miss": null,
            "name_ms": "Bi."
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
            "tel_int_fmt": "%c %a %l",
            "tel_dom_fmt": "%A %l",
            "int_select": "000",
            "int_prefix": "255"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "J2",
                "J3",
                "J4",
                "J5",
                "Alh",
                "Ij",
                "J1"
            ],
            "day": [
                "Jumapili",
                "Jumatatu",
                "Jumanne",
                "Jumatano",
                "Alhamisi",
                "Ijumaa",
                "Jumamosi"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "Jan",
                "Feb",
                "Mac",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Okt",
                "Nov",
                "Des"
            ],
            "mon": [
                "Januari",
                "Februari",
                "Machi",
                "Aprili",
                "Mei",
                "Juni",
                "Julai",
                "Agosti",
                "Septemba",
                "Oktoba",
                "Novemba",
                "Desemba"
            ],
            "d_t_fmt": "%e %B %Y %I:%M:%S %p %Z",
            "d_fmt": "%d\/\/%m\/\/%Y",
            "t_fmt": "%I:%M:%S %p",
            "am_pm": [
                "asubuhi",
                "alasiri"
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
