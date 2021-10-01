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
var incorrectAns = document.getElementById('incorrect');
var strtBtn = document.getElementById("strtBtn");
var timRem = 60;
var myQuestions = [
  {
    question: "What HTML stands for?",
    choices: ["HyperTense Markup Language", "Hotmail", "HyperText Markup Language", "HyperTech Mockup Language"],
    answer: 2
  },
  {
    question: "What CSS stands for?",
    choices: ["Central Space Staion", "Cascading Style Sheet", "Color Style Sheet", "Customer Service and Support"],
    answer: 1
  }
];


function strtQuiz(){
    var timer = setInterval(function(){
      timRem--;
      timerDisplay.innerHTML='00:'+timRem;
      if (timRem < 0) {
        clearInterval(timer);
        alert("Game Over!");
      }  
      }, 1000);
}


function Penalty() {
  incorrectAns.addEventListener('click', function() {
    timRem -= 5;
  });
}

function Questns() {
  for (var i = 0; i < myQuestions.length; i++) {
    var question = myQuestions[i].question;
    $('#container').text (question);
    var options = myQuestions[i].choices;
    document.body.appendChild(document.createElement("br"));
    
  }
  
}

//need to fix your questions and put them individually and If statement for submit and show nex question




strtBtn.addEventListener("click", function() {
  $('#demo').text("Good Luck!");
  strtBtn.style.display= 'none'


  strtQuiz();
  Penalty();
  Questns();
});

