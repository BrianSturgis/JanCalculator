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
  $("form#addition").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const resultAdd = add(number1, number2);
    $("#output").text("the sum is " + resultAdd);
  });

  $("form#subtraction").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const resultAdd = subtract(number1, number2);
    $("#output2").text("the difference is" + resultAdd);
  });
  
  $("form#multiplication").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const resultAdd = multiply(number1, number2);
    $("#output3").text(resultAdd);
  });

  $("form#division").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const resultAdd = divide(number1, number2);
    $("#output4").text(resultAdd);
  });

  $("form#remainder").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const resultAdd = remainder(number1, number2);
    $("#output5").text(resultAdd);
  });
});