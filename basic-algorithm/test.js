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
  var longest = 0;
  var longestString = "";
  for(var i = 0; i < array.length; i++) {
    if(array[i].length > longest && typeof array[i] == "string") {
      longest = array[i].length;
      longestString = longest;
    }
  }
  return longestString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// ### num 5  - Title case a sentence

function capitalize(str) {
  var array = str.split(' ').toLowerCase();
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0).toUpperCase() + arra[i].slice(1));
  }

}

function titleCase(str) {
  var array = str.toLowerCase().split(' ');
  var newarray1 = [];

  for(var i = 0; i < array.length; i++){
      newarray1.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newarray1.join(' ');
}

// ### num 6  - Return largest number in array

function largestOfFour(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var largest = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > largest) {
      largest = arr[i][j];
    }
  }
    newArray.push(largest);
}
  return newArray;
}

// ### num 7  - confirm the ending

function confirmEnding() {
  var newString = str.substr(-target.length);
  if(newString === target) {
    return true;
  }
  return false;
}

// ### num 8  - repeat a string
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newString = "";
  var emptyString = "";
  if(num > 0) {
    for(var i = 0; i < num; i++){
      newString += str;
    }
    return newString;
  }
  return emptyString;
}

repeatStringNumTimes("abc", -2);

// ### num 9

function truncateString(str, num) {
  var truncated = "";
  if(str.length > num && num > 3) {
    truncated = str.slice(0, num-3) + "...";
    return truncated;
  } else if(str.length > num && num <= 3) {
    truncated = str.slice(0, num) + "...";
    return truncated;
  }
  return str;
}

truncateString("Absolutely Longer", 2);


// ## num 10

function monkey(arr, num) {
  var tempArray = [];
  var finalArray = [];

  for(var i = 0; i < arr.length; i++) {
    if(i % num != num -1) {
      tempArray.push(arr[i]);
    }else {
      tempArray.push(arr[i]);
      finalArray.push(tempArray);
      tempArray = [];
    }
  }
  if(tempArray.length !== 0)
    finalArray.push(tempArray);
    return finalArray;
}
