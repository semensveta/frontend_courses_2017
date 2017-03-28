
var calcForm = document.forms.calc;

calcForm.addEventListener("click", clickHandleFunction);

function clickHandleFunction() {
     var target = event.target;
     var firstOperand = "";
   
     if (isNaN(target.value)) {
        var operator = target.value;
      } else {
          firstOperand += target.value;
      } 
   console.log(firstOperand);   
}
   


/*var testForm = document.forms.test;
testForm.elements.result.onclick = function testHandler() {
   
   var inputArray = Object.keys(correctAnswers);
   var userAnswers = getAnswers(inputArray, testForm);   
   var grade = countScore(userAnswers);   
   alert("You answerd correctly on " + grade*20 + "% quistions! " + "Your grade is " + grade + " of 5 points");
}

function getAnswers(arr, form) {
   var userAnswers = {};
   for (var i = 0; i < arr.length; i++){
      var inputName = arr[i];
      if (typeof correctAnswers[inputName] === 'string') {
         userAnswers[inputName] = form.elements[inputName].value;
      }  else {
         userAnswers[inputName] = getCheckboxAnswer(form.elements[inputName]);
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
      } else if (correctAnswers[key].length == userAnswers[key].length) {
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
}*/


