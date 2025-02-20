// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  let result;
  if (num1 > num2) {
    result = num1;
  } else if (num1 < num2) {
    result = num2;
  } else if (num1 === num2) {
    result = num1;
  }
  return result;
}

maxOfTwoNumbers(15, 5);
// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arraySrc) {
  let result = "";

  if (arraySrc.length === 0) {
    result = null;
  } else {
    for (let i = arraySrc.length - 1; i >= 0; i--) {
      if (arraySrc[i].length >= result.length) {
        result = arraySrc[i];
      }
    }
  }
  return result;
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numList) {
  let result = 0;
  for (i = 0; i < numList.length; i++) {
    result += numList[i];
  }
  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(srcList) {
  let result = sumNumbers(srcList) / srcList.length;
  if (result > 0) {
    return result;
  } else {
    return 0;
  }
}

averageNumbers(numbers2);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordList, targetWord) {
  let result = "";

  if (wordList.length === 0) {
    result = null;
  } else {
    for (let i = 0; i < wordList.length; i++) {
      if (wordList[i] === targetWord) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
  }
  return result;
}

doesWordExist(words2);
