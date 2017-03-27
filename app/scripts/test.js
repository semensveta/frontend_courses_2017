var correctAnswers = {
   link: "a",
   list: "ol",
   info: "meta",
   table: ["td", "caption"],
   form: ["autocomplete", "action"]
}

var testForm = document.forms.test;
testForm.elements.result.onclick = function testHandler() {
   
   var inputArray = Object.keys(correctAnswers);
   var userAnswers = getAnswers(inputArray, testForm);   
   var grade = countScore(userAnswers);   
   console.log("You answerd correct on " + grade*20 + "% quistions!" + "Your score is " + grade + " of 5 points");
}

function getAnswers(arr, form) {
   var userAnswers = {};
   for (var i = 0; i < arr.length; i++){
      var input = arr[i];
      if (typeof correctAnswers[input] === 'string') {
         userAnswers[input] = form.elements[input].value;
      }  else {
         userAnswers[input] = getCheckboxAnswer(form.elements[input]);
      }
   }

   return userAnswers;
} 

function getCheckboxAnswer(checkboxInput) {
    var answers = [];
    for (var i = 0; i < checkboxInput.length; i++){
        if (checkboxInput[i].checked) {
            answers.push(checkboxInput[i].value);
        }
    }

    return answers;
}
   
function countScore(userAnswers) {
   var grade = 0;
   for (var key in correctAnswers) {
      if (typeof correctAnswers[key] === 'string') {
         if (correctAnswers[key] == userAnswers[key]) {
            grade += 1;
         }
      } else if (correctAnswer[key].length == userAnswer[key].length) {
         if (correctCheckboxAnswer(correctAnswers[key], userAnswers[key])) {
            grade += 1;
         }
      }
   }

   return grade;
}

function correctCheckboxAnswer(correctAnswer, userAnswer) {
   var result = true;   
   for (var i = 0; i < correctAnswer.length; i++) {
      if (correctAnswer[i] != userAnswer[i]) {
         result = false;
      }
   }

   return result;
}


