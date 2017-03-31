
var calcForm = document.forms.calc;
var firstOperand = "";
var secondOperand = "";
var operator = "";
var result = "";
var input = calcForm.input;


calcForm.addEventListener("click", clickHandleFunction);

function clickHandleFunction(event) {
   var actions = {
      'operator': setOperator,
      'operand': setOperand,
      'result': countResult,
      'reset': reset,
      'sign_change': changeSign
   };
   var target = event.target;
   var buttonType = target.dataset.btnType;
  
   if (event.target.className.indexOf("button") >= 0) {
   actions[buttonType](target.value);
   }


function setOperand() {
      if (operator === "") {
          firstOperand += target.value;
          calcForm.elements.input.value = firstOperand;
          return firstOperand;
         
      } else {
         secondOperand += target.value;
         calcForm.elements.input.value = secondOperand;
         return secondOperand;
      }
}
      
function setOperator() {
    operator = target.value;
    return operator;
}

function changeSign() {
   operator = target.value;
   result = countResult();
}
         
function countResult() {
   var result;
   switch (operator) {
      case "multiplication": result = firstOperand * secondOperand;
         break;
      case "division": if (secondOperand != 0) {
         result = firstOperand / secondOperand;
      } else { 
         result = "error!";
      }
         break;
      case "plus": result = (+firstOperand) +(+secondOperand);
         break;
      case "minus": result = firstOperand - secondOperand;
         break;
      case "sign_change": result = -firstOperand;
         break;      
   } 
   if (result != undefined) {
   calcForm.elements.input.value = result;
   }
   
   firstOperand = result;
   secondOperand = "";
   operator = "";
   
   
   return result;
}

function reset() {
   firstOperand = "";
   secondOperand = "";
   operator = "";
   calcForm.elements.input.value = "";
   result = "";
}
}

