/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if(n <= 1){
    return 1;
  } else {
    return factorial(n-1) * n;
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var len = array.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return array[0];
  }
  else {

    return sum(array.slice(1)) + array[0];
  }




};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var res = 0;
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    if (Array.isArray(current) === false) {
      res += current;
    } else {
      res += arraySum(current);
    }
  }
  return res;
};

// 4. Check if a number is even.
var isEven = function(n) {
  var abs = Math.abs(n);
  if (abs === 0) {
    return true;
  }
  if (abs ===1) {
    return false;
  }

  return isEven(abs-2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n <=1 && n >= 0) {
    return 0;
  }
  if (n > 1) {
   return sumBelow(n-1) + n-1;
 }
 if (n < 0) {
   return sumBelow(Math.abs(n)) * (-1);
 }


};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (y >= x) {
    if ((y-x) <= 1 ) {
      return [];
    }
    var res = [];
    if (y-x >= 2) {
      res = res.concat(range(x, y-1));
      res.push(y-1);

    }
    return res;
  }
  if (y < x) {
    return range(y, x).reverse();
  }


};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  if(base === 0 && exp !==0){
    return 0;
  }
  if(exp >0){
    return base * exponent(base, exp-1);
  } else {
    var expPositive = exp*(-1)
    return exponent(base, expPositive) ** (-1);
  }


};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 1) {
    return false;
  }
  if (n===1){
    return true;
  }
  return powerOfTwo((n/2.0));




};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var len = string.length;
  var res = '';
  if (len === 0) {
    return '';
  } else {
    res +=reverse(string.slice(1)) + string[0];
  }
  return res;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var len = string.length;
  if (len === 0){
    return false;
  }
  if (len === 1){
    return true;
  }
  var strLC = string.toLowerCase();
  var firstLetter = strLC[0];
  var lastLetter = strLC[len-1];
  return ((firstLetter === lastLetter) && (palindrome(strLC.slice(1,len-1))));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return 'error message';
  }

  if (x === y || x === 0) {
    return 0;
  }

  if (x > 0 && y > 0) {
    if(x < y) {
      return x;
    } else {
      return modulo(x - y, y);
    }

  }
  if (x > 0 && y < 0 ) {
    return modulo(x, -y);
  }
  if (x < 0 && y > 0) {
    return -modulo(-x, y);
  }
  if (x < 0 && y < 0) {
    return -modulo(-x, -y);
  }





};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (y > 0) {
    return multiply(x, y-1) + x;
  }
  if (y < 0) {
    return -(multiply(x, -y-1) + x);
  }

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0 ) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (x < y) {
      return 0;
    }else if (x === y) {
      return 1;
    }else {
      return divide(x-y, y) + 1;
    }
  }
  if (x > 0 && y < 0) {
    return -divide(x, -y)
  }
  if (x < 0 && y < 0) {
    return divide(-x, -y);
  } if (x < 0 && y > 0) {
    return -divide(-x, y);
  }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x * y <= 0) {
    return null;
  }
  var maxNum = Math.max(x, y);
  var minNum = Math.min(x, y);
  if(maxNum % minNum === 0) {
    return minNum;
  }
  return gcd(maxNum - minNum, minNum);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  if (len1 !== len2) {
    return false;
  }
  if(len1 === 0 && len2 === 0) {
    return true;
  }
  if (len1 === 1) {
    return str1[0] === str2[0];
  }
  return (str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1)));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var len = str.length;
  var res = [];
  if (len === 0) {
    return [];
  }
  if (len === 1) {
    return [str[0]];
  }
  else {

    res = [str[0]].concat(createArray(str.slice(1)));
  }
  return res;



};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var len = array.length;
  var res = [];
  if (len <= 1) {
    return array;
  } else {
    res = reverseArr(array.slice(1)).concat(array.slice(0,1));
  }
  return res;


};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if ( length === 0) {
    return [];
  }
  if (length === 1) {
    return [value];
  }
  return buildList(value, length-1).concat([value]);
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var res = [];
  if (n === 1) {
    return ['1'];
  } else {
    if (n % 3 === 0 && n % 5 !== 0) {
      res.push('Fizz');
    } else if (n % 5 === 0 && n % 3 !== 0) {
      res.push('Buzz');
    } else if (n % 15 === 0) {
      res.push('FizzBuzz');
    } else {
      res.push(String(n));
    }

  }
