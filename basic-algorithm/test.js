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

function confirmEnding(str, target) {
  // I created a variable to store the newly created string. I have used str.substr() to extract the string components starting from the str.length till the end of the string.
  var newString = str.substr(-target.length);
  //  if the extracted new string is equal to given target then return true otherwise return false.
  if(newString === target) {
    return true;
  }
  return false;
}

// ### num 8  - repeat a string
function repeatStringNumTimes(str, num) {
  // I created two var strings. One to store the new string and one to return if the solution is an empty string.
  var newString = "";
  var emptyString = "";
  // if the second argument is a positive number I use a for loop to add the given string as many times as the given second argument(num) to the newString variable
  if(num > 0) {
    for(var i = 0; i < num; i++){
      newString += str;
    }
    return newString;
  }
  // if the second argument is not a positive number return an empty string
  return emptyString;
}

repeatStringNumTimes("abc", -2);

// ### num 9 truncated string

// created a var to store the truncated string
function truncateString(str, num) {
  var truncated = "";
// if the given string.length (as first argument) is longer than the second argument (num) and bigger than 3 than the given string will be truncated starting from the first index till the given number minus three indexes which will be replaced by three dots.

  if(str.length > num && num > 3) {
    truncated = str.slice(0, num-3) + "...";
    return truncated;
  // if the given string.length (as first argument) is longer than the second argument (num) but is less or equal than three, the string will be truncated from the first index till the given number and three dots will added.
  } else if(str.length > num && num <= 3) {
    truncated = str.slice(0, num) + "...";
    return truncated;
  }
  //  if the second argument is equal or bigger than the string length than we return the given string in its entirity.
  return str;
}

truncateString("Absolutely Longer", 2);


// ## num 10

function monkey(arr, num) {
  // created two var. One to store the new array created by the for loop and one to tsore the final result requested by the problem
  var tempArray = [];
  var finalArray = [];

// the for loop will iterate through the given array. Once the loop iterate through elements enough times to equal the size of the array requested by the second argument (in this case num), this new array will be push first into the temp array and then into the result array.

  for(var i = 0; i < arr.length; i++) {
    if(i % num != num -1) {
      tempArray.push(arr[i]);
    }else {
      tempArray.push(arr[i]);
      finalArray.push(tempArray);
      tempArray = [];
    }
  }
// Once the loop is finished all of those newly created segments that are not equal to the size required by the second argument will be pushed into the result array which will be returned by the function.

  if(tempArray.length !== 0)
    finalArray.push(tempArray);
    return finalArray;
}

// ## num 11 slasher flick

function slasher(arr, howMany) {
  // The splice() method changes the contents of an array by removing existing elements and/or adding new elements. In this case the argumet doesn't specify items to add but only the array index where to start removing elements.
  // The splice() methods returns the elements that have been removed(in this case [3]).
  var newArray = arr.splice(howMany);
  return newArray;
}

slasher([1, 2, 3], 2);

// ## num 12 mutations


function mutation(arr) {
  var newArray = arr[0].toLowerCase();
  var newArray1 = arr[1].toLowerCase();
  for(i = 0; i < newArray1.length; i++) {
    if(newArray.indexOf(newArray1[i]) < 0) {
      return false;
    }

  }
  return true;
}

mutation(["hello", "hey"]);

// ## num 12 falsy bouncer

function bouncer(arr) {
      return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


// ## num 12 falsy bouncer

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  for (i=0; i<arr.length; i++){
      for (j=1; j<arguments.length; j++){
        if (arguments[j] === arr[i]){
          delete arr[i];

        }
      }
    }

  return arr.filter(Boolean);


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// ## num 13 caesar cypher


function rot13(str) {
  return str.split('').map.call(str, function(char) {
   x = char.charCodeAt(0);
    if(x < 65 || x > 90) {
    return String.fromCharCode(x);
} else if(x < 78) {
  return String.fromCharCode(x + 13);
} else {
  return String.fromCharCode(x - 13);
}

  }).join('');
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArray = arr.sort(function(a, b) {
    return a-b;
  });
  for(i = 0; i < newArray.length; i++) {
      if(newArray[i] >= num) {
        return parseInt(i);
      }
    }
  return newArray.length;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
