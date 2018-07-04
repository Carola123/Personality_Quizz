var QuizzGame = {}

QuizzGame.start = function () {
	document.getElementById("start").style.display = "none";
	document.getElementById("quizz").style.display = "block";

};

var ans1;
var ans2;
var ans3;
var ans4;
var ans5;
var totalScore = 0;


function check() {


	if (document.getElementById("q11").checked == true) {
		ans1 = document.getElementById("q11").value;
	}
	else if (document.getElementById("q12").checked == true) {
		ans1 = document.getElementById("q12").value;
	}
	else if (document.getElementById("q13").checked == true) {
		ans1 = document.getElementById("q13").value;
	}
	else if (document.getElementById("q14").checked == true) {
		ans1 = document.getElementById("q14").value;
	}
	else if (document.getElementById("q15").checked == true) {
		ans1 = document.getElementById("q15").value;
	}
	console.log(ans1);

	if (document.getElementById("q21").checked == true) {
		ans2 = document.getElementById("q21").value;
	}
	else if (document.getElementById("q22").checked == true) {
		ans2 = document.getElementById("q22").value;
	}
	else if (document.getElementById("q23").checked == true) {
		ans2 = document.getElementById("q23").value;
	}
	else if (document.getElementById("q24").checked == true) {
		ans2 = document.getElementById("q24").value;
	}
	else if (document.getElementById("q25").checked == true) {
		ans2 = document.getElementById("q25").value;
	}

	console.log(ans2);

	if (document.getElementById("q31").checked == true) {
		ans3 = document.getElementById("q31").value;
	}
	else if (document.getElementById("q32").checked == true) {
		ans3 = document.getElementById("q32").value;
	}
	else if (document.getElementById("q33").checked == true) {
		ans3 = document.getElementById("q33").value;
	}
	else if (document.getElementById("q34").checked == true) {
		ans3 = document.getElementById("q34").value;
	}
	else if (document.getElementById("q35").checked == true) {
		ans3 = document.getElementById("q35").value;
	}

	console.log(ans3);

	if (document.getElementById("q41").checked == true) {
		ans4 = document.getElementById("q41").value;
	}
	else if (document.getElementById("q42").checked == true) {
		ans4 = document.getElementById("q42").value;
	}
	else if (document.getElementById("q43").checked == true) {
		ans4 = document.getElementById("q43").value;
	}
	else if (document.getElementById("q44").checked == true) {
		ans4 = document.getElementById("q44").value;
	}
	else if (document.getElementById("q45").checked == true) {
		ans4 = document.getElementById("q45").value;
	}

	console.log(ans4);

	if (document.getElementById("q51").checked == true) {
		ans5 = document.getElementById("q51").value;
	}
	else if (document.getElementById("q52").checked == true) {
		ans5 = document.getElementById("q52").value;
	}
	else if (document.getElementById("q53").checked == true) {
		ans5 = document.getElementById("q53").value;
	}
	else if (document.getElementById("q54").checked == true) {
		ans5 = document.getElementById("q54").value;
	}
	else if (document.getElementById("q55").checked == true) {
		ans5 = document.getElementById("q55").value;
	}

	console.log(ans5);

	totalScore = parseInt(ans1) + parseInt(ans2) + parseInt(ans3) + parseInt(ans4) + parseInt(ans5);
	console.log(totalScore);

	document.getElementById("quizz").style.display = "none";
	document.getElementById("result").style.display = "block";
	var text = '';
	if (totalScore >= 40) {

		text = document.createTextNode("Congratulations! You are a good friend! :-)")

	}
	else {
		text = document.createTextNode("You are not a good friend! :-()")
	}

	var heading = document.createElement("h1")
	heading.style.color = "lightblue";
	heading.style.fontFamily = "Anton', sans-serif";
	heading.style.textAlign = "center";
	heading.appendChild(text);
	document.getElementById("result").appendChild(heading);

};




