
var calcForm = document.forms.calc;
var firstOperand = "";
var secondOperand = "";
var operator = "";
var result;
calcForm.addEventListener("click", clickHandleFunction);

function clickHandleFunction() {
     var target = event.target;
     if (isNaN(target.value) && target.value != "result" && target.value != ".") {
           operator = target.value;
           calcForm.elements.input.value = "";
        
      } else if (operator === "reset") {
         calcForm.elements.input.value = ""; 
         reset();
         
      } else if (operator === "") {
          firstOperand += target.value;
          calcForm.elements.input.value = firstOperand;
         
      } else if (target.value == "result") {
         calcForm.elements.input.value = "";
         countResult(firstOperand, secondOperand);
         
      } else {
         secondOperand += target.value;
         calcForm.elements.input.value = secondOperand;
         
      }
   
}
   
function countResult(a, b) {
   switch (operator) {
      case "multiplication": result = a * b;
         break;
      case "division": result = a / b;
         break;
      case "plus": result = (+a) +(+b);
         break;
      case "minus": result = a - b;
         break;
      case "sign_change": result = -a;
         break;      
   } 
   calcForm.elements.input.value = result;
   reset();
   
   return result;
}

function reset() {
   firstOperand = "";
   secondOperand = "";
   operator = "";
}
    
   
   


