import { DayStatistics } from "./dayStatistics.js";
import { Keys } from "./keys.js";
const code = 96354999;
export function metrika_pageSwitch(prevPage, page, title) {
    saveCall(() => ym(code, "hit", "#" + page, {
        params: {
            title,
            referer: "#" + prevPage,
        }
    }));
}
export function metrika_event(event) {
    saveCall(() => ym(code, "reachGoal", event));
}
export function metrika_setParams() {
    const theme = localStorage.getItem(Keys.theme) || "auto";
    const dark = theme != "auto" ? theme == "dark" : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    saveCall(() => ym(code, "userParams", {
        darkTheme: dark,
        defaultTheme: theme == "auto",
        customTheme: localStorage.getItem(Keys.customTheme) == "1",
        disableAnim: localStorage.getItem(Keys.animDisable) == "1",
        lessAdv: localStorage.getItem(Keys.lessAdv) == "1",
        longestDays: DayStatistics.getLongest(),
    }));
}
function saveCall(f) {
    if (!Object.hasOwn(window, "ym")) {
        console.error("metrika is undefined");
        return;
    }
    try {
        f();
    }
    catch (e) {
        console.error(e);
    }
}
let bottomAdvEnabled = false;
export function enableBottomAdv() {
    if (bottomAdvEnabled)
        return;
    bottomAdvEnabled = true;
    Ya.Context.AdvManager.render({
        "blockId": "R-A-5910277-1",
        "renderTo": "yandex_rtb_R-A-5910277-1",
        darkTheme: isDarkTheme(),
    });
}
export function showAdvFullscreen(onClose) {
    if (Ya.Context.AdvManager.getPlatform() === "desktop")
        Ya.Context.AdvManager.render({
            "blockId": "R-A-5910277-2",
            "type": "fullscreen",
            "platform": "desktop",
            darkTheme: isDarkTheme(),
            onClose,
        });
    else
        Ya.Context.AdvManager.render({
            "blockId": "R-A-5910277-4",
            "type": "fullscreen",
            "platform": "touch",
            darkTheme: isDarkTheme(),
            onClose,
        });
}
export function showAdvRewarded(onRewarded) {
    if (Ya.Context.AdvManager.getPlatform() === "desktop")
        Ya.Context.AdvManager.render({
            "blockId": "R-A-5910277-3",
            "type": "rewarded",
            "platform": "desktop",
            darkTheme: isDarkTheme(),
            onRewarded,
        });
    else
        Ya.Context.AdvManager.render({
            "blockId": "R-A-5910277-5",
            "type": "rewarded",
            "platform": "touch",
            darkTheme: isDarkTheme(),
            onRewarded,
        });
}
function isDarkTheme() {
    const theme = localStorage.getItem(Keys.theme) || "auto";
    return theme != "auto" ? theme == "dark" : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
