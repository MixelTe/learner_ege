import { DBc } from "../docBuilder.js";
import { TestItemSelfCheck } from "../testerItems.js";
export const data = [
    new TestItemSelfCheck(0, DBc("НЕ с глаголами, деепричастиями и краткими причастиями"), DBc("Всегда раздельно", "Не поехал, не сделав, не завершён").br().textErr("!! ").text("Приставка НЕДО:").text("НЕДОедают дети в Африке (недостаточо еды)", "НЕ доедают дети кашу (не хотят)").br().textErr("!! ").text("Предлоги: Несмотря на, невзирая на").text("Несмотря на плохую погоду", "Ответил, не смотря на него")),
    new TestItemSelfCheck(1, DBc("НЕ с краткими прилагательными с модальным значением (похожи на глагол)"), DBc("Всегда раздельно", "Не рад, не горд, не намерен")),
    new TestItemSelfCheck(2, DBc("НЕ с причастиями"), DBc("Раздельно если:").ul("Есть противопоставление с союзом А", "Есть зависимое слово").textErr("!! ").text("Неупотребляемые без НЕ, пишутся слитно").hr().text("Неотправленное, НО важное письмо", "Не отправленное, А только написанное письмо").br().text("Непрочитанная книга", "Не прочитанная МНОЙ книга").br().text("Негодующий, ненавидящий")),
    new TestItemSelfCheck(3, DBc("НЕ с числительными"), DBc("Всегда раздельно", "Не два, не полтора")),
    new TestItemSelfCheck(4, DBc("НЕ с существительными"), DBc("Раздельно, если есть противопоставление с союзом А", "").textErr("!! ").text("Неупотребляемые без НЕ, пишутся слитно").hr().text("Это неправда, НО приятно", "Это не правда, А ложь").br().text("Невежа, неуч")),
    new TestItemSelfCheck(5, DBc("НЕ с прилагательными"), DBc("Раздельно если:").ul("Есть противопоставление с союзом А", "Есть усилительные слова: далеко не, отнюдь не, вовсе не, ни... не (ниЧУТЬ не)", "Относительные и притяжательные", "Цвета и вкус", "Сравнительная степень").textErr("!! ").text("Неупотребляемые без НЕ, пишутся слитно").hr().text("Неширокая, НО длинная река", "Не широкая, А узкая река").br().text("Совсем не горячий, вовсе не сложный", "Стол не деревянный, не папина книга", "Не красный, не горький", "Не лучше, не худший", "Ненавистный")),
    new TestItemSelfCheck(6, DBc("НЕ с наречиями"), DBc("Раздельно если:").ul("Есть противопоставление с союзом А", "Есть усилительные слова: далеко не, отнюдь не, вовсе не, ни... не (ниЧУТЬ не)", "Оканчивается не на О, Е", "Если пишется через дефис").textErr("!! ").text("Неупотребляемые без НЕ, пишутся слитно").hr().text("Негромко, НО заметно зазвенел", "Не громко, А тихо зазвенел").br().text("Совсем не громко, вовсе не сложно", "Нелепо", "Не очень, не вполне, не совсем", "не по-товарищески, не по-русски")),
    new TestItemSelfCheck(7, DBc("НЕ с местоимениями"), DBc("Раздельно, кроме отрицательных", "Не я, не его, не им", "Некого, нечего, нечем")),
    new TestItemSelfCheck(8, DBc("НЕ со словами, оканчивающимися на МЫЙ"), DBc("Раздельно в творительном падеже, т.к. причастие").br().text("Невидимые миру цвета - прилагательное, Д.п.", "Не видимые мною цвета - причастие, Т.п.")),
    new TestItemSelfCheck(9, DBc("НЕ после 'совсем'"), DBc("В значении 'очень' - слитно", "В значении 'отнюдь не' - отдельно").br().text("'очень' - на столе совсем небольшая коробочка", "'отнюдь не' - он был совсем не компетентным")),
];
