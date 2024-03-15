import { DBc } from "../docBuilder.js";
import { createFormulas } from "../formulasBuilder.js";
import { TestItemSelfCheck } from "../testerItems.js";
export const data = [
    new TestItemSelfCheck(0, DBc("Признак параллельности прямой и плоскости"), DBc("Прямая параллельна плоскости, если она параллельна какой либо прямой, лежащей в плоскости")),
    new TestItemSelfCheck(1, DBc("Угол между прямой и плоскостью"), DBc("Угол между прямой и плоскостью - это угол между прямой и её проекцией на плоскость")),
    new TestItemSelfCheck(2, DBc("Перпендикулярность прямой и плоскости"), DBc("Прямая перпендикулярна плоскости, если она перпендикулярна двум пересекающимся прямым, лежащим в этой плоскости.")),
    new TestItemSelfCheck(3, DBc("Признак параллельности плоскостей"), DBc("Плоскости параллельны, если две пересекающиеся прямые одной плоскости соответственно параллельны двум пересекающимся прямым другой плоскости")),
    new TestItemSelfCheck(4, DBc("Угол между плоскостями"), DBc().svg("math_2-4.svg").text("Угол между плоскостями — это угол между перпендикулярами к линии их пересечения, проведенными в этих плоскостях")),
    new TestItemSelfCheck(5, DBc("Расстояние от точки до плоскости"), DBc("Расстояние от точки до плоскости - это длина перпендикуляра, опущенного из точки на плоскость")),
    new TestItemSelfCheck(6, DBc("Угол между скрещивающимися прямыми"), DBc("Угол между скрещивающимися прямыми равен углу между параллельными им прямыми, лежащими в одной плоскости")),
    new TestItemSelfCheck(7, DBc("Расстояние между скрещивающимися прямыми"), DBc("Расстояние между скрещивающимися прямыми равно длине их общего перпендикуляра").br().text("Другими словами, оно равно расстоянию между параллельными плоскостями, в которых лежат эти прямые")),
    new TestItemSelfCheck(8, DBc("Теорема о трёх перпендикулярах"), DBc().svg("math_2-8.svg").formula(createFormulas("m 'in 'a", "a - наклонная", "a_1 - проекция наклонной на плоскость 'a", "m '/ a 'ab m '/ a_1"))),
    new TestItemSelfCheck(9, DBc("Площадь прямоугольной проекции фигуры"), DBc().svg("math_2-9.svg").formula(createFormulas("S_{A_1B_1C_1} = S_{ABC} * @{cos}'f")).br().formula(createFormulas("'f")).text(" - угол между плоскостью фигуры и плоскостью проекции")),
];