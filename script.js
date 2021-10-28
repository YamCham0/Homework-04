
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// Change your Buttons
var timerDisplay = document.getElementById('timerDisplay');
var correctAns = document.body.getElementsByClassName('correct');
var incorrectAns = document.body.getElementsByClassName('incorrect');
var strtBtn = document.getElementById("strtBtn");
var question1 = document.getElementById("firstQuestion");
var question2 = document.getElementById("secondQuestion");
var bntClick = document.getElementById("bntClick")
var timRem = 60;
// Clicking Start Quiz! starts timer with Game over alert when run out of time.
function strtQuiz() {
  var timer = setInterval(function(){
    timRem--;
    timerDisplay.innerHTML='00:'+timRem;
    if (timRem < 0) {
      clearInterval(timer);
      alert("Game Over!");
    }  
    }, 1000);
};

// Function container of Q1 Choices.
function q1Choices() {
  firstChoiceQ1();
  secChoiceQ1();
  thrdChoiceQ1();
  fourthChoiceQ1();
};

// Q1 Choice functions. Creating the buttons, elements, #Ids and choices with
// the penalty() function added on wrong choice and giving the next question when correct answer is clicked.
function firstChoiceQ1() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("HyperTense Markup Language")
  createBtn.appendChild(textNode);
  document.getElementById("firstAns").appendChild(createBtn);
  createBtn.classList.add("incorrect");
  createBtn.onclick = penalty;
};

function secChoiceQ1() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("Hotmail")
  createBtn.appendChild(textNode);
  document.getElementById("firstAns").appendChild(createBtn);
  createBtn.classList.add("incorrect");
  createBtn.onclick = penalty;
};

function thrdChoiceQ1() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("HyperText Markup Language")
  createBtn.appendChild(textNode);
  document.getElementById("firstAns").appendChild(createBtn);
  createBtn.classList.add("correct");
  createBtn.onclick = secondQuestion;
};

function fourthChoiceQ1() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("HyperTech Mockup Language")
  createBtn.appendChild(textNode);
  document.getElementById("firstAns").appendChild(createBtn);
  createBtn.classList.add("incorrect");
  createBtn.onclick = penalty;
};



// Q2 Choice functions. Creating the buttons, elements, #Ids and choices with
// the penalty() function added on wrong choice and giving the next question when correct answer is clicked.
function firstChoiceQ2() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("Central Space Staion")
  createBtn.appendChild(textNode);
  document.getElementById("secondAns").appendChild(createBtn);
  createBtn.classList.add("incorrect");
  createBtn.onclick = penalty;
};

function secChoiceQ2() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("Cascading Style Sheet")
  createBtn.appendChild(textNode);
  document.getElementById("secondAns").appendChild(createBtn);
  createBtn.classList.add("correct");
  createBtn.onclick = 
};

function thrdChoiceQ2() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("Color Style Sheet")
  createBtn.appendChild(textNode);
  document.getElementById("secondAns").appendChild(createBtn);
  createBtn.classList.add("incorrect");
  createBtn.onclick = penalty;
};

function fourthChoiceQ2() {
  var createBtn = document.createElement("button");
  var textNode = document.createTextNode("Customer Service and Support")
  createBtn.appendChild(textNode);
  document.getElementById("secondAns").appendChild(createBtn);
  createBtn.classList.add("incorrect");
  createBtn.onclick = penalty;
};


// Penalty fuction that subtracts 5 secs when wrong answer is clicked.
function penalty() {
  timRem -= 5;
    console.log("squirrel");
  
  };

function secondQuestion() {
  let firstAns = document.getElementById("firstAns")
  firstAns.style.display= 'none'
  question1.style.display= 'none'
  $('#secondQuestion').text("What CSS stands for?");
    firstChoiceQ2();
    secChoiceQ2();
    thrdChoiceQ2();
    fourthChoiceQ2();
  };


// On click function to make submission of correct answer to display the the Second Question and the second set of choices.
// $( ".correct" ).click(secondQuestion());
// Which of the 2 formats????? Look up!
  

  //Heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy Start HEreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee when your back!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//selecting correct answer will take to the next question saying Correct!
//and making the old questions disappear
//write a second set of question and answers (basically copy paste previous questions)
//rinse and repeat





strtBtn.addEventListener("click", function() {
  $('#demo').text("Good Luck!");
  strtBtn.style.display= 'none'
  $('#firstQuestion').text("What HTML stands for?");
  strtQuiz();
  q1Choices();
  
  // penalty();
});

// secondQuestion() {
//   $('#secondQuestion').text("What CSS stands for?")
// }



// correctAns.addEventListener("click", function() {
//   $('#secondQuestion').text("What CSS stands for?");
//   firstChoiceQ2();
// });

