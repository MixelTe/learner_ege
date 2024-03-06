import { DBc } from "../docBuilder.js";
import { createFormulas } from "../formulasBuilder.js";
import { TestItemSelfCheck } from "../testerItems.js";
export const data = [
    new TestItemSelfCheck(0, DBc("Вписанные в окружность углы"), DBc().svg("math_1-0.svg").ul("Вписанный угол равен половине градусной меры дуги, на которую опирается", "Вписанные углы, опирающиеся на одну и ту же дугу, равны").svg("math_1-0_1.svg").text("Вписанный угол, опирающийся на диаметр - прямой")),
    new TestItemSelfCheck(1, DBc("Центральный угол окружности"), DBc().svg("math_1-1.svg").text("Центральный угол равен градусной мере дуги, на которую опирается")),
    new TestItemSelfCheck(2, DBc("Касательная к окружности"), DBc().svg("math_1-2.svg").ul("Касательная перпендикулярна к радиусу, проведенному в точку касания", "Отрезки касательных к окружности, проведенных из одной точки, равны")),
    new TestItemSelfCheck(3, DBc("Теорема о секущей и касательной окружности"), DBc().svg("math_1-3.svg").formula(createFormulas("a^2 = b*(b+c)"))),
    new TestItemSelfCheck(12, DBc("Радиус окружности, описанной вокруг правильного треугольника"), createFormulas("R = {a\\{3}}/{3}")),
    new TestItemSelfCheck(13, DBc("Радиус окружности, вписанной в правильный треугольник"), createFormulas("r = {a\\{3}}/{6}")),
    new TestItemSelfCheck(14, DBc("Радиус окружности, описанной вокруг правильного шестиугольника"), createFormulas("R = a")),
    new TestItemSelfCheck(15, DBc("Радиус окружности, вписанной в правильный шестиугольника"), createFormulas("r = {a\\{3}}/{2}")),
    new TestItemSelfCheck(33, DBc().svg("math_1-33.svg").text("Угол между хордой и касательной, проведенной через конец этой хорды"), DBc().svg("math_1-33.svg").formula(createFormulas("'<MCB = {1}/{2}u{CB}"))),
    new TestItemSelfCheck(34, DBc().svg("math_1-34.svg").text("Угол между пересекающимися хордами"), DBc().svg("math_1-34.svg").formula(createFormulas("'f = {u{AD} + u{BC}}/{2}'"))),
    new TestItemSelfCheck(35, DBc().svg("math_1-35.svg").text("Угол между секущими"), DBc().svg("math_1-35.svg").formula(createFormulas("'f = {u{BD} - u{AC}}/{2}'"))),
    new TestItemSelfCheck(6, DBc("Смежные углы"), DBc().svg("math_1-6.svg").formula(createFormulas("'a + 'b = 180'0"))),
    new TestItemSelfCheck(7, DBc("Вертикальные углы"), DBc().svg("math_1-7.svg").formula(createFormulas("'a = 'b"))),
    new TestItemSelfCheck(8, DBc("Накрест лежащие углы"), DBc().svg("math_1-8.svg").formula(createFormulas("'a = 'b"))),
    new TestItemSelfCheck(9, DBc("Соответственные углы"), DBc().svg("math_1-9.svg").formula(createFormulas("'a = 'b"))),
    new TestItemSelfCheck(10, DBc("Односторонние углы"), DBc().svg("math_1-10.svg").formula(createFormulas("'a + 'b = 180'0"))),
    new TestItemSelfCheck(11, DBc("Внешний угол треугольника"), DBc().svg("math_1-11.svg").formula(createFormulas("'a + 'f = 180'0"))),
    new TestItemSelfCheck(16, DBc("Признаки равенства треугольников"), DBc().ul("По трем сторонам", "По углу и двум прилежащим к нему сторонам", "По стороне и двум прилежащим к ней углам")),
    new TestItemSelfCheck(17, DBc("Признаки подобия треугольников"), DBc().ul("По двум углам", "По трем сторонам", "По углу и двум прилежащим к нему сторонам")),
    new TestItemSelfCheck(18, DBc("Медианы треугольника"), DBc().svg("math_1-18.svg").text("Три медианы треугольника пересекаются в одной точке и делятся в ней в отношении 2:1, считая от вершины")),
    new TestItemSelfCheck(19, DBc("Биссектрисы треугольника"), DBc("Биссектрисы треугольника пересекаются в одной точке", "Эта точка является центром окружности, вписанной в треугольник")),
    new TestItemSelfCheck(20, DBc("Свойство биссектрисы треугольника"), DBc().svg("math_1-20.svg").text("Биссектриса треугольника делит противоположную сторону в отношении длин прилежащих сторон.").formula(createFormulas("{m}/{n} = {a}/{b}"))),
    new TestItemSelfCheck(21, DBc("Центр окружности, описанной вокруг треугольника"), DBc("Точка пересечения серединных перпендикуляров к сторонам треугольника")),
    new TestItemSelfCheck(22, DBc("Средняя линия треугольника"), DBc().svg("math_1-22.svg").text("Отрезок, соединяющий середины его сторон", "").formula(createFormulas("m = {a}/{2}; m '| a"))),
    new TestItemSelfCheck(23, DBc("Сумма углов треугольника"), createFormulas("180'0")),
    new TestItemSelfCheck(4, DBc("Теорема Пифагора"), createFormulas("c^2 = a^2 + b^2")),
    new TestItemSelfCheck(36, DBc("Теорема синусов"), DBc().svg("math_1-36.svg").formula(createFormulas("{a}/{@{sin}'<A} = {b}/{@{sin}'<B} = {c}/{@{sin}'<C} = 2R", "R - радиус описанной окружности"))),
    new TestItemSelfCheck(39, DBc("Теорема косинусов"), DBc().svg("math_1-39.svg").formula(createFormulas("c^2 = a^2 + b^2 - 2ab*@{cos}'<C"))),
    new TestItemSelfCheck(40, DBc("Теорема о пропорциональных отрезках"), DBc().svg("math_1-40.svg").formula(createFormulas("{OA}/{OB} = {OC}/{OD}")).text("", "Параллельные прямые, пересекающие стороны угла, отсекают от его сторон пропорциональные отрезки")),
    new TestItemSelfCheck(5, DBc("Свойства прямоугольного параллелепипеда"), DBc().svg("math_1-5.svg").ul("Все грани - прямоугольники", "Противоположные грани равны и параллельны", "Все двугранные углы – прямые", "Диагонали равны", "Диагонали пересекаются в одной точке и делятся в ней пополам")),
    new TestItemSelfCheck(24, DBc("Сумма углов выпуклого четырехугольника"), createFormulas("360'0")),
    new TestItemSelfCheck(25, DBc("Середины сторон выпуклого четырехугольника"), DBc().svg("math_1-25.svg").text("Середины сторон выпуклого четырехугольника являются вершинами параллелограмма")),
    new TestItemSelfCheck(26, DBc("Средняя линия трапеции"), DBc().svg("math_1-26.svg").formula(createFormulas("MN '| AD; MN '| BC", "MN = {a + b}/{2}"))),
    new TestItemSelfCheck(27, DBc("Отрезок, соединяющий середины диагоналей трапеции"), DBc().svg("math_1-27.svg").text("Лежит на средней линии", "P - середина AC, Q - середина BD").formula(createFormulas("PQ = {a - b}/{2}"))),
    new TestItemSelfCheck(28, DBc("Замечательное свойство трапеции"), DBc().svg("math_1-28.svg").text("Середины оснований, точка пересечения диагоналей трапеции и точка пересечения продолжений ее боковых сторон лежат на одной прямой").hr().formula(createFormulas("K = AB 'i CD", "O = AC 'i BD", "E - середина ВС, M – середина АD", "K, O, E, M - лежат на одной прямой"))),
    new TestItemSelfCheck(29, DBc("Диагонали параллелограмма"), DBc("Диагонали параллелограмма в точке пересечения делятся пополам")),
    new TestItemSelfCheck(30, DBc("Биссектриса угла параллелограмма"), DBc().svg("math_1-30.svg").text("Биссектриса угла параллелограмма отсекает от него равнобедренный треугольник")),
    new TestItemSelfCheck(31, DBc("Свойства ромба"), DBc().ul("Все стороны равны", "Диагонали перпендикулярны", "Диагонали - биссектрисы углов")),
    new TestItemSelfCheck(32, DBc("Свойства прямоугольника"), DBc().ul("Все углы прямые", "Диагонали равны")),
    new TestItemSelfCheck(37, DBc("Описанный четырехугольник"), DBc().svg("math_1-37.svg").formula(createFormulas("a + c = b + d")).text("", "Окружность можно вписать в четырехугольник тогда и только тогда, когда суммы его противоположных сторон равны")),
    new TestItemSelfCheck(38, DBc("Вписанный четырехугольник"), DBc().svg("math_1-38.svg").formula(createFormulas("'<A + '<C = '<B + '<D = 180'0")).text("", "Окружность можно описать вокруг четырехугольника тогда и только тогда, когда суммы его противоположных углов равны 180°")),
];
