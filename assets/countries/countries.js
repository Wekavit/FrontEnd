const countries = [
  { id: 4, alpha2: "af", alpha3: "afg", name: "Afghanistan" },
  { id: 710, alpha2: "za", alpha3: "zaf", name: "Afrique du Sud" },
  { id: 8, alpha2: "al", alpha3: "alb", name: "Albanie" },
  { id: 12, alpha2: "dz", alpha3: "dza", name: "Algérie" },
  { id: 276, alpha2: "de", alpha3: "deu", name: "Allemagne" },
  { id: 20, alpha2: "ad", alpha3: "and", name: "Andorre" },
  { id: 24, alpha2: "ao", alpha3: "ago", name: "Angola" },
  { id: 28, alpha2: "ag", alpha3: "atg", name: "Antigua-et-Barbuda" },
  { id: 682, alpha2: "sa", alpha3: "sau", name: "Arabie saoudite" },
  { id: 32, alpha2: "ar", alpha3: "arg", name: "Argentine" },
  { id: 51, alpha2: "am", alpha3: "arm", name: "Arménie" },
  { id: 36, alpha2: "au", alpha3: "aus", name: "Australie" },
  { id: 40, alpha2: "at", alpha3: "aut", name: "Autriche" },
  { id: 31, alpha2: "az", alpha3: "aze", name: "Azerbaïdjan" },
  { id: 44, alpha2: "bs", alpha3: "bhs", name: "Bahamas" },
  { id: 48, alpha2: "bh", alpha3: "bhr", name: "Bahreïn" },
  { id: 50, alpha2: "bd", alpha3: "bgd", name: "Bangladesh" },
  { id: 52, alpha2: "bb", alpha3: "brb", name: "Barbade" },
  { id: 112, alpha2: "by", alpha3: "blr", name: "Biélorussie" },
  { id: 56, alpha2: "be", alpha3: "bel", name: "Belgique" },
  { id: 84, alpha2: "bz", alpha3: "blz", name: "Belize" },
  { id: 204, alpha2: "bj", alpha3: "ben", name: "Bénin" },
  { id: 64, alpha2: "bt", alpha3: "btn", name: "Bhoutan" },
  { id: 68, alpha2: "bo", alpha3: "bol", name: "Bolivie" },
  { id: 70, alpha2: "ba", alpha3: "bih", name: "Bosnie-Herzégovine" },
  { id: 72, alpha2: "bw", alpha3: "bwa", name: "Botswana" },
  { id: 76, alpha2: "br", alpha3: "bra", name: "Brésil" },
  { id: 96, alpha2: "bn", alpha3: "brn", name: "Brunei" },
  { id: 100, alpha2: "bg", alpha3: "bgr", name: "Bulgarie" },
  { id: 854, alpha2: "bf", alpha3: "bfa", name: "Burkina Faso" },
  { id: 108, alpha2: "bi", alpha3: "bdi", name: "Burundi" },
  { id: 116, alpha2: "kh", alpha3: "khm", name: "Cambodge" },
  { id: 120, alpha2: "cm", alpha3: "cmr", name: "Cameroun" },
  { id: 124, alpha2: "ca", alpha3: "can", name: "Canada" },
  { id: 132, alpha2: "cv", alpha3: "cpv", name: "Cap-Vert" },
  {
    id: 140,
    alpha2: "cf",
    alpha3: "caf",
    name: "République centrafricaine",
  },
  { id: 152, alpha2: "cl", alpha3: "chl", name: "Chili" },
  { id: 156, alpha2: "cn", alpha3: "chn", name: "Chine" },
  { id: 196, alpha2: "cy", alpha3: "cyp", name: "Chypre" },
  { id: 170, alpha2: "co", alpha3: "col", name: "Colombie" },
  { id: 174, alpha2: "km", alpha3: "com", name: "Comores" },
  { id: 178, alpha2: "cg", alpha3: "cog", name: "République du Congo" },
  {
    id: 180,
    alpha2: "cd",
    alpha3: "cod",
    name: "République démocratique du Congo",
  },
  { id: 410, alpha2: "kr", alpha3: "kor", name: "Corée du Sud" },
  { id: 408, alpha2: "kp", alpha3: "prk", name: "Corée du Nord" },
  { id: 188, alpha2: "cr", alpha3: "cri", name: "Costa Rica" },
  { id: 384, alpha2: "ci", alpha3: "civ", name: "Côte d'Ivoire" },
  { id: 191, alpha2: "hr", alpha3: "hrv", name: "Croatie" },
  { id: 192, alpha2: "cu", alpha3: "cub", name: "Cuba" },
  { id: 208, alpha2: "dk", alpha3: "dnk", name: "Danemark" },
  { id: 262, alpha2: "dj", alpha3: "dji", name: "Djibouti" },
  {
    id: 214,
    alpha2: "do",
    alpha3: "dom",
    name: "République dominicaine",
  },
  { id: 212, alpha2: "dm", alpha3: "dma", name: "Dominique" },
  { id: 818, alpha2: "eg", alpha3: "egy", name: "Égypte" },
  { id: 222, alpha2: "sv", alpha3: "slv", name: "Salvador" },
  { id: 784, alpha2: "ae", alpha3: "are", name: "Émirats arabes unis" },
  { id: 218, alpha2: "ec", alpha3: "ecu", name: "Équateur" },
  { id: 232, alpha2: "er", alpha3: "eri", name: "Érythrée" },
  { id: 724, alpha2: "es", alpha3: "esp", name: "Espagne" },
  { id: 233, alpha2: "ee", alpha3: "est", name: "Estonie" },
  { id: 840, alpha2: "us", alpha3: "usa", name: "États-Unis" },
  { id: 231, alpha2: "et", alpha3: "eth", name: "Éthiopie" },
  { id: 242, alpha2: "fj", alpha3: "fji", name: "Fidji" },
  { id: 246, alpha2: "fi", alpha3: "fin", name: "Finlande" },
  { id: 250, alpha2: "fr", alpha3: "fra", name: "France" },
  { id: 266, alpha2: "ga", alpha3: "gab", name: "Gabon" },
  { id: 270, alpha2: "gm", alpha3: "gmb", name: "Gambie" },
  { id: 268, alpha2: "ge", alpha3: "geo", name: "Géorgie" },
  { id: 288, alpha2: "gh", alpha3: "gha", name: "Ghana" },
  { id: 300, alpha2: "gr", alpha3: "grc", name: "Grèce" },
  { id: 308, alpha2: "gd", alpha3: "grd", name: "Grenade" },
  { id: 320, alpha2: "gt", alpha3: "gtm", name: "Guatemala" },
  { id: 324, alpha2: "gn", alpha3: "gin", name: "Guinée" },
  { id: 624, alpha2: "gw", alpha3: "gnb", name: "Guinée-Bissau" },
  { id: 226, alpha2: "gq", alpha3: "gnq", name: "Guinée équatoriale" },
  { id: 328, alpha2: "gy", alpha3: "guy", name: "Guyana" },
  { id: 332, alpha2: "ht", alpha3: "hti", name: "Haïti" },
  { id: 340, alpha2: "hn", alpha3: "hnd", name: "Honduras" },
  { id: 348, alpha2: "hu", alpha3: "hun", name: "Hongrie" },
  { id: 356, alpha2: "in", alpha3: "ind", name: "Inde" },
  { id: 360, alpha2: "id", alpha3: "idn", name: "Indonésie" },
  { id: 364, alpha2: "ir", alpha3: "irn", name: "Iran" },
  { id: 368, alpha2: "iq", alpha3: "irq", name: "Irak" },
  { id: 372, alpha2: "ie", alpha3: "irl", name: "Irlande" },
  { id: 352, alpha2: "is", alpha3: "isl", name: "Islande" },
  { id: 376, alpha2: "il", alpha3: "isr", name: "Israël" },
  { id: 380, alpha2: "it", alpha3: "ita", name: "Italie" },
  { id: 388, alpha2: "jm", alpha3: "jam", name: "Jamaïque" },
  { id: 392, alpha2: "jp", alpha3: "jpn", name: "Japon" },
  { id: 400, alpha2: "jo", alpha3: "jor", name: "Jordanie" },
  { id: 398, alpha2: "kz", alpha3: "kaz", name: "Kazakhstan" },
  { id: 404, alpha2: "ke", alpha3: "ken", name: "Kenya" },
  { id: 417, alpha2: "kg", alpha3: "kgz", name: "Kirghizistan" },
  { id: 296, alpha2: "ki", alpha3: "kir", name: "Kiribati" },
  { id: 414, alpha2: "kw", alpha3: "kwt", name: "Koweït" },
  { id: 418, alpha2: "la", alpha3: "lao", name: "Laos" },
  { id: 426, alpha2: "ls", alpha3: "lso", name: "Lesotho" },
  { id: 428, alpha2: "lv", alpha3: "lva", name: "Lettonie" },
  { id: 422, alpha2: "lb", alpha3: "lbn", name: "Liban" },
  { id: 430, alpha2: "lr", alpha3: "lbr", name: "Liberia" },
  { id: 434, alpha2: "ly", alpha3: "lby", name: "Libye" },
  { id: 438, alpha2: "li", alpha3: "lie", name: "Liechtenstein" },
  { id: 440, alpha2: "lt", alpha3: "ltu", name: "Lituanie" },
  { id: 442, alpha2: "lu", alpha3: "lux", name: "Luxembourg" },
  { id: 807, alpha2: "mk", alpha3: "mkd", name: "Macédoine du Nord" },
  { id: 450, alpha2: "mg", alpha3: "mdg", name: "Madagascar" },
  { id: 458, alpha2: "my", alpha3: "mys", name: "Malaisie" },
  { id: 454, alpha2: "mw", alpha3: "mwi", name: "Malawi" },
  { id: 462, alpha2: "mv", alpha3: "mdv", name: "Maldives" },
  { id: 466, alpha2: "ml", alpha3: "mli", name: "Mali" },
  { id: 470, alpha2: "mt", alpha3: "mlt", name: "Malte" },
  { id: 504, alpha2: "ma", alpha3: "mar", name: "Maroc" },
  { id: 584, alpha2: "mh", alpha3: "mhl", name: "Îles Marshall" },
  { id: 480, alpha2: "mu", alpha3: "mus", name: "Maurice" },
  { id: 478, alpha2: "mr", alpha3: "mrt", name: "Mauritanie" },
  { id: 484, alpha2: "mx", alpha3: "mex", name: "Mexique" },
  {
    id: 583,
    alpha2: "fm",
    alpha3: "fsm",
    name: "États fédérés de Micronésie",
  },
  { id: 498, alpha2: "md", alpha3: "mda", name: "Moldavie" },
  { id: 492, alpha2: "mc", alpha3: "mco", name: "Monaco" },
  { id: 496, alpha2: "mn", alpha3: "mng", name: "Mongolie" },
  { id: 499, alpha2: "me", alpha3: "mne", name: "Monténégro" },
  { id: 508, alpha2: "mz", alpha3: "moz", name: "Mozambique" },
  { id: 104, alpha2: "mm", alpha3: "mmr", name: "Birmanie" },
  { id: 516, alpha2: "na", alpha3: "nam", name: "Namibie" },
  { id: 520, alpha2: "nr", alpha3: "nru", name: "Nauru" },
  { id: 524, alpha2: "np", alpha3: "npl", name: "Népal" },
  { id: 558, alpha2: "ni", alpha3: "nic", name: "Nicaragua" },
  { id: 562, alpha2: "ne", alpha3: "ner", name: "Niger" },
  { id: 566, alpha2: "ng", alpha3: "nga", name: "Nigeria" },
  { id: 578, alpha2: "no", alpha3: "nor", name: "Norvège" },
  { id: 554, alpha2: "nz", alpha3: "nzl", name: "Nouvelle-Zélande" },
  { id: 512, alpha2: "om", alpha3: "omn", name: "Oman" },
  { id: 800, alpha2: "ug", alpha3: "uga", name: "Ouganda" },
  { id: 860, alpha2: "uz", alpha3: "uzb", name: "Ouzbékistan" },
  { id: 586, alpha2: "pk", alpha3: "pak", name: "Pakistan" },
  { id: 585, alpha2: "pw", alpha3: "plw", name: "Palaos" },
  { id: 591, alpha2: "pa", alpha3: "pan", name: "Panama" },
  {
    id: 598,
    alpha2: "pg",
    alpha3: "png",
    name: "Papouasie-Nouvelle-Guinée",
  },
  { id: 600, alpha2: "py", alpha3: "pry", name: "Paraguay" },
  { id: 528, alpha2: "nl", alpha3: "nld", name: "Pays-Bas" },
  { id: 604, alpha2: "pe", alpha3: "per", name: "Pérou" },
  { id: 608, alpha2: "ph", alpha3: "phl", name: "Philippines" },
  { id: 616, alpha2: "pl", alpha3: "pol", name: "Pologne" },
  { id: 620, alpha2: "pt", alpha3: "prt", name: "Portugal" },
  { id: 634, alpha2: "qa", alpha3: "qat", name: "Qatar" },
  { id: 642, alpha2: "ro", alpha3: "rou", name: "Roumanie" },
  { id: 826, alpha2: "gb", alpha3: "gbr", name: "Royaume-Uni" },
  { id: 643, alpha2: "ru", alpha3: "rus", name: "Russie" },
  { id: 646, alpha2: "rw", alpha3: "rwa", name: "Rwanda" },
  {
    id: 659,
    alpha2: "kn",
    alpha3: "kna",
    name: "Saint-Christophe-et-Niévès",
  },
  { id: 674, alpha2: "sm", alpha3: "smr", name: "Saint-Marin" },
  {
    id: 670,
    alpha2: "vc",
    alpha3: "vct",
    name: "Saint-Vincent-et-les-Grenadines",
  },
  { id: 662, alpha2: "lc", alpha3: "lca", name: "Sainte-Lucie" },
  { id: 90, alpha2: "sb", alpha3: "slb", name: "Îles Salomon" },
  { id: 882, alpha2: "ws", alpha3: "wsm", name: "Samoa" },
  {
    id: 678,
    alpha2: "st",
    alpha3: "stp",
    name: "Sao Tomé-et-Principe",
  },
  { id: 686, alpha2: "sn", alpha3: "sen", name: "Sénégal" },
  { id: 688, alpha2: "rs", alpha3: "srb", name: "Serbie" },
  { id: 690, alpha2: "sc", alpha3: "syc", name: "Seychelles" },
  { id: 694, alpha2: "sl", alpha3: "sle", name: "Sierra Leone" },
  { id: 702, alpha2: "sg", alpha3: "sgp", name: "Singapour" },
  { id: 703, alpha2: "sk", alpha3: "svk", name: "Slovaquie" },
  { id: 705, alpha2: "si", alpha3: "svn", name: "Slovénie" },
  { id: 706, alpha2: "so", alpha3: "som", name: "Somalie" },
  { id: 729, alpha2: "sd", alpha3: "sdn", name: "Soudan" },
  { id: 728, alpha2: "ss", alpha3: "ssd", name: "Soudan du Sud" },
  { id: 144, alpha2: "lk", alpha3: "lka", name: "Sri Lanka" },
  { id: 752, alpha2: "se", alpha3: "swe", name: "Suède" },
  { id: 756, alpha2: "ch", alpha3: "che", name: "Suisse" },
  { id: 740, alpha2: "sr", alpha3: "sur", name: "Suriname" },
  { id: 748, alpha2: "sz", alpha3: "swz", name: "Eswatini" },
  { id: 760, alpha2: "sy", alpha3: "syr", name: "Syrie" },
  { id: 762, alpha2: "tj", alpha3: "tjk", name: "Tadjikistan" },
  { id: 834, alpha2: "tz", alpha3: "tza", name: "Tanzanie" },
  { id: 148, alpha2: "td", alpha3: "tcd", name: "Tchad" },
  { id: 203, alpha2: "cz", alpha3: "cze", name: "Tchéquie" },
  { id: 764, alpha2: "th", alpha3: "tha", name: "Thaïlande" },
  { id: 626, alpha2: "tl", alpha3: "tls", name: "Timor oriental" },
  { id: 768, alpha2: "tg", alpha3: "tgo", name: "Togo" },
  { id: 776, alpha2: "to", alpha3: "ton", name: "Tonga" },
  { id: 780, alpha2: "tt", alpha3: "tto", name: "Trinité-et-Tobago" },
  { id: 788, alpha2: "tn", alpha3: "tun", name: "Tunisie" },
  { id: 795, alpha2: "tm", alpha3: "tkm", name: "Turkménistan" },
  { id: 792, alpha2: "tr", alpha3: "tur", name: "Turquie" },
  { id: 798, alpha2: "tv", alpha3: "tuv", name: "Tuvalu" },
  { id: 804, alpha2: "ua", alpha3: "ukr", name: "Ukraine" },
  { id: 858, alpha2: "uy", alpha3: "ury", name: "Uruguay" },
  { id: 548, alpha2: "vu", alpha3: "vut", name: "Vanuatu" },
  { id: 862, alpha2: "ve", alpha3: "ven", name: "Venezuela" },
  { id: 704, alpha2: "vn", alpha3: "vnm", name: "Viêt Nam" },
  { id: 887, alpha2: "ye", alpha3: "yem", name: "Yémen" },
  { id: 894, alpha2: "zm", alpha3: "zmb", name: "Zambie" },
  { id: 716, alpha2: "zw", alpha3: "zwe", name: "Zimbabwe" },
];

export default countries;
