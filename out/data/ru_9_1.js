import { DBc } from "../docBuilder.js";
import { TestItemSelfCheck } from "../testerItems.js";
const v1 = () => DBc().text("Перед суффиксом а: и", "В остальных случаях: е").hr();
const v2 = (a) => DBc().text("Зависит от ударения").hr().text(`Без ударения: ${a}`);
const v3 = (...a) => DBc().text("Зависит от последней согласной корня").hr().text(...a);
const v4 = () => DBc().text("Зависит от значения").hr();
export const data = [
    new TestItemSelfCheck(0, DBc("бер/бир"), v1().text("бир(а) - собИрАть", "бер - собЕрет")),
    new TestItemSelfCheck(1, DBc("дер/дир"), v1().text("дир(а) - обдИрАть", "дер - обдЕрет")),
    new TestItemSelfCheck(2, DBc("мер/мир"), v1().text("мир(а) - замИрАть", "мер - замЕреть").br().text("Только в значении 'мёртвый, неподвижный'", "В значении 'мирный' - всегда -мир-")),
    new TestItemSelfCheck(3, DBc("тер/тир"), v1().text("тир(а) - обтИрАть", "тер - обтЕреть")),
    new TestItemSelfCheck(4, DBc("пер/пир"), v1().text("пир(а) - запИрАть", "пер - запЕреть")),
    new TestItemSelfCheck(5, DBc("жег/жиг"), v1().text("жиг(а) - выжИгАть", "жег - выжЕг")),
    new TestItemSelfCheck(6, DBc("стел/стил"), v1().text("стил(а) - расстИлАть", "стел - расстЕлить")),
    new TestItemSelfCheck(7, DBc("блест/блист"), v1().text("блист(а) - блИстАть", "блест - блестЕть")),
    new TestItemSelfCheck(8, DBc("чет/чит"), v1().text("чит(а) - вычИтАть", "чет - вычЕт").br().text("Исключения: сочЕтать, сочЕтание")),
    new TestItemSelfCheck(9, DBc("кос/кас"), v1().text("кас(а) - кАсАние", "кос - кОснуться")),
    new TestItemSelfCheck(10, DBc("а(я)/им(ин)"), DBc().text("Перед суффиксом а: и", "В остальных случаях: а(я)").hr().text("им(ин) - снИмАть, сжИмАть", "а(я) - снЯть, сжАть")),
    new TestItemSelfCheck(11, DBc("гар/гор"), v2("гор - загорЕл, горЕлый").br().text("Исключения: выгАрки, изгАрь, пригАр")),
    new TestItemSelfCheck(12, DBc("зар/зор"), v2("зар - зарЯ, озарЕние").br().text("Исключения: зОревать, зОрянка")),
    new TestItemSelfCheck(13, DBc("клан/клон"), v2("клон - наклонЯть, склонЕние")),
    new TestItemSelfCheck(14, DBc("твар/твор"), v2("твор - творИть, творЕние").br().text("Исключения: утвАрь")),
    new TestItemSelfCheck(15, DBc("плав/плов"), v2("плав - поплавОк, плавунЕц").br().text("Исключения: плОвец, плОвчиха, плОвцы, плЫвун")),
    new TestItemSelfCheck(16, DBc("лаг/лож"), v3("лаг/лож", "лаГ - полаГать", "лоЖ - полоЖить").br().text("Исключения: полОг")),
    new TestItemSelfCheck(17, DBc("скак/скоч"), v3("скак/скоч", "скаК - скаКать", "скоЧ - скоЧет").br().text("Исключения: скАчок")),
    new TestItemSelfCheck(18, DBc("раст/ращ/рос"), v3("раст/ращ/рос", "расТ - расТение", "раЩ - выраЩивать", "роС - выроСли").br().text("Исключения: Ростов, Ростислав, рОсток, рОстовщик, вырОст, подрОстоковый, отрАсль, отрАслевой")),
    new TestItemSelfCheck(19, DBc("мок/моч/мак"), v4().text("пропускать жидкость: мок(моч) - вымокнуть", "погружать в жидкость: мак - макать")),
    new TestItemSelfCheck(20, DBc("равн/ровн"), v4().text("одинаковый, равный: равн", "гладкий, ровный: ровн").br().text("Исключения: рОвесник, урОвень, порОвну, рАвнина, рАвняйсь, рАвнение")),
];
