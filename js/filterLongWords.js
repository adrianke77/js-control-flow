let wordsArray = ["donkey", "horse", "sesquipedalian", "supercalifragilisticexpealidocious"]
let maxLength = 7;
let shortWordsArray = [];

for (i in wordsArray) {
	wordsArray[i].length < maxLength ? 
	shortWordsArray.push(wordsArray[i]) : 
	null;
}

console.log(maxLength)

