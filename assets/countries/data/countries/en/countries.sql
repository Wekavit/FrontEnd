SET NAMES utf8;

DROP TABLE IF EXISTS `countries`;

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `alpha_2` char(2) NOT NULL DEFAULT "",
  `alpha_3` char(3) NOT NULL DEFAULT "",
  `name` varchar(75) NOT NULL DEFAULT "",
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `countries` (`id`, `alpha_2`, `alpha_3`, `name`) VALUES
(4,"af","afg","Afghanistan"),
(8,"al","alb","Albania"),
(12,"dz","dza","Algeria"),
(20,"ad","and","Andorra"),
(24,"ao","ago","Angola"),
(28,"ag","atg","Antigua and Barbuda"),
(32,"ar","arg","Argentina"),
(51,"am","arm","Armenia"),
(36,"au","aus","Australia"),
(40,"at","aut","Austria"),
(31,"az","aze","Azerbaijan"),
(44,"bs","bhs","Bahamas"),
(48,"bh","bhr","Bahrain"),
(50,"bd","bgd","Bangladesh"),
(52,"bb","brb","Barbados"),
(112,"by","blr","Belarus"),
(56,"be","bel","Belgium"),
(84,"bz","blz","Belize"),
(204,"bj","ben","Benin"),
(64,"bt","btn","Bhutan"),
(68,"bo","bol","Bolivia (Plurinational State of)"),
(70,"ba","bih","Bosnia and Herzegovina"),
(72,"bw","bwa","Botswana"),
(76,"br","bra","Brazil"),
(96,"bn","brn","Brunei Darussalam"),
(100,"bg","bgr","Bulgaria"),
(854,"bf","bfa","Burkina Faso"),
(108,"bi","bdi","Burundi"),
(132,"cv","cpv","Cabo Verde"),
(116,"kh","khm","Cambodia"),
(120,"cm","cmr","Cameroon"),
(124,"ca","can","Canada"),
(140,"cf","caf","Central African Republic"),
(148,"td","tcd","Chad"),
(152,"cl","chl","Chile"),
(156,"cn","chn","China"),
(170,"co","col","Colombia"),
(174,"km","com","Comoros"),
(178,"cg","cog","Congo"),
(180,"cd","cod","Congo, Democratic Republic of the"),
(188,"cr","cri","Costa Rica"),
(384,"ci","civ","Côte d'Ivoire"),
(191,"hr","hrv","Croatia"),
(192,"cu","cub","Cuba"),
(196,"cy","cyp","Cyprus"),
(203,"cz","cze","Czechia"),
(208,"dk","dnk","Denmark"),
(262,"dj","dji","Djibouti"),
(212,"dm","dma","Dominica"),
(214,"do","dom","Dominican Republic"),
(218,"ec","ecu","Ecuador"),
(818,"eg","egy","Egypt"),
(222,"sv","slv","El Salvador"),
(226,"gq","gnq","Equatorial Guinea"),
(232,"er","eri","Eritrea"),
(233,"ee","est","Estonia"),
(748,"sz","swz","Eswatini"),
(231,"et","eth","Ethiopia"),
(242,"fj","fji","Fiji"),
(246,"fi","fin","Finland"),
(250,"fr","fra","France"),
(266,"ga","gab","Gabon"),
(270,"gm","gmb","Gambia"),
(268,"ge","geo","Georgia"),
(276,"de","deu","Germany"),
(288,"gh","gha","Ghana"),
(300,"gr","grc","Greece"),
(308,"gd","grd","Grenada"),
(320,"gt","gtm","Guatemala"),
(324,"gn","gin","Guinea"),
(624,"gw","gnb","Guinea-Bissau"),
(328,"gy","guy","Guyana"),
(332,"ht","hti","Haiti"),
(340,"hn","hnd","Honduras"),
(348,"hu","hun","Hungary"),
(352,"is","isl","Iceland"),
(356,"in","ind","India"),
(360,"id","idn","Indonesia"),
(364,"ir","irn","Iran (Islamic Republic of)"),
(368,"iq","irq","Iraq"),
(372,"ie","irl","Ireland"),
(376,"il","isr","Israel"),
(380,"it","ita","Italy"),
(388,"jm","jam","Jamaica"),
(392,"jp","jpn","Japan"),
(400,"jo","jor","Jordan"),
(398,"kz","kaz","Kazakhstan"),
(404,"ke","ken","Kenya"),
(296,"ki","kir","Kiribati"),
(408,"kp","prk","Korea (Democratic People's Republic of)"),
(410,"kr","kor","Korea, Republic of"),
(414,"kw","kwt","Kuwait"),
(417,"kg","kgz","Kyrgyzstan"),
(418,"la","lao","Lao People's Democratic Republic"),
(428,"lv","lva","Latvia"),
(422,"lb","lbn","Lebanon"),
(426,"ls","lso","Lesotho"),
(430,"lr","lbr","Liberia"),
(434,"ly","lby","Libya"),
(438,"li","lie","Liechtenstein"),
(440,"lt","ltu","Lithuania"),
(442,"lu","lux","Luxembourg"),
(450,"mg","mdg","Madagascar"),
(454,"mw","mwi","Malawi"),
(458,"my","mys","Malaysia"),
(462,"mv","mdv","Maldives"),
(466,"ml","mli","Mali"),
(470,"mt","mlt","Malta"),
(584,"mh","mhl","Marshall Islands"),
(478,"mr","mrt","Mauritania"),
(480,"mu","mus","Mauritius"),
(484,"mx","mex","Mexico"),
(583,"fm","fsm","Micronesia (Federated States of)"),
(498,"md","mda","Moldova, Republic of"),
(492,"mc","mco","Monaco"),
(496,"mn","mng","Mongolia"),
(499,"me","mne","Montenegro"),
(504,"ma","mar","Morocco"),
(508,"mz","moz","Mozambique"),
(104,"mm","mmr","Myanmar"),
(516,"na","nam","Namibia"),
(520,"nr","nru","Nauru"),
(524,"np","npl","Nepal"),
(528,"nl","nld","Netherlands"),
(554,"nz","nzl","New Zealand"),
(558,"ni","nic","Nicaragua"),
(562,"ne","ner","Niger"),
(566,"ng","nga","Nigeria"),
(807,"mk","mkd","North Macedonia"),
(578,"no","nor","Norway"),
(512,"om","omn","Oman"),
(586,"pk","pak","Pakistan"),
(585,"pw","plw","Palau"),
(591,"pa","pan","Panama"),
(598,"pg","png","Papua New Guinea"),
(600,"py","pry","Paraguay"),
(604,"pe","per","Peru"),
(608,"ph","phl","Philippines"),
(616,"pl","pol","Poland"),
(620,"pt","prt","Portugal"),
(634,"qa","qat","Qatar"),
(642,"ro","rou","Romania"),
(643,"ru","rus","Russian Federation"),
(646,"rw","rwa","Rwanda"),
(659,"kn","kna","Saint Kitts and Nevis"),
(662,"lc","lca","Saint Lucia"),
(670,"vc","vct","Saint Vincent and the Grenadines"),
(882,"ws","wsm","Samoa"),
(674,"sm","smr","San Marino"),
(678,"st","stp","Sao Tome and Principe"),
(682,"sa","sau","Saudi Arabia"),
(686,"sn","sen","Senegal"),
(688,"rs","srb","Serbia"),
(690,"sc","syc","Seychelles"),
(694,"sl","sle","Sierra Leone"),
(702,"sg","sgp","Singapore"),
(703,"sk","svk","Slovakia"),
(705,"si","svn","Slovenia"),
(90,"sb","slb","Solomon Islands"),
(706,"so","som","Somalia"),
(710,"za","zaf","South Africa"),
(728,"ss","ssd","South Sudan"),
(724,"es","esp","Spain"),
(144,"lk","lka","Sri Lanka"),
(729,"sd","sdn","Sudan"),
(740,"sr","sur","Suriname"),
(752,"se","swe","Sweden"),
(756,"ch","che","Switzerland"),
(760,"sy","syr","Syrian Arab Republic"),
(762,"tj","tjk","Tajikistan"),
(834,"tz","tza","Tanzania, United Republic of"),
(764,"th","tha","Thailand"),
(626,"tl","tls","Timor-Leste"),
(768,"tg","tgo","Togo"),
(776,"to","ton","Tonga"),
(780,"tt","tto","Trinidad and Tobago"),
(788,"tn","tun","Tunisia"),
(792,"tr","tur","Türkiye"),
(795,"tm","tkm","Turkmenistan"),
(798,"tv","tuv","Tuvalu"),
(800,"ug","uga","Uganda"),
(804,"ua","ukr","Ukraine"),
(784,"ae","are","United Arab Emirates"),
(826,"gb","gbr","United Kingdom of Great Britain and Northern Ireland"),
(840,"us","usa","United States of America"),
(858,"uy","ury","Uruguay"),
(860,"uz","uzb","Uzbekistan"),
(548,"vu","vut","Vanuatu"),
(862,"ve","ven","Venezuela (Bolivarian Republic of)"),
(704,"vn","vnm","Viet Nam"),
(887,"ye","yem","Yemen"),
(894,"zm","zmb","Zambia"),
(716,"zw","zwe","Zimbabwe")