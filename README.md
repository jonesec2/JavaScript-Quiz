# JavaScript-Quiz
Creating a website with a timed quiz, to test the user's knowledge of JavaScript.


## Description
This website will test the users knowledge of Javascript with a fun game! The user will be able to check the rules before playing, then start the quiz.

After the quiz has started a timer will show the user how much time they have left.

Answering a question incorrectly will minus the users remaining time.

After all questions are answered, or timer = 0; then user is prompted to enter name for high score.

The users score is equal to time remaining.

## Table of contents

* [Website_Design](#Website_Design)
* [Quiz](#Quiz)
* [High_Score](#High_Score)
* [Credits](#Credits)

## Website_Design
This website was designed to store the functionality of the test, and high scores separately. As well as house the quiz start, quiz, high scores, and rules on separate html docs.

All html follow similar patterns of having a navigation bar, and footer, with main information displayed in divs.

Users are prompted with large buttons for obvious steps.

These include starting the quiz, answering questions, and storing their name for high scores
## Quiz

The quiz is a created function, that adds prototypes as it progresses.

Question arrays were made to be called by the question, and choice / answer logic.
Buttons were set up in the HTML for Javascript to later dynamically assign the different questions / choices based on the current question.

As the user chooses options, the logic keeps track of which answers are correct.

A timer is added to the page, and if any answer is incorrect time is deducted from total.

Logic is in place for the quiz to stop, and display a new page created entirely on the spot, using only javascript and references to already existing Id's.

## High_Score
After quiz ends, the user is prompted to enter their name. The users name and final score are saved to local storage.

The High Score logic then checks the local storage and writes to the page. The user is prompted if they would like to delete most recent high score to start fresh.

## Credits
As I continue this journey and collaborate with more colleagues, I will add their names and contact info to this list.

For now I would like to think UoR Coding Boot camp instructors, John and Greg, and the TA's. As well as my supportive family.
