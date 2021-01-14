$(document).ready(function() {
  $("form#sub").submit(function(event) {
    const side1 = parseInt($("input#add1").val());
    console.log(side1);
    const side2 = parseInt($("input#add2").val());
    console.log(side2);
    const side3 = parseInt($("input#add3").val());
    console.log(side3);

    if (side1 > side2 + side3 || side2 > side1 + side3 || side3 > side1 + side2) {
      $("#answer").show();
      $("#answer").text("not a triangle");
      console.log("not a triangle");
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      $("#answer").show();      
      $("#answer").text("scalene triangle");
      console.log("scalene triangle");
    } else if (side1 === side2 && side1 === side3) {
      $("#answer").show();
      $("#answer").text("equilateral triangle");
      console.log("equilateral triangle");
    } else {
      $("#answer").show();
      $("form#answer").text("isosceles triangle");
      console.log("isosceles triangle");
    }
    event.preventDefault();
  });
});