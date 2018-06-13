var QuizzGame = {}

QuizzGame.start = function () {
	document.getElementById("start").style.display = "none";
	document.getElementById("quizz").style.display = "block";
	QuizzGame.clearBoard();
}

QuizzGame.clearBoard = function () {
	document.getElementById("board").innerHTML = "";
}

var score = 0;
function saver(q, points) {
	score += points
	console.log(score);
}
function total() {
	if (score > 40) {
		alert("Congratulations!!!, you are a good friend, for you honesty is basic in a friendship. A good friend like you, will always be there when a frend need it.");
	}
	else {
		alert("You are not a good friend!:(");
	}
}



