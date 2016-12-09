var wordsArray = ["donkey", "horse", "sesquipedalian", "supercalifragilisticexpealidocious"]
var maxLength = 7;
var shortWordsArray = [];

for (var i in wordsArray) {
	if (wordsArray[i].length < maxLength)  
		shortWordsArray.push(wordsArray[i]);
}

console.log("Filtering using a maximum word length of " + maxLength + " letters:");
console.log(shortWordsArray);

