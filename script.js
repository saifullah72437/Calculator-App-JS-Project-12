let digitBtn = document.querySelectorAll('.digit')
let number = document.querySelector('#number')
let cancel = document.querySelector('#c')
let digitValue = "";
;


cancel.addEventListener('click', function(){
    number.value = ""
},false)

function addToInput(value) {
    number.value += value;
  }


  function calculateResult() {
    try {
      const result = eval(number.value);
      number.value = result;
    } catch (error) {
      number.value = "Error";
    }
  }

  function arrowClick(){
    let currentValue = number.value;
  
    // Remove the last character from the input value
    number.value = currentValue.slice(0, -1);
}