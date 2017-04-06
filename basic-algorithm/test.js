// #### num 1 - Reverse a string


function reverseString(str) {
  var array = str.split(" ").reverse().join(" ");
  return array;
}

reverseString("hello");


// ### num 2 - Factorialize a number

function factorialize(num) {
  var number = 1;
  for (var i = 0; i < num; i++) {
    number = number * i;
  }
  return number;
}
factorialize(5);

// ### num 3 - check for palindromes

function palindrome(str) {
  var string = /[^A-Za-z0-9]/g;
  var lowerCase = str.toLowerCase().replace(string, '');
  var reverse = lowerCase.split('').reverse('').join('');
  return reverse === lower;
}

palindrome(eye);

// ### num 4  - find longest word in a sentence

function findLongestWord(str) {
  var array = str.split(" ");
  var longestWord = 0;
  var longestString = "";
  for(var i = 0; i < array.length; i++) {
    if(array[i].length > longestWord && typeof array[i] == "string") {
      longestWord = array[i].length;
      longestString = array[i];
    }
  }
  return longestString.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
