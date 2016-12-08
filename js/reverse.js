let inputString = 'building';
let  inputArray = inputString.split("");
let outArray = [];

origArrayLength = inputArray.length; //array keeps getting shorter from pops so can't .length in loop directly
for (i = 0; i <origArrayLength; i++) {
	outArray.push(inputArray.pop());
};

console.log(outArray.join(""))