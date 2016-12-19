(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['ak_GH'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%h %s %e %r%N%T, %S %z%N%c%N",
            "country_name": "Gaana",
            "country_post": "GH",
            "country_ab2": "GH",
            "country_ab3": "GHA",
            "country_num": 288,
            "country_car": "GH",
            "country_isbn": 9964,
            "lang_name": "Akan",
            "lang_ab": "ak",
            "lang_term": "aka",
            "lang_lib": null
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY]",
            "noexpr": "^[-0dDnN]",
            "yesstr": "Yiw",
            "nostr": "Daabi"
        },
        "LC_MONETARY": {
            "currency_symbol": "GH\u20b5",
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
            "int_curr_symbol": "GHS ",
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
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "%a %l",
            "int_select": "00",
            "int_prefix": "233"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Kwe",
                "Dwo",
                "Ben",
                "Wuk",
                "Yaw",
                "Fia",
                "Mem"
            ],
            "day": [
                "Kwesida",
                "Dwowda",
                "Benada",
                "Wukuda",
                "Yawda",
                "Fida",
                "Memeneda"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                "S-\u0186",
                "K-\u0186",
                "E-\u0186",
                "E-O",
                "E-K",
                "O-A",
                "A-K",
                "D-\u0186",
                "F-\u0190",
                "\u0186-A",
                "\u0186-O",
                "M-\u0186"
            ],
            "mon": [
                "Sanda-\u0186p\u025bp\u0254n",
                "Kwakwar-\u0186gyefuo",
                "Eb\u0254w-\u0186benem",
                "Eb\u0254bira-Oforisuo",
                "Esusow Aketseaba-K\u0254t\u0254nimba",
                "Obirade-Ay\u025bwohomumu",
                "Ay\u025bwoho-Kitawonsa",
                "Difuu-\u0186sandaa",
                "Fankwa-\u0190b\u0254",
                "\u0186b\u025bs\u025b-Ahinime",
                "\u0186ber\u025bf\u025bw-Obubuo",
                "Mumu-\u0186p\u025bnimba"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%Y\/%m\/%d",
            "t_fmt": "%r",
            "am_pm": [
                "AN",
                "EW"
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