return fizzBuzz(n-1).concat(res);




};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var len = array.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    if (array[0] === value) {
      return 1;
    } else {
      return 0;
    }
  }
  return countOccurrence(array.slice(0,1), value) + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if(array.length === 1) {
    return [callback(array[0])];
  }
  return rMap(array.slice(0,1), callback).concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  var k = key;

  var res = 0;

  for (var key in obj) {
    var current = obj[key];
    if(key !== k && (typeof(current) === 'object' && current !== null)) {
      res += countKeysInObj(current, k);
    } else if(key === k) {
      res++;
      if(typeof(current) === 'object' && current !== null) {
        res += countKeysInObj(current, k);
      }
    } else {
      res = res;
    }


  }
  return res;

};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var res = 0;
  for (var key in obj) {
    if (typeof(obj[key]) === 'object' && obj[key] !== null) {
      res += countValuesInObj(obj[key], value);
    } else {
      if (obj[key] === value) {
        res += 1;
      }

    }
  }
  return res;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (oldKey === newKey) {
    return obj;
  }
  for (var key in obj) {
    var current = obj[key];
    if(key === oldKey) {
      currentValue = obj[key];
      obj[newKey] = currentValue;
      delete obj[oldKey];
      if (typeof(currentValue) === 'object' && currentValue !== null) {
        replaceKeysInObj(currentValue, oldKey, newKey);
      }

    } else {
      if (typeof(current) === 'object' && current !== null) {
        replaceKeysInObj(current, oldKey, newKey);
      }

    }

  }
  return obj;

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  }

  if (n === 1) {

   return [0, 1];
  }
  if (n === 2) {

    return [0, 1, 1];
  }
  if (n > 2){
    var nextFib = fibonacci(n-1)[n-1] + fibonacci(n-1)[n-2];
    var res = fibonacci(n-1).concat(nextFib);
    return res;


  }

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  return nthFibo(n-1) + nthFibo(n-2);

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var len = array.length;
  if (len === 0) {
    return [];
  }
  if (len === 1) {
    return [array[0].toUpperCase()];
  }
  return capitalizeWords(array.slice(0,1)).concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var len = array.length;
  if (len === 0) {
    return [];
  }

  if (len === 1) {
    var word = array[0];
    var wordArr = word.split('');
    var firstLetter = wordArr[0];
    wordArr[0] = firstLetter.toUpperCase();
    word = wordArr.join('');
    return [word];

  }
  return capitalizeFirst(array.slice(0,1)).concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    var current = obj[key];
    if (current % 2 === 0) {
      sum += current;
    } else {
      if (typeof(current) === 'object' && current !== null) {
        sum += nestedEvenSum(current);
      }
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var res = [];
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    if (Array.isArray(current)) {
      res = res.concat(flatten(current));
    } else {
      res.push(current);
    }
  }
  return res;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
//the code below didn't pass the auto test and it is weired the autotest took only 1 arg.
//while in function contains two args.
var letterTally = function(str, obj) {
  var len = str.length;

  if (len === 0) {
    return obj;
  } else {
      var currentLetter = str.charAt(0);
        if (obj[currentLetter] === undefined) {
            obj[currentLetter] = 1;
        } else {
            obj[currentLetter]++;
            }

  }
   return letterTally(str.slice(1), obj);


};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var len = list.length;
  if (len === 0) {
    return [];
  }
  var res = [];
  if (len === 1) {
    res.push(list[0]);
      return res;
  }
  if (len === 2) {
    if (list[0] === list[1]) {
      return list[0];
    } else {
     return list;
    }
  }
  if (len > 2) {
    var lastNum = list[len-1];
    if (lastNum === list[len-2]) {
      return  compress(list.slice(0, len-1));
    } else {
      return  compress(list.slice(0, len-1)).concat(lastNum);
    }
  }





};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var len = array.length;
  if (len === 0) {
    return [aug];
  }

  if (len === 1) {
    array[0].push(aug);

    return [array[0]];
  } else {
    return augmentElements(array.slice(0, 1), aug).concat(augmentElements(array.slice(1), aug));
  }

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var len = array.length;
  if (len <= 1) {
    return array;
  } else {
    var lastEle = array[len-1];
    if (lastEle === 0 && array[len-2] === 0) {
      return minimizeZeroes(array.slice(0, len-1));
    } else {
      return minimizeZeroes(array.slice(0, len-1)).concat(lastEle);
    }
  }

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var len = array.length;
  if (len === 0) {
    return [];
  }
  if (len === 1) {
    return [Math.abs(array[0])];
  }
  var lastNum = array[len-1];
  var lastIndex = len-1;
  if (lastIndex % 2 === 1) {
    lastNum = Math.abs(lastNum) * (-1);
  } else {
    lastNum = Math.abs(lastNum);
  }
  return alternateSign(array.slice(0, len-1)).concat(lastNum);

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var len = str.length;

  if (len === 0) {
    return '';
  }

  if (len === 1) {
    if(numbers.includes(str[0])) {
      return words[numbers.indexOf(str[0])];
    } else {
      return str[0];
    }
  }

  else {
    return numToText(str[0]) + numToText(str.slice(1));
  }


};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document.body) {
  // var count = 0;

  // if (node.tagName && node.tagName === tag) {
  //   count++;
  // }
  // if (node.childNodes) {
  //   node.childNodes.forEach(function(node) {
  //     count += tagCount(tag, node);
  //   });
  // }


  // return count;

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max = array.length-1) {





    while(min <= max) {
      var mid = Math.floor((min + max)/2);
      if(min === max) {
        if(array[min]=== target) {
          return min;
         } else {
          return null;
        }

      }


      if(array[mid] === target) {
        return mid;
      } else if(array[mid] > target) {
          return binarySearch(array, target, min, mid -1);
        } else if (array[mid] < target) {
           return binarySearch(array, target, mid + 1, max);
        }
    }
    return null;




};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
