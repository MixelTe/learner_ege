import { TestItem } from "../tester.js";
import { TestItemWordGroup } from "../testerItems.js";

export const data: TestItem[] = [
	new TestItemWordGroup(0, ["Абонемент", "абонент"], ["право пользования чем-либо в течение определённого срока", "владелец абонемента"]),
	new TestItemWordGroup(1, ["Авторитарный", "авторитетный"], ["основанный на беспрекословном подчинении власти, диктатуре", "пользующийся авторитетом"]),
	new TestItemWordGroup(2, ["Адресант", "адресат"], ["отправитель", "получатель"]),
	new TestItemWordGroup(3, ["Артистический", "артистичный"], ["относящийся к артисту", "отличающийся артистизмом"]),
	new TestItemWordGroup(4, ["Бедный", "бедственный"], ["малоимущий, скудный, несчастный", "исполненный бедствий, связанный с несчастьем"]),
	new TestItemWordGroup(5, ["Безликий", "безличный"], ["лишённый своеобразия, невыразительный", "не проявляющий своей индивидуальности, отличительных черт"]),
	new TestItemWordGroup(6, ["Безответный", "безответственный"], ["не дающий ответа", "не несущий или не сознающий ответственности"]),
	new TestItemWordGroup(7, ["Болотистый", "болотный"], ["заболоченный", "относящийся к болоту"]),
	new TestItemWordGroup(8, ["Благодарный", "благодарственный"], ["выражающий признательность", "содержащий в себе благодарность"]),
	new TestItemWordGroup(9, ["Благотворительный", "благотворный"], ["имеющий целью оказание материальной помощи нуждающимся", "полезный, оказывающий хорошее действие"]),
	new TestItemWordGroup(10, ["Будний", "будничный"], ["относящийся к будням", "предназначенный для будней, однообразный, скучный"]),
	new TestItemWordGroup(11, ["Бывалый", "бывший", "былой"], ["привычный, опытный", "существовавший ранее", "минувший, прошлый, прежний"]),
	new TestItemWordGroup(12, ["Ванна", "ванная"], ["сосуд для купания, процедура в нём", "комната, в которой находится ванна"]),
	new TestItemWordGroup(13, ["Вдох", "вздох"], ["каждое отдельное вдыхание", "усиленный вдох и выдох"]),
	new TestItemWordGroup(14, ["Вековой", "вечный"], ["существующий многие годы", "бесконечный, постоянный"]),
	new TestItemWordGroup(15, ["Великий", "величавый", "величественный"], ["огромный, важный по значению", "преисполненный величия, достоинства", "торжественный, исполненный достоинства, важности"]),
	new TestItemWordGroup(16, ["Величие", "величина"], ["наличие выдающихся свойств", "размер, объём"]),
	new TestItemWordGroup(17, ["Возбуждать", "побуждать"], ["приводить в возбужденное состояние", "склонять к какому-либо действию"]),
	new TestItemWordGroup(18, ["Восполнить", "дополнить", "заполнить", "наполнить", "переполнить", "пополнить"]),
	new TestItemWordGroup(19, ["Враждебный", "вражеский"], ["полный неприязни, ненависти", "относящийся к неприятелю, врагу, противнику"]),
	new TestItemWordGroup(20, ["Выбирать", "избирать"], ["отбирать по какому-либо критерию", "участвовать в выборах"]),
	new TestItemWordGroup(21, ["Выгода", "выгодность"], ["прибыль, доход", "свойство, являющееся выгодным"]),
	new TestItemWordGroup(22, ["Выдача", "отдача", "передача", "раздача"]),
	new TestItemWordGroup(23, ["Выплата", "оплата", "плата", "уплата"], ["премии, зарплаты", "долга, расхода, труда", "за услугу, за проезд, за предательство", "в уплату долга"]),
	new TestItemWordGroup(24, ["Выплатить", "заплатить", "оплатить", "отплатить", "уплатить"], ["зарплату", "за проезд", "проезд", "долг"]),
	new TestItemWordGroup(25, ["Вырастить", "нарастить", "отрастить"], ["ухаживая, обеспечить рост", "способствовать росту чего-либо", "дать возможность достичь в росте каких-либо размеров, величины"]),
	new TestItemWordGroup(26, ["Выращивание", "наращивание", "отращивание"], ["ухаживая, обеспечить рост", "способствовать росту чего-либо", "дать возможность достичь в росте каких-либо размеров, величины"]),
	new TestItemWordGroup(27, ["Высокий", "высотный"], ["большой, превышающий средний уровень", "используемый на большой высоте, об архитектурных сооружениях"]),
	new TestItemWordGroup(28, ["Гарантийный", "гарантированный"], ["служащий гарантией", "обеспеченный"]),
	new TestItemWordGroup(29, ["Гармонический", "гармоничный"], ["основанный на принципах гармонии", "обладающий согласованностью"]),
	new TestItemWordGroup(30, ["Глинистый", "глиняный"], ["содержащий глину", "сделанный из глины"]),
	new TestItemWordGroup(31, ["Годичный", "годовалый", "годовой"], ["продолжающийся в течение года", "в возрасте одного года", "относящийся к целому году, один раз в год"]),
	new TestItemWordGroup(32, ["Гордость", "гордыня"], ["чувство собственного достоинства", "чрезмерная гордость"]),
	new TestItemWordGroup(33, ["Гуманизм", "гуманность"], ["отношение к людям, проникнутое любовью к человеку и заботой о его благе", "свойство, в основе которого значение прилагательного гуманный"]),
	new TestItemWordGroup(34, ["Гуманистический", "гуманитарный", "гуманный"], ["прилагательное к существительным гуманизм и гуманист", "относящийся к общественным наукам, изучающим человека и его культуру", "человечный, человеколюбивый, проникнутый любовью к человеку, уважением к личности"]),
	new TestItemWordGroup(35, ["Двоичный", "двойной", "двойственный", "двоякий", "сдвоенный", "удвоенный"], ["основанный на счёте двойками", "состоящий из двух однородных или подобных частей", "противоречивый", "проявляющий себя в двух смыслах", "соединённый в один", "увеличенный вдвое"]),
	new TestItemWordGroup(36, ["Действенный", "действительный", "действующий"], ["эффективный, способный влиять на результат", "существующий", "нынешний, работающий"]),
	new TestItemWordGroup(37, ["Деловитый", "деловой", "дельный", "деляческий"], ["умелый, толковый, предприимчивый", "связанный с делом, с работой", "способный к делу, к работе", "основанный на узком практицизме, сугубо прагматичный"]),
	new TestItemWordGroup(38, ["Демократичный", "демократический"], ["содержащий элементы демократичности, демократизма, простой, относящийся к народу", "основанный на принципах демократии"]),
	new TestItemWordGroup(39, ["Дипломант", "дипломат"], ["лицо, награждённое дипломом", "должностное лицо, занимающееся дипломатической деятельностью"]),
	new TestItemWordGroup(40, ["Дипломатический", "дипломатичный"], ["относящийся к дипломатии", "ловкий, умело и тонко действующий"]),
	new TestItemWordGroup(41, ["Длинный", "длительный "], ["имеющий большую длину", "долговременный"]),
	new TestItemWordGroup(42, ["Добротный", "добрый"], ["хорошо, прочно сделанный", "отзывчивый, готовый помочь, расположенный к другим"]),
	new TestItemWordGroup(43, ["Доверительный", "доверчивый"], ["выражающий доверие", "доверяющий, питающий доверие"]),
	new TestItemWordGroup(44, ["Дождевой", "дождливый"], ["связанный с дождём, вызванный дождём", "обильный дождями"]),
	new TestItemWordGroup(45, ["Драматический", "драматичный"], ["относящийся к драме", "содержащий элементы драматизма"]),
	new TestItemWordGroup(46, ["Дружеский", "дружественный", "дружный"], ["относящийся к другу", "благожелательный", "связанный взаимным согласием"]),
	new TestItemWordGroup(47, ["Единичный", "единственный", "единый", "одиночный"], ["отдельный, обособленный, индивидуальный", "такой, кроме которого нет никакого другого", "общий, одинаковый, один для всех"]),
	new TestItemWordGroup(48, ["Желанный", "желательный"], ["ожидаемый", "нужный"]),
	new TestItemWordGroup(49, ["Жестокий", "жёсткий"], ["безжалостный, беспощадный", "твёрдый на ощупь, крепкий, плотный"]),
	new TestItemWordGroup(50, ["Жизненный", "житейский"], ["относящийся к жизни", "обыденный, связанный с ежедневной жизнью"]),
	new TestItemWordGroup(51, ["Жилищный", "жилой"], ["прилагательное к существительному жилище", "предназначенный для жилья"]),
	new TestItemWordGroup(52, ["Загородить", "огородить", "оградить", "отгородить", "перегородить"], ["", "обнести изгородью, оградой", "защитить от чего-то"]),
	new TestItemWordGroup(53, ["Занизить", "понизить", "снизить"]),
	new TestItemWordGroup(54, ["Зачинатель", "зачинщик"], ["основоположник чего-либо", "тот, кто начинает что-то неблаговидное"]),
	new TestItemWordGroup(55, ["Звериный", "зверский"], ["свойственный зверю", "жестокий, свирепый"]),
	new TestItemWordGroup(56, ["Звуковой", "звучный"], ["относящийся к звуку", "громкий, чистый, отчётливо звучащий"]),
	new TestItemWordGroup(57, ["Землистый", "земляной", "земной"], ["содержащий землю", "относящийся к земле", "относящийся к земле — планете"]),
	new TestItemWordGroup(58, ["Зрительный", "зрительский"], ["относящийся к зрению", "относящийся к зрителю"]),
	new TestItemWordGroup(59, ["Изобретательный", "изобретательский"], ["находчивый", "относящийся к изобретательству"]),
	new TestItemWordGroup(60, ["Информативный", "информационный"], ["несущий информацию", "относящийся к информации"]),
	new TestItemWordGroup(61, ["Информация", "информированность"], ["", "осведомленность, степень владения информацией"]),
	new TestItemWordGroup(62, ["Иронический", "ироничный"], ["относящийся к иронии как стилистическому приёму", "содержащий элементы иронии"]),
	new TestItemWordGroup(63, ["Искусный", "искусственный"], ["хорошо знающий своё дело, хорошо выполненный", "ненатуральный"]),
	new TestItemWordGroup(64, ["Исполнительный", "исполнительский"], ["старательный", "относящийся к исполнителю"]),
	new TestItemWordGroup(65, ["Исходный", "исходящий"], ["начальный", "термин документооборота"]),
	new TestItemWordGroup(66, ["Каменистый", "каменный"], ["содержащий камень", "состоящий из камня"]),
	new TestItemWordGroup(67, ["Комфортабельный", "комфортный"], ["что-то удобное, с комфортом, уютом", "удобный, благоприятный"]),
	new TestItemWordGroup(68, ["Конный", "конский"], ["связанный с лошадьми", "принадлежащий коню"]),
	new TestItemWordGroup(69, ["Коренастый", "коренной", "корневой"], ["тип телосложения (невысокий, крепкий, мускулистый)", "исконный, постоянный, основной", "относящийся к корню"]),
	new TestItemWordGroup(70, ["Костный", "костяной"], ["прилагательное к существительному кость", "сделанный из кости"]),
	new TestItemWordGroup(71, ["Красочный", "красящий", "крашеный"], ["яркий, сочный", "причастие от глагола красить", "обработанный краской"]),
	new TestItemWordGroup(72, ["Лакированный", "лакировочный", "лаковый"], ["покрытый лаком", "предназначенный, служащий для лакировки", "прилагательное к существительному лак"]),
	new TestItemWordGroup(73, ["Ледовый", "ледяной"], ["состоящий изо льда, находящийся на льду, происходящий во льдах", "прилагательное к существительному лёд"]),
	new TestItemWordGroup(74, ["Лесистый", "лесной"], ["обильно поросший лесом", "прилагательное к существительному лес"]),
	new TestItemWordGroup(75, ["Личностный", "личный"], ["относящийся к личности", "принадлежащий определенному лицу"]),
	new TestItemWordGroup(76, ["Микроскопический", "микроскопичный"], ["видимый только в микроскоп", "очень незначительный по величине"]),
	new TestItemWordGroup(77, ["Мороженый", "морозильный", "морозный"], ["подвергшийся замораживанию", "предназначенный для замораживания", "относящийся к морозу как явлению природы"]),
	new TestItemWordGroup(78, ["Наблюдательный", "наблюдательский"]),
	new TestItemWordGroup(79, ["Надеть", "одеть"], ["что-то на себя", "кого-то"]),
	new TestItemWordGroup(80, ["Наличие", "наличность"], ["присутствие", "количество имеющегося в наличии в данный момент"]),
	new TestItemWordGroup(81, ["Напоминание", "упоминание"]),
	new TestItemWordGroup(82, ["Невежа", "невежда"], ["грубый, невоспитанный, невежливый человек", "малообразованный человек, неуч"]),
	new TestItemWordGroup(83, ["Нестерпимый", "нетерпеливый", "нетерпимый"], ["превышающий терпение", "выражающий нетерпение", "такой, с которым нельзя мириться, недопустимый"]),
	new TestItemWordGroup(84, ["Неудачный", "неудачливый"], ["сопровождающийся, закончившийся неудачей", "преследуемый неудачами"]),
	new TestItemWordGroup(85, ["Обвинённый", "обвинительный"], ["сужденный, привлеченный, укоренный", "содержащий в себе обвинение"]),
	new TestItemWordGroup(86, ["Обрывок", "отрывок"], ["оторванный кусок", "небольшая часть произведения, фрагмент"]),
	new TestItemWordGroup(87, ["Обсудить", "осудить"]),
	new TestItemWordGroup(88, ["Обхватить", "охватить"], ["заключив между распростёртыми руками", "окружить, сжать, заключить в свои пределы, обнять, окутать"]),
	new TestItemWordGroup(89, ["Ограничить", "отграничить", "разграничить"], ["поставить в границы, рамки", "отделить одно от другого или от всего прочего, установив границу", "отделить друг от друга или одно от другого"]),
	new TestItemWordGroup(90, ["Оклик", "отклик"], ["возглас, которым окликают кого-либо", "ответ на зов, обращение"]),
	new TestItemWordGroup(91, ["Опасливый", "опасный"]),
	new TestItemWordGroup(92, ["Органический", "органичный"], ["относящийся к живым организмам", "не случайный, закономерно вытекающий из чего-либо"]),
	new TestItemWordGroup(93, ["Отборный", "отборочный"]),
	new TestItemWordGroup(94, ["Отклонение", "уклонение"]),
	new TestItemWordGroup(95, ["Отклониться", "уклониться"]),
	new TestItemWordGroup(96, ["Отличать(-ся)", "различать(-ся)"], ["распознавать нечто среди прочего", "распознавать зрением или другими органами чувств"]),
	new TestItemWordGroup(97, ["Отличие", "различие"], ["признак, создающий разницу", "разница, несходство"]),
	new TestItemWordGroup(98, ["Памятливый", "памятный"], ["обладающий хорошей памятью", "сохранившийся в памяти, незабываемый"]),
	new TestItemWordGroup(99, ["Перетерпеть", "претерпеть"], ["пережить, вынести что-то неприятное", "подвергнуться изменению"]),
	new TestItemWordGroup(100, ["Покупательный", "покупательский", "покупной"], ["относящийся к возможности купить", "относящийся к покупателю", "относящийся к покупке"]),
	new TestItemWordGroup(101, ["Понятливый", "понятный"]),
	new TestItemWordGroup(102, ["Популистский", "популярный"], ["апеллирующий к широким массам", "пользующийся широкой известностью"]),
	new TestItemWordGroup(103, ["Поступок", "проступок"]),
	new TestItemWordGroup(104, ["Почтенный", "почтительный", "почётный"]),
	new TestItemWordGroup(105, ["Праздничный", "праздный"]),
	new TestItemWordGroup(106, ["Практический", "практичный"], ["относящийся к области практики", "выгодный, экономный"]),
	new TestItemWordGroup(107, ["Предоставить", "представить"], ["отдать в распоряжение, пользование", "предъявить, сообщить что-либо кому-либо"]),
	new TestItemWordGroup(108, ["Представительный", "представительский"], ["основанный на представительстве, авторитетный", "относящийся к представительству или представителю"]),
	new TestItemWordGroup(109, ["Признанный", "признательный"]),
	new TestItemWordGroup(110, ["Подделка", "поделка", "проделка"]),
	new TestItemWordGroup(111, ["Продуктивный", "продуктовый"]),
	new TestItemWordGroup(112, ["Производительность", "производство"], ["способность выпускать определённое количество продукции", "процесс создания материальных благ"]),
	new TestItemWordGroup(113, ["Производительный", "производный", "производственный"], ["производящий, создающий, продуктивный", "образованный от чего-то другого", "относящийся к производству"]),
	new TestItemWordGroup(114, ["Просветительский", "просвещённый"]),
	new TestItemWordGroup(115, ["Публицистический", "публицистичный"], ["относящийся к публицистике, к публицисту", "затрагивающий злободневные общественно-политические вопросы"]),
	new TestItemWordGroup(116, ["Пугливый", "пуганый"]),
	new TestItemWordGroup(117, ["Раздражение", "раздражительность"]),
	new TestItemWordGroup(118, ["Расчётливый", "расчётный"]),
	new TestItemWordGroup(119, ["Ритмический", "ритмичный"], ["относящийся к ритмике, подчинённый ей", "повторяющийся через равные промежутки чего-либо"]),
	new TestItemWordGroup(120, ["Романтический", "романтичный"], ["относящийся к романтизму, свойственный романтику", "содержащий элементы романтизма"]),
	new TestItemWordGroup(121, ["Складной", "складской"]),
	new TestItemWordGroup(122, ["Скрытный", "скрытый"]),
	new TestItemWordGroup(123, ["Словарный", "словесный"]),
	new TestItemWordGroup(124, ["Сопротивление", "сопротивляемость"]),
	new TestItemWordGroup(125, ["Соседний", "соседский"]),
	new TestItemWordGroup(126, ["Сравнимый", "сравнительный"], ["тот, который может сравниваться с чем-либо", "основанный на сравнении, относительный"]),
	new TestItemWordGroup(127, ["Стеклянный", "стекольный"]),
	new TestItemWordGroup(128, ["Сценический", "сценичный"], ["относящийся к сцене, связанный с театром", "обладающий свойствами, нужными для сцены"]),
	new TestItemWordGroup(129, ["Сытный", "сытый"]),
	new TestItemWordGroup(130, ["Технический", "техничный"], ["относящийся к технике", "обладающий мастерством, высокой техникой"]),
	new TestItemWordGroup(131, ["Удачливый", "удачный"]),
	new TestItemWordGroup(132, ["Униженный", "унизительный"]),
	new TestItemWordGroup(133, ["Хищнический", "хищный"], ["свойственный хищнику, грабительский", "о животных: питающийся животными, жадный, полный стремления овладеть, захватить что-либо"]),
	new TestItemWordGroup(134, ["Царский", "царственный", "царствующий"], ["относящийся к царю", "отличающийся величественностью", "тот, кто царствует"]),
	new TestItemWordGroup(135, ["Целый", "цельный", "целостный"], ["полный", "из одного куска, монолитный", "представляющий целостность, единство"]),
	new TestItemWordGroup(136, ["Человечный", "человеческий"]),
	new TestItemWordGroup(137, ["Экономика", "экономия"]),
	new TestItemWordGroup(138, ["Экономический", "экономичный", "экономный"], ["относящийся к экономике, хозяйственный", "дающий возможность что-либо сэкономить, выгодный", " соблюдающий экономию, требующий умеренных затрат"]),
	new TestItemWordGroup(139, ["Эстетический", "эстетичный"], ["относящийся к эстетике", "красивый, изящный"]),
	new TestItemWordGroup(140, ["Этический", "этичный"], ["относящийся к этике", "допустимый с точки зрения требований этики"]),
	new TestItemWordGroup(141, ["Эффективный", "эффектный"], ["действенный, приводящий к нужным результатам", "производящий впечатление"]),
	new TestItemWordGroup(142, ["Эффективность", "эффектность"]),
	new TestItemWordGroup(143, ["Яблочный", "яблоневый"], ["приготовленный из яблок или с яблоками", "относящийся к яблони, состоящий из яблонь"]),
];