import { DBc } from "../docBuilder.js";
import { TestItemSelfCheck } from "../testerItems.js";
export const data = [
    new TestItemSelfCheck(0, DBc("Запятые между однородными членами"), DBc()
        .text("Не ставятся если:")
        .ul("Есть союзы: и, да(=и), либо, или", "Два нераспространённых определения")
        .text("! Повторяющиеся союзы не влияют на запятые", "Части предложения могут быть однородными, если у них есть общее зависимое слово").br()
        .textCor("За окном").text(" светило солнце и пели птицы")
        .text("", "За окном - общее зав. слово, запятая не ставится")),
    new TestItemSelfCheck(1, DBc("Запятые в причастных и деепричастных оборотов"), DBc()
        .text("Деепричастные обороты - всегда обособляются", "Вася, выйдя на улицу, посмотрел в даль.").br()
        .text("Причастные обороты - обособляются, если стоят после определяемого слова, а так же с местоименями", "Вася, вышедший на улицу, смотрел в даль.", "Вышедший на улицу Вася смотрел в даль.", "Вышедший на улицу, я смотрел в даль.")),
    new TestItemSelfCheck(2, DBc("Запятые при обращениях, междометиях, вводных словах"), DBc()
        .text("Обращения, междометия, вводные слова - обособляются запятыми").br()
        .text("! Ты, вы - не обращения").br()
        .text("Внутри междометий нет запятых: ах ты, ух ты, ну их").br()
        .text("Вводные слова - источник инофрмации, эмоции, уверенность", "Вставные конструкции - дополнительная информация", "Вводные и вставные - к ним нельзя задать вопрос")),
    new TestItemSelfCheck(3, DBc("Запятые при парных союзах"), DBc()
        .text("___, с, с ___, - не парные", "___, с с ___, с - парные").br()
        .text("Парные", "Мы так увлеклись, ЧТО КОГДА увидили полночь на часах, ТО долго не могли в это поверить.").br()
        .text("Не парные", "Мы так увлеклись, ЧТО, КОГДА увидили полночь на часах, долго не могли в это поверить.").br()),
];
