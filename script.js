// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
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
var timRem = 60;
var question1 = document.getElementById("firstQuestion");
var question2 = [
  {
    question: "What CSS stands for?",
    choices: ["Central Space Staion", "Cascading Style Sheet", "Color Style Sheet", "Customer Service and Support"],
    answer: 1
  }
];


// Choices function
function firstChoice() {
  var node = document.createElement("button");
  var textNode = document.createTextNode("HyperTense Markup Language")
  node.appendChild(textNode);
  document.getElementById("firstAns").appendChild(node);
  node.classList.add("incorrect");
};

function secChoice() {
  var node = document.createElement("button");
  var textNode = document.createTextNode("Hotmail")
  node.appendChild(textNode);
  document.getElementById("firstAns").appendChild(node);
  node.classList.add("incorrect");
}; 

function thrdChoice() {
  var node = document.createElement("button");
  var textNode = document.createTextNode("HyperText Markup Language")
  node.appendChild(textNode);
  document.getElementById("firstAns").appendChild(node);
  node.classList.add("correct");
};    
function fourthChoice() {
  var node = document.createElement("button");
  var textNode = document.createTextNode("HyperTech Mockup Language")
  node.appendChild(textNode);
  document.getElementById("firstAns").appendChild(node);
  node.classList.add("incorrect");
};




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


function penalty() {
  document.getElementsByClassName('incorrect').addEventListener('click', function() {
    sec -= 5;
    document.getElementById('timerDisplay').innerHTML='00:'+sec;
  })
};

// function Questns() {
//   // for (var i = 0; i < myQuestions.length; i++) {
//   var question = question1
//   $('#container').text (question);
//   // var options = myQuestions[0].choices;
//   // document.body.appendChild(document.createElement("br"));
    
// }
  
// Append the First question on click

//need to fix your questions and put them individually and If statement for submit and show nex question




strtBtn.addEventListener("click", function() {
  $('#demo').text("Good Luck!");
  strtBtn.style.display= 'none'
  
  strtQuiz();
  firstChoice();
  secChoice();
  thrdChoice();
  fourthChoice();
  penalty();
});
