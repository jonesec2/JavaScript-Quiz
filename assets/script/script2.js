function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();

    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

 
 
function showScores() {
    var gameOverHTML = "<h1 class='gameOver'>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    gameOverHTML += "<h2> <a style='color: white' class='nav-link' href='highScore.html'>High Scores</a> </h2>"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    document.getElementById("btn0").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("btn1").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("btn2").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("btn3").setAttribute("style", "opacity: 0; pointer-events: none;");
    document.getElementById("question").setAttribute("style", "opacity: 0; pointer-events: none;");
    push

};

// store high scores in local storage

// create timer function

//create timer score
 
// create questions here
var questions = [
    new Question("Question 1: What does DOM stand for?", ["1. sdfg", "2. sdfg","3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 2: You Like Jazz?", ["1. sdfg", "2. sdfg","3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 3: Who is George Washington?", ["1. sdfg", "2. sdfg","3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 4: Can a woodchuck chuck wood?", ["1. sdfg", "2. sdfg","3. dfg", "4. fg"], "1. sdfg"),
    new Question("Question 5: Zzzsf sdddf sss", ["1. sdfg", "2. sdfg","3. dfg", "4. fg"], "1. sdfg")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();