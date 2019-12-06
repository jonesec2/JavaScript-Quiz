

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    // this.timeLeft = 0;
    // quizTimer();
}

var timeLeft = 75;


Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

// correct answer and next question
Quiz.prototype.guess = function (answer) {

    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        var rightAnswer = document.getElementById("rightWrong")
        rightAnswer.innerHTML = "<hr> Right! <hr>"
    }
    else {
        var wrongAnswer = document.getElementById("rightWrong")
        wrongAnswer.innerHTML = "<hr> Wrong! <hr>"
        timeLeft -= 10;
    } 
    this.questionIndex++;
}

// lets quiz know when to stop
Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
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

// creates the quiz on page
// function populate() {
//     if (quizVar.isEnded()) {
//         showScores();

//     }
//     else {
//         // show question
//         var element = document.getElementById("question");
//         element.innerHTML = quizVar.getQuestionIndex().text;

//         // show options
//         var choices = quizVar.getQuestionIndex().choices;
//         for (var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("choice" + i);
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }
//     }
// };

// defines guessing by buttons
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quizVar.guess(guess);
        populate();
    }
};

var questions = [
    new Question("Question 1: What does DOM stand for?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 2: You Like Jazz?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 3: Who is George Washington?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 4: Can a woodchuck chuck wood?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 5: Zzzsf sdddf sss", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg")
];

// create quiz
var quizVar = new Quiz(questions);

// quiz timer
var timerEl = document.getElementById("timer");
var highScoreName = ""

// function quizTimer() { 
//     // var timeLeft = 75;

//     var timeInterval = setInterval(function () {
//         timerEl.innerHTML = "<br> Time remaining: " + timeLeft + " second(s) <br><br>";
//         timeLeft--
//         console.log(timeLeft)

//         if (timeLeft <= -1) {
//             timeLeft = -1
//             clearInterval(timeInterval);
//             showScores();
//             localStorage.setItem("HighScore", timeLeft + 1)
//         }
//         if (quizVar.isEnded()) {
//             clearInterval(timeInterval);
//             localStorage.setItem("HighScore", timeLeft + 1)
//         }
//     }, 1000);
// };

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

// create timer function

//create timer score

// create questions here
var questions = [
    new Question("Question 1: What does DOM stand for?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 2: You Like Jazz?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 3: Who is George Washington?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 4: Can a woodchuck chuck wood?", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 5: Zzzsf sdddf sss", ["1. sdfg", "2. sdfg", "3. dfg", "4. fg"], "1. sdfg")
];


// display quiz
// populate();
