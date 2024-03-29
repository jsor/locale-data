(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['br_FR'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Fra\u00f1s",
            "country_post": null,
            "country_ab2": "FR",
            "country_ab3": "FRA",
            "country_num": 250,
            "country_car": "F",
            "country_isbn": "979-10",
            "lang_name": "brezhoneg",
            "lang_ab": "br",
            "lang_term": "bre",
            "lang_lib": "bre"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1oOyY]",
            "noexpr": "^[-0kKnN]",
            "yesstr": "ya",
            "nostr": "ket"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u202f",
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
            "int_curr_symbol": "EUR ",
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
            "thousands_sep": "\u202f",
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
            "int_prefix": "33"
        },
        "LC_TIME": {
            "date_fmt": "D\u02bcar %A %d a viz %B %Y %T %Z",
            "abday": [
                "sul",
                "lun",
                "meu",
                "mer",
                "yao",
                "gwe",
                "sad"
            ],
            "day": [
                "sul",
                "lun",
                "meurzh",
                "merc\u02bcher",
                "yaou",
                "gwener",
                "sadorn"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "Gen ",
                "C\u02bchw",
                "Meu ",
                "Ebr ",
                "Mae ",
                "Mezh",
                "Gou ",
                "Eos ",
                "Gwe ",
                "Her ",
                "Du  ",
                "Ker "
            ],
            "mon": [
                "Genver",
                "C\u02bchwevrer",
                "Meurzh",
                "Ebrel",
                "Mae",
                "Mezheven",
                "Gouere",
                "Eost",
                "Gwengolo",
                "Here",
                "Du",
                "Kerzu"
            ],
            "d_t_fmt": "D\u02bcar %A %d a viz %B %Y %T",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%T",
            "am_pm": [
                " ",
                " "
            ],
            "t_fmt_ampm": "%Ie%M:%S %p",
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
