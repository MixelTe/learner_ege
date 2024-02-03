import { DBc } from "../docBuilder.js";
import { TestItemSelfCheck } from "../testerItems.js";
const _data = {
    "Троп": {
        "Эпитет": { id: 0, q: "Красочное определение (с переносным смыслом)" },
        "Гипербола": { id: 1, q: "Преувеличение" },
        "Литота": { id: 2, q: "Преуменьшение" },
        "Метафора": { id: 3, q: "Скрытое сравнение" },
        "Метонимия": { id: 4, q: DBc("перенос понятия", "Тарелку съел (съел не тарелку, а всё её содержимое)", "Читает Гоголя (не самого Гоголя, а его книгу)") },
        "Синекдоха": { id: 5, q: DBc("Части вместо целого или наоборот", "Класс разбил окно (но разбил кто-то один)", "Швед, русский - колет, рубит (их не двое)") },
        "Олицетворение": { id: 6, q: DBc("Наделение неодушевленных предметов свойствами одушевленного", "Ручьи поют, деревья обняли друг друга ветвями", "Горные вершины спят во тьме ночной") },
        "Сравнение": { id: 7, q: DBc("Как, юудто, словно, точно, подобно", "Тв.п. - Мухой надоедал, пулей вылетел") },
        "Ирония": { id: 8, q: "Скрытая насмешка" },
    },
    "Синтаксическое средство": {
        "Риторический вопрос/восклицание/обращение": { id: 9, q: "Вопрос, восклицание, обращение, не имеющие адресата" },
        "Ряды однородных членов": { id: 10, q: "Слова одной и той же части речи, относящиеся к одному слову и отвечающие на один вопрос" },
        "Вводные слова/словосочетания": { id: 11, q: "Слова, к которым нельзя задать вопрос, выражающие отношение говорящего к высказыванию" },
        "Вопросительные предложения": { id: 12, q: null },
        "Восклицательные предложения": { id: 13, q: null },
        "Неполные предложения": { id: 14, q: DBc("Предложения не ясные без контекста", "(Вы устали?) Я нет.") },
        "Обращения": { id: 15, q: null },
        "Сравнительные обороты": { id: 16, q: null },
    },
    "Приём": {
        "Анафора": { id: 17, q: "Повторение начальных слов, строк или фраз" },
        "Эпифора": { id: 18, q: "Повторение одного и того же слова, фразы в конце отрезка речи" },
        "Антитеза": { id: 19, q: "Противопоставление" },
        "Оксюморон": { id: 20, q: DBc("Сочетание несовместимого", "Живой труп, горячий снег, мёртвые души") },
        "Градация": { id: 21, q: "Последовательное нагнетание или ослабление сравнений, образов, эпитетов, метафор." },
        "Инверсия": { id: 22, q: "Нарушение порядка слов в предложении" },
        "Лексический повтор": { id: 23, q: "Повторение одного и того же слова" },
        "Синтаксический параллелизм": { id: 24, q: DBc("Одинаковое расположение элементов речи в смежных частях текста", "Летал сокол по небу, гулял молодец по свету. Утихает светлый ветер, Наступает серый вечер…") },
        "Парцелляция": { id: 25, q: DBc("Деление предложения на мелкие части", "Я думаю. Что вы не правы.", "Вместо: Я думаю, что вы не правы.") },
        "Неологизм": { id: 26, q: "Новое, не так давно вошедшее в язык слово или словосочетание" },
        "Цитирование": { id: 27, q: null },
        "Диалог": { id: 28, q: null },
    },
    "Лексическое средство выразительности": {
        "Антонимы": { id: 29, q: "Слова, противоположные по значению" },
        "Контекстные антонимы": { id: 30, q: "Слова, противоположные по значению только в пределах текста" },
        "Синонимы": { id: 31, q: "Слова близкие по значению" },
        "Контекстные синонимы": { id: 32, q: "Слова, близкие по значению только в пределах текста" },
        "Диалектизмы": { id: 33, q: "Слово или оборот, употребляющийся в определенной местности" },
        "Жаргонизмы": { id: 34, q: "Речь социальной группы, отличная от общего языка" },
        "Профессионализмы": { id: 35, q: "Слова, употребляющиеся только в определенной профессиональной среде" },
        "Термины": { id: 36, q: "Слова, обозначающие специальные понятия в науке, технике" },
        "Книжная лексика": { id: 37, q: "Слова, которые употребляются преимущественно в письменной речи" },
        "Разговорная лексика": { id: 38, q: "Слова, которые употребляются в повседневной обиходной речи" },
        "Просторечная лексика": { id: 39, q: "Слова, характеризующиеся упрощенностью, оттенком грубости" },
        "Эмоционально-экспрессивная лексика": { id: 40, q: "Слова, которые носят оценочный характер" },
        "Архаизмы": { id: 41, q: DBc("Устаревшее слово или оборот речи", "Очи (глаза), чело (лоб), зерцало (зеркало)") },
        "Историзмы": { id: 42, q: DBc("Слова, вышедшие из употребления в связи с исчезновением предмета или явления, которое они обозначали", "Лакей, треуголка, боярин, царь") },
        "Заимствованные слова": { id: 43, q: "Слова, пришедшие в русский язык из других языков" },
        "Фразеологизмы": { id: 44, q: DBc("Устойчивые словосочетания", "Авгиевы конюшни, белая ворона, бить баклуши") },
    },
    "Фонетическое средство": {
        "Аллитерация": { id: 45, q: DBc("Стилистический прием, при котором повторяются согласные").br().text("Шла Саша по шоссе и сосала сушку").br().text("Нева вздувалась и ревела,", "Котлом клокоча и клубясь") },
        "Ассонанс": { id: 46, q: DBc("Повтор одинаковых или похожих гласных звуков").br().text("У наших ушки на макушке,", "Чуть утро осветило пушки", "И леса синие верхушки -", "Французы тут как тут.") },
        "Звукоподражание": { id: 47, q: "" },
    },
};
export const data = [];
for (const groupTitle in _data) {
    const group = _data[groupTitle];
    for (const word in group) {
        let { id, q } = group[word];
        if (q) {
            if (typeof q == "string")
                q = DBc(q);
            else
                q = q.copy();
            q.hr().text(groupTitle);
            data.push(new TestItemSelfCheck(id, word, q));
        }
    }
}
// for (const groupTitle in data)
// {
// 	const groups = Object.keys(data);
// 	groups[groups.indexOf(groupTitle)] = "+" + groupTitle;
// 	const group = data[groupTitle];
// 	for (const word in group)
// 	{
// 		const { id, q } = group[word];
// 		data.push(new TestItemChoice(id + 100, DBc(word), groups.slice(), false, q || undefined));
// 	}
// }
