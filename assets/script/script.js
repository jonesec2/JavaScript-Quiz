function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    // this.timeLeft = 0;
    // quizTimer();
}

// setting question choices
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// let's quiz know if choice is correct answer
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


// quiz timer
var submitButton = document.getElementById("submitHighScore")
var highScoreInput = document.querySelector("#scoreName")
var msgDiv = document.querySelector("#msg");


function showScores() {
    var gameOverHTML = "<hr><h1 class='gameOver'>Game Over!</h1>";
    // gameOverHTML += "<h2 id='score'> Your score: " + localStorage.getItem("HighScore") + "</h2>";
    gameOverHTML += "<br><br><h4 id='enterScore'> Enter your name to the High Scores list</h4>";
    gameOverHTML += "<form method='POST'><label for='highScore'>Name: </label> <input type='text' name='highScore' id='scoreName' placeholder='Spongebob'/> <button id='submitHighScore'>Submit</button></form> ";
    gameOverHTML += "<div id='msg'></div> <hr>"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    document.getElementById("btn0").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("btn1").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("btn2").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("btn3").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("question").setAttribute("style", "opacity: 0; pointer-events: none;");


    var submitButton = document.getElementById("submitHighScore")
    var highScoreInput = document.querySelector("#scoreName")
    var msgDiv = document.querySelector("#msg");


    function displayMessage(type, message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute("class", type);
    }


    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        var scoreName = highScoreInput.value.trim();
        var goToScore = "<h1><a id='start' href='highScore.html'> See High Scores <span </a></h1>"

        if (scoreName === "") {
            displayMessage("error", "Please enter your name :)");
        } else {
            displayMessage("success", element.innerHTML = goToScore)
            localStorage.setItem("Name", scoreName);
        }
    })
};


// use local storage
var usersName = document.querySelector("#usersName");
var usersScore = document.querySelector("#usersScore");
var completeBtn = document.getElementById("complete");

var localName = localStorage.getItem("Name");
var localScore = localStorage.getItem("HighScore");
if (usersName !== null) {
    usersName.innerHTML = localName;
} else {
};
if (usersScore !== null) {
    usersScore.textContent = localScore;
} else {
};


completeBtn.addEventListener("click", function(event) {

    var element = document.getElementById(usersName);
    element.parentNode.remove(element);
    
});
  