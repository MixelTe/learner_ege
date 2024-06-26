import { DB, DBc } from "../docBuilder.js";
import { TestItem } from "../tester.js";
import { TestItemSelfCheck } from "../testerItems.js";

export const data: TestItem[] = [
	new TestItemSelfCheck(0, DBc("Несогласованное приложение"),
		DB("Несогласованное приложение стоит в именительном падеже независимо от того, в каком падеже определяемое слово")
			.ul(
				DB("Мы встретились на озере ").textCor("Байкал"),
				DB("Мы встретились на озере ").textErr("Байкале"),
				DB("Мы встретились на ").textCor("Байкале"),
			)
			.ul(
				DB("В кинофильме ").textErr("«Войне и мире»").text(" С. Бондарчук прекрасно сыграл Пьера Безухова."),
				DB("В кинофильме ").textCor("«Война и мир»").text(" С. Бондарчук прекрасно сыграл Пьера Безухова."),
				DB("В ").textCor("«Войне и мире»").text(" С. Бондарчук прекрасно сыграл Пьера Безухова."),
			)
	),
	new TestItemSelfCheck(1, DBc("Причастный оборот"),
		DB()
			.ul(
				"Причастие с определяемым словом должно быть согласовано в роде, числе и падеже.",
				"Определяемое слово не должно входить в причастный оборот.",
				"Не должно быть замены действительного причастия на страдательное.",
			)
			.ul(
				DB("Мы гордимся нашими футболистами (Т.П.), ").textErr("победивших (Р.П.)").text(" английскую команду"),
				DB("Мы гордимся нашими футболистами (Т.П.), ").textCor("победившими (Т.П.)").text(" английскую команду"),
			)
			.ul(
				DB().textErr("Приготовленные ").text("оладьи ").textErr("мамой ").text("были необыкновенно вкусны."),
				DB("Оладьи, ").textCor("приготовленные мамой").text(", были необыкновенно вкусны."),
			)
			.ul(
				DB("Задание, ").textErr("выполняющееся").text(" нами, не вызывает особых затруднений."),
				DB("Задание, ").textCor("выполняемое").text(" нами, не вызывает особых затруднений."),
			)
	),
	new TestItemSelfCheck(2, DBc("Деепричастный оборот"),
		DB()
			.ul(
				"Деепричастие и сказуемое должны относится к одному лицу.",
				"Деепричастный оборот не употребляется в безличном предложении, если в нём сказуемое выражено не инфинитивом.",
				"Деепричастный оборот не употребляется, если сказуемое выражено кратким страдательным причастием.",
			)
			.ul(
				DB().textErr("Подъезжая").text(" к городу, начался сильный ветер. (ветер не может подъезжать к городу)"),
				DB().textCor("Когда я подъезжал").text(" к городу, начался сильный ветер."),
			)
			.ul(
				DB().textErr("Приехав").text(" в Москву, мне стало грустно."),
				DB().textCor("Когда я приехал").text(" в Москву, мне стало грустно."),
			)
			.ul(
				DB().textErr("Сдав").text(" экзамены, меня приняли в вуз."),
				DB().textCor("Когда я сдал").text(" экзамены, меня приняли в вуз."),
			)
	),
	new TestItemSelfCheck(3, DBc("Связь между подлежащим и сказуемым"),
		DB()
			.ul(
				"Род сложносокращённых слов определяется по ключевому слову: ООН – Организация Объединённых Наций (организация – главное слово в ж. р.)",
				"Сказуемое согласуется с первым (главным) словом сложного существительного.",
				"В главной и придаточной частях сложного предложения подлежащее и сказуемое должны быть согласованы в числе: все (те) + сказуемое во мн.ч., кто (тот) + сказуемое в ед.ч.",
			)
			.ul(
				DB("ООН ").textErr("объявил").text(" о решении вопроса по теущему конфликту."),
				DB("ООН ").textCor("объявила").text(" о решении вопроса по теущему конфликту."),
			)
			.ul(
				DB("Кресло-качалка ").textErr("отремонтирована"),
				DB("Кресло-качалка ").textCor("отремонтировано"),
			)
			.ul(
				DB("[Все, (кто интересуется театром), ").textErr("знает").text(" имя Алексея Бахрушина]"),
				DB("[Все, (кто интересуется театром), ").textCor("знают").text(" имя Алексея Бахрушина]"),
			)
	),
	new TestItemSelfCheck(4, DBc("Косвенная речь"),
		DB()
			.text("При переводе прямой речи в косвенную местоимения и глаголы в форме 1 лица следует заменить местоимениями и глаголами 3 лица.")
			.ul(
				DB("Автор утверждает, что ").textErr("я это знаю").text(", а не просто предполагает."),
				DB("Автор утверждает, что ").textCor("он это знает").text(", а не просто предполагает."),
			)
	),
	new TestItemSelfCheck(5, DBc("Однородные члены"),
		DB()
			.ul(
				"Каждый из однородных членов должен быть грамматически и лексически соотнесён с общим словом.",
				"Однородные прилагательные или причастия должны быть в одной форме (полной или краткой).",
				"Если перед однородными членами предполагаются разные предлоги, то их нельзя опускать.",
				"Все однородные члены должны стоять в том же падеже, что и обобщающее слово.",
				"Нельзя смешивать родо-видовые понятия в ряду однородных членов.",
				"Части двойных и повторяющихся союзов должны стоять непосредственно рядом с однородными членами",
				"Части двойного союза постоянны, их нельзя заменять другими словами (если не …, то; хотя и …, но; как …, так и; не так …, как; не только …, но и; не столько …, сколько; насколько …, настолько; не то что …, но; не то чтобы …, а; скорее…, чем )",
			)
			.ul(
				DB("Автор утверждает, что ").textErr("я это знаю").text(", а не просто предполагает."),
				DB("Автор утверждает, что ").textCor("он это знает").text(", а не просто предполагает."),
			)
			.ul(
				DB("Раскольников придумал и восхищается ").textErr("своей теорией").text(". (глаголы сочетаются с существительными в разных падежах)"),
				DB("Раскольников придумал (кого? что? В.п.) ").textCor("свою теорию").text(" и восхищается (кем? чем? Т.п.) ").textCor("ею."),
			)
			.ul(
				DB().textErr("Натянуть и выстрелить из лука").text(" непросто"),
				DB().textCor("Натянуть тетиву и выстрелить из лука").text(" непросто"),
			)
			.ul(
				DB("Книги эти интересны (крат.форма) и хорошо ").textErr("иллюстрированные (полн. форма)."),
				DB("Книги эти интересны (крат.форма) и хорошо ").textCor("иллюстрированы (крат.форма)."),
			)
			.ul(
				DB("Толпы людей были повсюду: на улицах, площадях, ").textErr("скверах."),
				DB("Толпы людей были повсюду: на улицах, площадях, ").textCor("в скверах."),
			)
			.ul(
				DB("Жизнь крестьян изображена в произведениях русских классиков (Р.п.): ").textErr("Гоголь, Тургенев, Толстой (И.п.)."),
				DB("Жизнь крестьян изображена в произведениях русских классиков (Р.п.): ").textCor("Гоголя, Тургенева, Толстого (Р.п.)."),
			)
			.ul(
				DB("В пакете лежали ").textErr("апельсины, сок, бананы, фрукты."),
				DB("В пакете лежали ").textCor("сок и фрукты: апельсины, бананы."),
			)
			.ul(
				DB("Эти книги").textErr(" не только предназначены").text(" для преподавателей, но и для студентов."),
				DB("Эти книги").textCor(" предназначены не только").text(" для преподавателей, но и для студентов."),
			)
			.ul(
				DB("В Северной Африке мы наблюдали много особенностей как в природе, ").textErr("а также и").text(" в людских нравах. (нет союза не только…, а также)"),
				DB("В Северной Африке мы наблюдали много особенностей как в природе, ").textCor("так и").text(" в людских нравах."),
			)
	),
	new TestItemSelfCheck(6, DBc("Сложные предложения"),
		DB()
			.ul(
				"Придаточное определительное должно стоять после того слова, от которого зависит.",
				"Придаточное изъяснительное присоединяется к главному с помощью частицы ли, выступающей в роли подчинительного союза, поэтому союз что здесь лишний.",
			)
			.ul(
				DB("[В письме говорилось], (что в город едет ").textErr("ревизор), (которым").text(" управляет Сквозник – Дмухановский) (при таком построении предложения создаётся впечатление, что Сквозник-Дмухановский управляет ревизором, а не городом)"),
				DB("[В письме говорилось], (что в ").textCor("город, (которым").text(" управляет Сквозник -Дмухановский), едет ревизор)."),
			)
			.ul(
				DB("Перед дуэлью Печорин любуется природой, а Вернер спрашивает, ").textErr("что написал ли").text(" он своё завещание."),
				DB("Перед дуэлью Печорин любуется природой, а Вернер спрашивает, ").textCor("написал ли").text(" он своё завещание."),
			)
	),
	new TestItemSelfCheck(7, DBc("Формы существительного с предлогом"),
		DB()
			.ul(
				"Предлоги СОГЛАСНО, ВОПРЕКИ, БЛАГОДАРЯ, СООБРАЗНО, НАПЕРЕРЕЗ, ПОДОБНО употребляются только с Д. п. (кому? чему?)",
				"Предлог ПО в значении «после чего-либо, в результате чего-либо» употребляется с П. п. (по ком? чём?)",
				"в меру, в силу, в течение, в продолжение, в заключение, по причине, по завершении, наподобие, посредством - Р.п. (нет кого? чего?)",
				"Для одного слова используются предлоги только из одной пары: в - из, на - с.",
			)
			.ul(
				DB("Вопреки ").textErr("(кого? чего? Р.п.) обстоятельств"),
				DB("Вопреки ").textCor("(кому? чему? Д.п.) обстоятельствам"),
			)
			.ul(
				DB("благодаря ").textErr("(кого? чего? Р.п.) старания"),
				DB("благодаря ").textCor("(кому? чему? Д.п.) старанию"),
			)
			.ul(
				DB("По ").textErr("окончанию ").text("срока"),
				DB("По ").textCor("окончании ").text("срока"),
			)
			.ul(
				DB("По ").textErr("истечению").text(" срока"),
				DB("По ").textCor("истечении").text(" срока"),
			)
			.ul(
				DB("По ").textErr("прибытию").text(" поезда"),
				DB("По ").textCor("прибытии").text(" поезда"),
			)
			.ul(
				DB("По ").textErr("приезду"),
				DB("По ").textCor("приезде"),
			)
			.ul(
				DB().textErr("с города"),
				DB().textCor("из города").text(" (т.к. (куда?) в город)"),
			)
			.ul(
				DB("Он вернётся ").textErr("из севера"),
				DB("Он вернётся ").textCor("с севера").text(" (т.к. (куда?) на север)"),
			)
	),
	new TestItemSelfCheck(8, DBc("Нарушение видовременной соотнесенности глагольных форм"),
		DB()
			.ul(
				DB("Сестра ").textErr("читает").text(" книгу и пересказала ее брату."),
				DB("Сестра ").textCor("прочитала").text(" книгу и пересказала ее брату."),
			)
	),
	new TestItemSelfCheck(9, DBc("Нарушение управления глаголов"),
		DB()
			.ul(
				DB("Он всегда уделял внимание ").textErr("на свое здоровье"),
				DB("Он всегда уделял внимание ").textCor("своему здоровью"),
			)
	),
];
