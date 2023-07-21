let resultField = document.getElementById("result");
let resultOutput = document.getElementById("result-output");
let expression = "";

function appendNumber(number) {
  expression += number;
  resultField.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  resultField.value = expression;
}

function clearResult() {
  expression = "";
  resultField.value = "";
  resultOutput.textContent = "";
}

function deleteNumber() {
  expression = expression.slice(0, -1);
  resultField.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    resultField.value = result;
    resultOutput.textContent = `Result: ${result}`;
    expression = "";
  } catch (error) {
    resultField.value = "Error";
    resultOutput.textContent = "";
    expression = "";
  }
}
