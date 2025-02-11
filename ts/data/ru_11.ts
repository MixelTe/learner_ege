import { DBc } from "../docBuilder.js";
import { TestItem } from "../tester.js";
import { TestItemSelfCheck } from "../testerItems.js";

export const data: TestItem[] = [
	new TestItemSelfCheck(0, DBc("ОВА,ЕВА / ЫВА,ИВА"), DBc("Если в 1 л. ед ч. настоящего или будущего простого времени глагол оканчивается на")
		.ul("ую/юю, то -ова-, -ева-", "ываю/иваю, то -ыва-, -ива-")
		.ul("заведовать - заведую, исповедовать - исповедую", "откладывать - откладываю, рассматривать - рассматриваю")
	),
	new TestItemSelfCheck(1, DBc("ИВА / ЕВА"), DBc("Глаголы, оканчивающиеся на ударяемые -вАть, -вАю, имеют перед суффиксом -ва- ту же гласную, что и в неопределенной форме без этого суффикса").br().text("заливать - залить", "преодолевать - преодолеть").br().text("Исключение: Застрять - застревать")),
	new TestItemSelfCheck(2, DBc("ЧИВ, ЛИВ"), DBc("Всегда пишется И", "заботливый, заносчивый")),
	new TestItemSelfCheck(3, DBc("ИВ, ЕВ"), DBc("Под ударением ИВ (красивый, правдивый)", "Без ударения ЕВ (боевой, сиреневый)", "Искл. милостивый, юродивый")),
	new TestItemSelfCheck(4, DBc("ОВ, ОВАТ, ОВИТ / ЕВ, ЕВАТ, ЕВИТ"), DBc("После твердых согласных: ОВ, ОВАТ, ОВИТ", "После мягких согласных и ц: ЕВ, ЕВАТ, ЕВИТ").br().text("Деловой, красноватый, деловитый", "Вечевой, сиреневатый, глянцевитый")),
	new TestItemSelfCheck(5, DBc("ИСТ, ЕСК, ЧЕСК"), DBc("Единообразное написание", "ИСТ, ЕСК, ЧЕСК")),
	new TestItemSelfCheck(6, DBc("ЧАТ"), DBc("Всегда пишется а", "Створчатый, ступенчатый, решетчатый").br().text("Запомнить: дощатый (от слова доска при помощи суффикса -ат-)")),
	new TestItemSelfCheck(7, DBc("ЕНЬК, ОНЬК"), DBc("ЕНЬК, ОНЬК", "Суффиксы не изменяются, не бывает -иньк-, -аньк-", "сухонький, черненький")),
	new TestItemSelfCheck(8, DBc("ЕНСК, ИНСК"), DBc("ИНСК в прилагательных, образованных от основ, заканчивающихся на ин, и(ы), а(я).", "Мытищинский, Екатерининский", "ЕНСК - в остальных случаях", "Нищенский").br().text("Искл.: пензенский, коломенский, пресненский")),
	new TestItemSelfCheck(9, DBc("К / СК"), DBc("К - если прилагательное образовано от существительного с основой на к, ц, ч или имеет краткую форму", "Немецкий, резкий - резок, мерзкий - мерзок, ткацкий").br().text("В остальных случаях СК", "Французский, богатырский")),
	new TestItemSelfCheck(10, DBc("ИК/ЕК"), DBc("И - если при изменении по падежам И сохраняется", "Е - если И не сохраняется").br().text("КлючИк - ключИка", "ЗамочЕк - замоЧКа")),
	new TestItemSelfCheck(11, DBc("ИНК/ЕНК"), DBc("ИНК - в существительных, образованных от слов, оканчивающихся на -ина(а)", "Горошинка-горошина, завалинка – завалина").br().text("ЕНК - в остальных существительных", "Вишенка, песенка")),
	new TestItemSelfCheck(12, DBc("ИЗН, ИН, ИНСТВ, ЕСТВ"), DBc("Единообразное написание", "ИЗН, ИН, ИНСТВ, ЕСТВ", "Белизна, желтизна, тишина, большинство, вышина, человечество, творчество, студенчество")),
	new TestItemSelfCheck(19, DBc("ЕНСТВ / ИНСТВ"), DBc("ИНСТВ - если ударение на окончание", "большИнство, меньшИнство, старшИнство").br().text("ЕНСТВ - если ударение на корень", "пЕрвенство, нИщенство")),
	new TestItemSelfCheck(13, DBc("ИЦ / ЕЦ"), DBc("ИЦ - в сущ. женского рода (владелица) и в сущ. среднего рода если ударение до суффикса (плАтьице, крЕслице)").br().text("ЕЦ - в сущ. мужского рода (владелец) и в сущ. среднего рода, если ударение падает на слог после суффикса (зданьецО, письмецО)")),
	new TestItemSelfCheck(14, DBc("ИЧК / ЕЧК"), DBc("ИЧК - в словах образованных от слов с суффиксом иц", "Лестничка (лестница), пуговичка (пуговица)").br().text("В остальных случаях", "Троечка, Ванечка, времечко")),
	new TestItemSelfCheck(15, DBc("ОНЬК / ЕНЬК"), DBc("ОНЬК - после твёрдых согласных: лисонька", "ЕНЬК - После мягких согласных, шипящих и гласных: тученька, Зоенька")),
	new TestItemSelfCheck(16, DBc("ЧИК / ЩИК"), DBc("ЧИК - после согласных т, д, с, з, ж: перевозчик, разносчик", "ЩИК - После остальных согласных: банщик, фонарщик")),
	new TestItemSelfCheck(17, DBc("А/О в наречиях"), DBc("А - в наречиях с приставками из, до, с (изредка, добела, снова)", "О - в наречиях с приставками в, на, за (вправо, наглухо, запросто)")),
	new TestItemSelfCheck(18, DBc("О/Е после шипящих"), DBc()
		.title("Ё").ul("В глагольном суффиксе ЁВЫВА (выкорчевывать)", "В суффиксах существительных ЁВК, образованных от глаголов (ночёвка)", "В суффиксе ЁР существительных (стажёр, дирижёр, ухажёр, монтажёр)", "В суффиксах полных и кратких страдательных причастий ЁНН, ЁН (прекращённый, прекращён)", "В суффиксах отглагольных прилагательных ЁН и в производных словах (копчёный, тушёный, копчёности, тушёнка)")
		.title("О").ul("В суффиксах существительных ОК, ОНОК, ОНК под ударением (пирожок, порошок, медвежонок, бумажонка, ручонка)", "В суффиксах прилагательных ОВ, ОН под ударением (камышовый, смешон)", "В суффиксах наречий под ударением (свежо, горячо)", "Искл. ещё")
	),
	// new TestItemSelfCheck(1, DBc(""), DBc("")),
];
