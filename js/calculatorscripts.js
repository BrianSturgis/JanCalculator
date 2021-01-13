// business logic
function remainder(number1, number2) {
  return number1 % number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function add(number1, number2) {
  return number1 + number2;
}

// user Logic
$(document).ready(function() {
  $("form#buttons").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const resultAdd = add(number1, number2);
    $("#output").text(resultAdd);
  });
});