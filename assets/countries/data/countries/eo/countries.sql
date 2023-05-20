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
(20,"ad","and","Andoro"),
(784,"ae","are","Unuiĝintaj Arabaj Emirlandoj"),
(4,"af","afg","Afganio"),
(28,"ag","atg","Antigvo kaj Barbudo"),
(8,"al","alb","Albanio"),
(51,"am","arm","Armenio"),
(24,"ao","ago","Angolo"),
(32,"ar","arg","Argentino"),
(40,"at","aut","Aŭstrio"),
(36,"au","aus","Aŭstralio"),
(31,"az","aze","Azerbajĝano"),
(70,"ba","bih","Bosnio kaj Hercegovino"),
(52,"bb","brb","Barbado"),
(50,"bd","bgd","Bangladeŝo"),
(854,"bf","bfa","Burkino"),
(100,"bg","bgr","Bulgario"),
(48,"bh","bhr","Barejno"),
(108,"bi","bdi","Burundo"),
(204,"bj","ben","Benino"),
(96,"bn","brn","Brunejo"),
(68,"bo","bol","Bolivio"),
(76,"br","bra","Brazilo"),
(44,"bs","bhs","Bahamoj"),
(64,"bt","btn","Butano"),
(72,"bw","bwa","Bocvano"),
(112,"by","blr","Belorusio"),
(84,"bz","blz","Belizo"),
(124,"ca","can","Kanado"),
(180,"cd","cod","Demokratia Respubliko Kongo"),
(140,"cf","caf","Centr-Afrika Respubliko"),
(178,"cg","cog","Respubliko Kongo"),
(756,"ch","che","Svislando"),
(384,"ci","civ","Ebura Bordo"),
(152,"cl","chl","Ĉilio"),
(120,"cm","cmr","Kameruno"),
(156,"cn","chn","Ĉinio"),
(170,"co","col","Kolombio"),
(188,"cr","cri","Kostariko"),
(192,"cu","cub","Kubo"),
(132,"cv","cpv","Kaboverdo"),
(196,"cy","cyp","Kipro"),
(203,"cz","cze","Ĉeĥio"),
(276,"de","deu","Germanio"),
(262,"dj","dji","Ĝibutio"),
(208,"dk","dnk","Danio"),
(212,"dm","dma","Dominiko"),
(214,"do","dom","Dominika Respubliko"),
(12,"dz","dza","Alĝerio"),
(218,"ec","ecu","Ekvadoro"),
(233,"ee","est","Estonio"),
(818,"eg","egy","Egiptio"),
(232,"er","eri","Eritreo"),
(724,"es","esp","Hispanio"),
(231,"et","eth","Etiopio"),
(246,"fi","fin","Finnlando"),
(242,"fj","fji","Fiĝio"),
(583,"fm","fsm","Federacio de Mikronezio"),
(250,"fr","fra","Francio"),
(266,"ga","gab","Gabono"),
(826,"gb","gbr","Britio"),
(308,"gd","grd","Grenado"),
(268,"ge","geo","Kartvelio"),
(288,"gh","gha","Ganao"),
(270,"gm","gmb","Gambio"),
(324,"gn","gin","Gvineo"),
(226,"gq","gnq","Ekvatora Gvineo"),
(300,"gr","grc","Grekio"),
(320,"gt","gtm","Gvatemalo"),
(624,"gw","gnb","Gvineo Bisaŭa"),
(328,"gy","guy","Gujano"),
(340,"hn","hnd","Honduro"),
(191,"hr","hrv","Kroatio"),
(332,"ht","hti","Haitio"),
(348,"hu","hun","Hungario"),
(360,"id","idn","Indonezio"),
(372,"ie","irl","Irlando"),
(376,"il","isr","Israelo"),
(356,"in","ind","Barato"),
(368,"iq","irq","Irako"),
(364,"ir","irn","Irano"),
(352,"is","isl","Islando"),
(380,"it","ita","Italio"),
(388,"jm","jam","Jamajko"),
(400,"jo","jor","Jordanio"),
(392,"jp","jpn","Japanio"),
(404,"ke","ken","Kenjo"),
(417,"kg","kgz","Kirgizio"),
(116,"kh","khm","Kamboĝo"),
(296,"ki","kir","Kiribato"),
(174,"km","com","Komoroj"),
(659,"kn","kna","Sankta-Kito kaj Neviso"),
(408,"kp","prk","Nord-Koreio"),
(410,"kr","kor","Sud-Koreio"),
(414,"kw","kwt","Kuvajto"),
(398,"kz","kaz","Kazaĥio"),
(418,"la","lao","Laoso"),
(422,"lb","lbn","Libano"),
(662,"lc","lca","Sankta Lucio"),
(438,"li","lie","Liĥtenŝtejno"),
(144,"lk","lka","Srilanko"),
(430,"lr","lbr","Liberio"),
(426,"ls","lso","Lesoto"),
(440,"lt","ltu","Litovio"),
(442,"lu","lux","Luksemburgo"),
(428,"lv","lva","Latvio"),
(434,"ly","lby","Libio"),
(504,"ma","mar","Maroko"),
(492,"mc","mco","Monako"),
(498,"md","mda","Moldavio"),
(499,"me","mne","Montenegro"),
(450,"mg","mdg","Madagaskaro"),
(584,"mh","mhl","Marŝala Insularo"),
(807,"mk","mkd","Nord-Makedonio"),
(466,"ml","mli","Malio"),
(104,"mm","mmr","Birmo"),
(496,"mn","mng","Mongolio"),
(478,"mr","mrt","Maŭritanio"),
(470,"mt","mlt","Malto"),
(480,"mu","mus","Maŭricio"),
(462,"mv","mdv","Maldivoj"),
(454,"mw","mwi","Malavio"),
(484,"mx","mex","Meksiko"),
(458,"my","mys","Malajzio"),
(508,"mz","moz","Mozambiko"),
(516,"na","nam","Namibio"),
(562,"ne","ner","Niĝero"),
(566,"ng","nga","Niĝerio"),
(558,"ni","nic","Nikaragvo"),
(528,"nl","nld","Nederlando"),
(578,"no","nor","Norvegio"),
(524,"np","npl","Nepalo"),
(520,"nr","nru","Nauro"),
(554,"nz","nzl","Nov-Zelando"),
(512,"om","omn","Omano"),
(591,"pa","pan","Panamo"),
(604,"pe","per","Peruo"),
(598,"pg","png","Papuo-Nov-Gvineo"),
(608,"ph","phl","Filipinoj"),
(586,"pk","pak","Pakistano"),
(616,"pl","pol","Pollando"),
(620,"pt","prt","Portugalio"),
(585,"pw","plw","Palaŭo"),
(600,"py","pry","Paragvajo"),
(634,"qa","qat","Kataro"),
(642,"ro","rou","Rumanio"),
(688,"rs","srb","Serbio"),
(643,"ru","rus","Rusio"),
(646,"rw","rwa","Ruando"),
(682,"sa","sau","Sauda Arabio"),
(90,"sb","slb","Salomonoj"),
(690,"sc","syc","Sejŝeloj"),
(729,"sd","sdn","Sudano"),
(752,"se","swe","Svedio"),
(702,"sg","sgp","Singapuro"),
(705,"si","svn","Slovenio"),
(703,"sk","svk","Slovakio"),
(694,"sl","sle","Sieraleono"),
(674,"sm","smr","San-Marino"),
(686,"sn","sen","Senegalo"),
(706,"so","som","Somalio"),
(740,"sr","sur","Surinamo"),
(728,"ss","ssd","Sud-Sudano"),
(678,"st","stp","Santomeo kaj Principeo"),
(222,"sv","slv","Salvadoro"),
(760,"sy","syr","Sirio"),
(748,"sz","swz","Svazilando"),
(148,"td","tcd","Ĉado"),
(768,"tg","tgo","Togolando"),
(764,"th","tha","Tajlando"),
(762,"tj","tjk","Taĝikio"),
(626,"tl","tls","Orienta Timoro"),
(795,"tm","tkm","Turkmenio"),
(788,"tn","tun","Tunizio"),
(776,"to","ton","Tongo"),
(792,"tr","tur","Turkio"),
(780,"tt","tto","Trinidado kaj Tobago"),
(798,"tv","tuv","Tuvalo"),
(834,"tz","tza","Tanzanio"),
(804,"ua","ukr","Ukrainio"),
(800,"ug","uga","Ugando"),
(840,"us","usa","Usono"),
(858,"uy","ury","Urugvajo"),
(860,"uz","uzb","Uzbekio"),
(670,"vc","vct","Sankta Vincento kaj la Grenadinoj"),
(862,"ve","ven","Venezuelo"),
(704,"vn","vnm","Vjetnamio"),
(548,"vu","vut","Vanuatuo"),
(882,"ws","wsm","Samoo"),
(887,"ye","yem","Jemeno"),
(710,"za","zaf","Sud-Afriko"),
(894,"zm","zmb","Zambio"),
(716,"zw","zwe","Zimbabvo"),
(56,"be","bel","Belgio")