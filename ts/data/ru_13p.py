from re import compile
inp = open("ts/data/ru_13p.txt", "r", encoding="utf8")
out = open("ts/data/ru_13p.ts", "w", encoding="utf8")

out.write("""import { TestItem } from "../tester.js";
import { TestItemWordChoice } from "../testerItems.js";

export const data: TestItem[] = [
""")

reCh = compile(r"[\(\)а-яё]")
c = set()

for i, line in enumerate(inp):
    line = line.strip()
    answ, task = line.split("|")
    wi = task.index("(не)")
    we = wi
    while we < len(task) and reCh.match(task[we]):
        we += 1
    word = task[wi + 4:we]
    ra = "не" + word
    wa = "не " + word
    if answ != "+":
        ra, wa = wa, ra
    out.write(f'\tnew TestItemWordChoice({i}, "{task[:wi]}[+{ra}|{wa}]{task[we:]}"),\n')

print(" ".join(list(c)))

out.write("]\n")

inp.close()
out.close()
