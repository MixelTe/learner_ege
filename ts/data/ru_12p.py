inp = open("ts/data/ru_12p.txt", "r", encoding="utf8")
out = open("ts/data/ru_12p.ts", "w", encoding="utf8")

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
    if ch == "е": alch = "и"
    elif ch == "и": alch = "е"
    elif ch == "ю": alch = "я"
    elif ch == "я": alch = "ю"
    elif ch == "у": alch = "а"
    elif ch == "а": alch = "у"

    if len(word) - 1 != len(answ):
        # ch = ""
        # alch = "c"
        print(word, answ)

    if alch == "":
        c.add(ch)
    task = task.replace("..", f"[+{ch}|{alch}]")
    out.write(f'\tnew TestItemWordChoice({i}, "{task}"),\n')

print(" ".join(list(c)))

out.write("]\n")

inp.close()
out.close()
