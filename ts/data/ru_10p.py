inp = open("ts/data/ru_10p.txt", "r", encoding="utf8")
out = open("ts/data/ru_10p.ts", "w", encoding="utf8")

out.write("""import { TestItem } from "../tester.js";
import { TestItemWordChoice } from "../testerItems.js";

export const data: TestItem[] = [
""")

c = set()

for i, line in enumerate(inp):
    line = line.strip()
    task, answ = line.split(": ")
    if len(answ.split(" ")) > 1:
        print(i, answ)
    words = task.split(" ")
    for word in words:
        if ".." in word:
            break
    ch = answ[word.index("..")]
    alch = ""
    if ch == "а": alch = "о"
    elif ch == "о": alch = "а"
    elif ch == "е": alch = "и"
    elif ch == "и": alch = "е|ы"
    elif ch == "т": alch = "д"
    elif ch == "д": alch = "т"
    elif ch == "ъ": alch = "ь| "
    elif ch == "ь": alch = "ъ| "
    elif ch == "ы": alch = "и|ъи"
    elif ch == "с": alch = "з"
    elif ch == "з": alch = "с"

    if len(word) - 1 != len(answ):
        ch = ""
        alch = "ъ"

    if alch == "":
        c.add(ch)
    task = task.replace("..", f"[+{ch}|{alch}]")
    out.write(f'\tnew TestItemWordChoice({i}, "{task}"),\n')

print(" ".join(list(c)))

out.write("]\n")

inp.close()
out.close()
