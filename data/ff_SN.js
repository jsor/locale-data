(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ff_SN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T, %S %z%N%c%N",
            "country_name": "Senegaal",
            "country_post": "SN",
            "country_ab2": "SN",
            "country_ab3": "SEN",
            "country_num": 686,
            "country_car": "SN",
            "country_isbn": null,
            "lang_name": "Pulaar",
            "lang_ab": "ff",
            "lang_term": "ful",
            "lang_lib": "ful"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yYeE]",
            "noexpr": "^[-0nNaA]",
            "yesstr": "Eey",
            "nostr": "Alaa"
        },
        "LC_MONETARY": {
            "currency_symbol": "CFA",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "XOF ",
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
            "name_gen": "kaddol",
            "name_mr": "ceerno",
            "name_mrs": "sokna",
            "name_miss": "sokna",
            "name_ms": "sokna"
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": ".",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "%c %a %l",
            "tel_dom_fmt": "%a %l",
            "int_select": "00",
            "int_prefix": "221"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "dew",
                "aa\u0253",
                "maw",
                "nje",
                "naa",
                "mwd",
                "hbi"
            ],
            "day": [
                "dewo",
                "aa\u0253nde",
                "mawbaare",
                "njeslaare",
                "naasaande",
                "mawnde",
                "hoore-biir"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "sii",
                "col",
                "mbo",
                "see",
                "duu",
                "kor",
                "mor",
                "juk",
                "slt",
                "yar",
                "jol",
                "bow"
            ],
            "mon": [
                "siilo",
                "colte",
                "mbooy",
                "see\u0257to",
                "duujal",
                "korse",
                "morso",
                "juko",
                "siilto",
                "yarkomaa",
                "jolal",
                "bowte"
            ],
            "d_t_fmt": "%a %d %b %Y %R %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%R",
            "am_pm": [
                "subaka",
                "kikii\u0257e"
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
