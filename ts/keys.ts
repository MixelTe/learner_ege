const keys = [
	"theme",
	"statistics",
	"trainerSeed",
	"trainerTurn",
	"trainerTheme",
	"dayStatistic",
	"dayLongest",
	"animDisable",
	"customTheme",
	"customColors",
	"completeCount",
	"lessAdv",
] as const

export const Keys = {} as { [key in (typeof keys)[number]]: string };

for (const key of keys)
	Keys[key] = "learner_ege-" + key;
