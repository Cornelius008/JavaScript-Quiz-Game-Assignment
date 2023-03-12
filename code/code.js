//The code that was used to set the buttons within the form of HTML for only question 1.
let timerText = document.querySelector('#timer');
let instruction1 = document.querySelector('#instructor1')
let button1 = document.querySelector('#Leitrim');
let button2 = document.querySelector('#Louth');
let button3 = document.querySelector('#Cork');
let button4 = document.querySelector('#Rosscommon');
let option1 = document.querySelector("#btn1Option");
let option2 = document.querySelector("#btn2Option");
let option3 = document.querySelector("#btn3Option");
let option4 = document.querySelector("#btn4Option");
let instruction2 = document.querySelector('#instructor2')

//PlayerNameFunction that displays the players name using the intputs from my index.
function PlayerNameFunction() {
    let userInput = document.querySelector("#userInput");
    let PlayerNameText = document.querySelector("#PlayerNameText");

    PlayerNameText.innerHTML = "Enjoy The Game: " + userInput.value;

}


//Used to track the current turn.
let turn = 0;

//Question Class uses a constructor that is used to update the images, text and correct answer by the code below CheckAnswerFunction.
class Question {
    constructor(prompt, option1, option2, option3, option4, src1, src2, src3, src4, answer) {
        this.prompt = prompt
        this.option1 = option1
        this.option2 = option2
        this.option3 = option3
        this.option4 = option4
        this.src1 = src1
        this.src2 = src2
        this.src3 = src3
        this.src4 = src4
        this.answer = answer
    }
}

//Q1
q1 = new Question(
    "What is the smallet County in Ireland",
    "Letrim", "Louth", "Cork", "Rosscommon",
    "images/Letrim.png",
    "images/Dublin.png",
    "images/Wexford.png",
    "images/Galway.png",
    "Leitrim"
)
//Q2
q2 = new Question(
    "What is the most populated county in Ireland",
    "Cork", "Dublin", "Wexford", "Galway",
    "images/Cork.png",
    "images/Dublin.png",
    "images/Wexford.png",
    "images/Galway.png",
    "",
)
//Q3
q3 = new Question(
    "What county is Newgrange located in?",
    "Sligo", "Meath", "Wicklow", "Carlow",
    "images/Sligo.png",
    "images/Meath.png",
    "images/Wicklow.png",
    "images/Carlow.png",
    ""
)
//Q4
q4 = new Question(
    "Where is the Giants Causeway located?",
    "Antrim", "Down", "Armagh", "Mayo",
    "images/Antrim.png",
    "images/Down.png",
    "images/Armagh.png",
    "images/Mayo.png",
    "Antrim"
)
//Q5
q5 = new Question(
    "Where can the Cliffs of Moher be found?",
    "Kilkenny", "Longford", "Clare", "Kerry",
    "images/Killkenny.png",
    "images/Longford.png",
    "images/Clare.png",
    "images/Kerry.png",
    "Clare"
)
q6 = new Question(
    "Where is the Ards Peninsula?",
    "Antrim", "Down", "Armagh", "Mayo",
    "images/Antrim.png",
    "images/Down.png",
    "images/Armagh.png",
    "images/Mayo.png",
    "Down"
)
q7 = new Question(
    "What county is know as being the festival capital?",
    "Galway", "Wicklow", "Cork", "Wexford",
    "images/Galway.png",
    "images/Wicklow.png",
    "images/Cork.png",
    "images/Wexford.png",
    "Galway"
)
q8 = new Question(
    "Where can you find the mountain Carrauntoohil?",
    "Letrim", "Sligo", "Longford", "Kerry",
    "images/Letrim.png",
    "images/Sligo.png",
    "images/Longford.png",
    "images/Kerry.png",
    "Kerry"
)
q9 = new Question(
    "The highest cliffs in Croaghaun, Irealnd are in what county?",
    "Mayo", "Rosscommon", "Clare", "Antrim",
    "images/Mayo.png",
    "images/Rosscommon.png",
    "images/Clare.png",
    "images/Antrim.png",
    "Mayo"
)
q10 = new Question(
    "What county is the best in Ireland?",
    "Carlow", "Meath", "Killkenny", "Cork",
    "images/Carlow.png",
    "images/Meath.png",
    "images/Killkenny.png",
    "images/Cork.png",
    "Cork"
)
//All of the questions set into an Array.
//This is be used to determine what question I am on.
let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
//CheckAnswer Function that is to determine what image box is correct.
function checkAnswer(e) {
    console.log("CHECKING  ")
    clickedImage = this;
    imageFigure = clickedImage.nextElementSibling;
    guess = imageFigure.innerHTML;
    console.log(guess)
    let currentQuestion = questions[turn]
    console.log(currentQuestion.answer)

    if (guess === currentQuestion.answer) {
        console.log("correct");
        document.body.style.background = 'green';
    }
    else {
        console.log("wrong");
        document.body.style.background = 'red';
        
    }
    //This updates the turn from 0 onwords, as seen above Question Class.
    turn += 1
    //This turn updates my current questions.
    currentQuestion = questions[turn]

    //Used to update my images bottons.
    button1.src = currentQuestion.src1;
    button2.src = currentQuestion.src2;
    button3.src = currentQuestion.src3;
    button4.src = currentQuestion.src4;


    //Used to update the option of the texts.
    option1.innerHTML = currentQuestion.option1;
    option2.innerHTML = currentQuestion.option2;
    option3.innerHTML = currentQuestion.option3;
    option4.innerHTML = currentQuestion.option4;

}

//code used for buttons to log the checkAnswer function
button1.onclick = checkAnswer;
button2.onclick = checkAnswer;
button3.onclick = checkAnswer;
button4.onclick = checkAnswer;

function correctAnswer(){
    document.getElementById("id").style.color = "green";
}
function incorrectAnswer(){
    document.getElementById("id").style.color = "red";
}