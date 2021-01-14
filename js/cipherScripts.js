// business logic man!
function lettersToUpper(string) {
  const firstLetter = string.charAt(0);
  const lastLetter = string.charAt(string.length - 1);
  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
}

function switchLetters(string) {
  return string[1] + string[0];
}

function newSentence(string, fullSentence) {
  return fullSentence + string;
}

function middleLetter(string, sentence) {
  const halfLetter = (sentence.length) / 2;
  return sentence.charAt(halfLetter) + string;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

// ui logic YO!   sorry not sorry about the console logs...
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    // console.log(person1Input);
    
    const upperLetters = lettersToUpper(person1Input);
    // console.log(upperLetters);

    const switchedLetters = switchLetters(upperLetters);
    // console.log(switchedLetters);
    
    const bigSentence = newSentence(switchedLetters, person1Input);
    // console.log(bigSentence);

    const biggerSentence = middleLetter(bigSentence, person1Input);
    // console.log(biggerSentence);

    const reversed = reverseString(biggerSentence);
    // console.log(reversed);
  
    event.preventDefault();
    $("#story").show();
  });
});