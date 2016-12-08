let score = 91;

switch(true) {
	case (score<50): letter = "F"; break
	case (score<60): letter = "E"; break
	case (score<70): letter = "D"; break
	case (score<80): letter = "C"; break
	case (score<90): letter = "B"; break
	case (score>90): letter = "A"; break
}

console.log(letter)