for (i=0; i<100; i++) {
	var divThree = false;
	var divFive = false;
	if (i % 3 === 0) divThree = true;
	if (i % 5 === 0) divFive = true;
switch(divThree + " " + divFive) {
	case("true true"):
		console.log("fizzbuzz");
		break;
	case("true false"):
		console.log("fizz");
		break;
	case("false true"):
		console.log("buzz");
		break;
	case("false false"):
		console.log(i);
		break;
	}
}
