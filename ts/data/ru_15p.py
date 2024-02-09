inp = open("ts/data/ru_15p.txt", "r", encoding="utf8")
out = open("ts/data/ru_15p.ts", "w", encoding="utf8")

out.write("""import { TestItem } from "../tester.js";
import { TestItemMultipleWordChoice } from "../testerItems.js";

const title = "Укажите все цифры, на месте которых пишется ";
const titleSingle = title + "одна буква Н";
const titleDouble = title + "НН";

export const data: TestItem[] = [
""")

for i, line in enumerate(inp):
    line = line.strip()
    t, answ, task = line.split("|")

    ra = "Н"
    wa = "НН"
    if t == "d":
        ra, wa = wa, ra

    for j in range(15):
        j = str(j + 1)
        if j in answ:
            task = task.replace(f"({j})", f"[+{j}|{ra}]")
        else:
            task = task.replace(f"({j})", f"[{j}|{wa}]")

    out.write(f'\tnew TestItemMultipleWordChoice({i}, "{task}", {"titleDouble" if t == "d" else "titleSingle"}),\n')

out.write("]\n")

inp.close()
out.close()
