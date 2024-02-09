taskN = 20
inp = open(f"ts/data/ru_{taskN}p.txt", "r", encoding="utf8")
out = open(f"ts/data/ru_{taskN}p.ts", "w", encoding="utf8")

out.write("""import { TestItem } from "../tester.js";
import { TestItemMultipleWordChoice } from "../testerItems.js";

const title = "Расставьте все знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые)";

export const data: TestItem[] = [
""")

for i, line in enumerate(inp):
    line = line.strip()
    answ, task = line.split("|")

    if taskN == 18:
        task = task[1:-1]

    for j in range(10):
        j = str(j + 1)
        if (str(j) in answ) and (str(j) not in task):
            print(i, line)
        ts = f" ({j})"
        if ts not in task:
            ts = f"({j})"
        if j in answ:
            task = task.replace(ts, f"[+{j}|, ]")
        else:
            task = task.replace(ts, f"[{j}|, ]")

    out.write(f'\tnew TestItemMultipleWordChoice({i}, "{task}", title, true),\n')

out.write("]\n")

inp.close()
out.close()
