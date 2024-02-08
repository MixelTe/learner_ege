inp = open("ts/data/ru_11p.txt", "r", encoding="utf8")
out = open("ts/data/ru_11p.ts", "w", encoding="utf8")

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
    elif ch == "о": alch = "а|ё|ы"
    elif ch == "е": alch = "и|о"
    elif ch == "ё": alch = "о"
    elif ch == "ю": alch = "я"
    elif ch == "ц": alch = "тс"
    elif ch == "ч": alch = "щ"
    elif ch == "ы": alch = "о"
    elif ch == "щ": alch = "ч"
    elif ch == "и": alch = "е"
    elif ch == "с": alch = "ц"
    elif ch == "к": alch = "с"
    elif ch == "я": alch = "е|и"
    elif ch == "_":
        ch == ""
        alch = "т"

    if len(word) - 1 != len(answ):
        ch = ""
        alch = "c"
        # print(word, answ)

    if alch == "":
        c.add(ch)
    task = task.replace("..", f"[+{ch}|{alch}]")
    out.write(f'\tnew TestItemWordChoice({i}, "{task}"),\n')

print(" ".join(list(c)))

out.write("]\n")

inp.close()
out.close()
