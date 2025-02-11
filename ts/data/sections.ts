import { TestItem } from "../tester.js"
import { Themes, themes } from "../themes.js"

export const Sections: Section[] = [
	{
		name: "Русский",
		themes: [
			{ id: "ru_1", count: 41, name: "№1 Средства связи", color: themes.blue, items: getItemLoader("ru_1"), onlyAnswerInQList: true },
			{ id: "ru_3", count: 42, name: "№3 Стили речи", color: themes.blue, items: getItemLoader("ru_3") },
			{ id: "ru_4", count: 265, name: "№4 Ударения", color: themes.blue, items: getItemLoader("ru_4"), onlyAnswerInQList: true },
			{ id: "ru_5", count: 144, name: "№5 Паронимы", color: themes.blue, items: getItemLoader("ru_5"), onlyAnswerInQList: true },
			{ id: "ru_6", count: 69, name: "№6 Лексические нормы", color: themes.blue, items: getItemLoader("ru_6"), disableRepeat: true },
			{ id: "ru_7", count: 393, name: "№7 Формы слова", color: themes.blue, items: getItemLoader("ru_7"), onlyAnswerInQList: true },
			{ id: "ru_8", count: 10, name: "№8 Грамматические нормы", color: themes.blue, items: getItemLoader("ru_8") },
			{ id: "ru_9_1", count: 21, name: "№9 Правописание корней", color: themes.blue, items: getItemLoader("ru_9_1") },
			{ id: "ru_9_2", count: 636, name: "№9 Словарные слова", color: themes.blue, items: getItemLoader("ru_9_2"), onlyAnswerInQList: true },
			{ id: "ru_10", count: 16, name: "№10 Правописание приставок", color: themes.blue, items: getItemLoader("ru_10") },
			{ id: "ru_10p", count: 1005, name: "№10 Практика", color: themes.blue, items: getItemLoader("ru_10p"), onlyAnswerInQList: true },
			{ id: "ru_11", count: 20, name: "№11 Правописание суффиксов", color: themes.blue, items: getItemLoader("ru_11") },
			{ id: "ru_11p", count: 713, name: "№11 Практика", color: themes.blue, items: getItemLoader("ru_11p"), onlyAnswerInQList: true },
			{ id: "ru_12", count: 7, name: "№12 Пра­во­пи­са­ние глаголов", color: themes.blue, items: getItemLoader("ru_12") },
			{ id: "ru_12p", count: 905, name: "№12 Практика", color: themes.blue, items: getItemLoader("ru_12p"), onlyAnswerInQList: true },
			{ id: "ru_13", count: 10, name: "№13 Правописание НЕ", color: themes.blue, items: getItemLoader("ru_13") },
			{ id: "ru_13p", count: 254, name: "№13 Практика", color: themes.blue, items: getItemLoader("ru_13p"), onlyAnswerInQList: true, disableRepeat: true },
			{ id: "ru_14", count: 87, name: "№14 Слитно, дефис или раздельно", color: themes.blue, items: getItemLoader("ru_14") },
			{ id: "ru_15", count: 3, name: "№15 Н и НН в суффиксах", color: themes.blue, items: getItemLoader("ru_15") },
			{ id: "ru_15p", count: 234, name: "№15 Практика", color: themes.blue, items: getItemLoader("ru_15p"), onlyAnswerInQList: true, disableRepeat: true },
			{ id: "ru_16", count: 4, name: "№16-20 Пунктуация", color: themes.blue, items: getItemLoader("ru_16") },
			{ id: "ru_17p", count: 235, name: "№17 Практика", color: themes.blue, items: getItemLoader("ru_17p"), onlyAnswerInQList: true, disableRepeat: true },
			{ id: "ru_18p", count: 272, name: "№18 Практика", color: themes.blue, items: getItemLoader("ru_18p"), onlyAnswerInQList: true, disableRepeat: true },
			{ id: "ru_19p", count: 289, name: "№19 Практика", color: themes.blue, items: getItemLoader("ru_19p"), onlyAnswerInQList: true, disableRepeat: true },
			{ id: "ru_20p", count: 230, name: "№20 Практика", color: themes.blue, items: getItemLoader("ru_20p"), onlyAnswerInQList: true, disableRepeat: true },
			{ id: "ru_26", count: 41, name: "№26 Cредства выразительности", color: themes.blue, items: getItemLoader("ru_26") },
		],
	},
	{
		name: "Математика",
		themes: [
			{ id: "math_0", count: 27, name: "Площади и объёмы", color: themes.green, items: getItemLoader("math_0") },
			{ id: "math_1", count: 41, name: "Планиметрия", color: themes.green, items: getItemLoader("math_1") },
			{ id: "math_2", count: 10, name: "Стереометрия", color: themes.green, items: getItemLoader("math_2") },
			{ id: "math_3", count: 29, name: "Алгебра", color: themes.green, items: getItemLoader("math_3") },
			{ id: "math_4", count: 18, name: "Производная", color: themes.green, items: getItemLoader("math_4") },
			{ id: "math_5", count: 17, name: "Тригонометрия", color: themes.green, items: getItemLoader("math_5") },
			{ id: "math_6", count: 13, name: "Векторы", color: themes.green, items: getItemLoader("math_6") },
			{ id: "math_7", count: 7, name: "Параметр", color: themes.green, items: getItemLoader("math_7") },
		],
	},
	{
		name: "Физика",
		themes: [
			{ id: "phy_0", count: 131, name: "Формулы", color: themes.orange, items: getItemLoader("phy_0") },
		],
	},
]


export interface Section
{
	name: string,
	themes: Theme[],
}

export interface Theme
{
	id: string,
	name: string,
	color: Themes,
	count: number,
	items: () => Promise<LoadedItems>,
	onlyAnswerInQList?: true,
	disableRepeat?: true,
}

export interface LoadedItems
{
	items: TestItem[],
	success: boolean,
}

function getItemLoader(name: string)
{
	let dataCache: LoadedItems = { items: [], success: false };
	return async function ()
	{
		if (dataCache.success) return dataCache;
		try
		{
			const { data } = await import("./" + name + ".js");
			dataCache.items = data;
			dataCache.success = true;
		} catch { }
		return dataCache;
	}
}


// checkItems()
async function checkItems()
{
	console.warn("checkItems enabled");
	for (const section of Sections)
	{
		for (const theme of section.themes)
		{
			let r = true;
			let id = 0;
			const { items } = await theme.items();
			for (const item of items)
			{
				const c = items.filter(v => v.id == item.id).length == 1;
				if (!c)
				{
					r = false;
					id = item.id;
				}
			}
			if (!r)
				console.error(`Same ids in ${theme.id}: ${id}`);
			if (items.length != theme.count)
				console.error(`Wrong count in ${theme.id}, correct: ${items.length}`);
		}
	}
}
