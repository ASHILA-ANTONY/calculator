let firstNumber = null;
let operation = null;

function addToDisplay(value) {
  console.log(value)
  const display = document.getElementById('display');
  display.value += value;
}

function setOperation(op) {
  const display = document.getElementById('display');
  firstNumber = parseFloat(display.value);
  operation = op;
  display.value = ''; // Clear the display for the next input
}

function calculate() {
  const display = document.getElementById('display');
  const secondNumber = parseFloat(display.value);
  let result;

  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error'; // Handle division by zero
      break;
    default:
      result = 'Error';
  }

  display.value = result !== undefined ? result : 'Error';
  firstNumber = null; // Reset after calculation
  operation = null;   // Reset after calculation
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1); // Remove the last character
}

  