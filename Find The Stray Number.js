/* Find The Stranger Number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

// Solution #0
function stray(numbers) {
  return numbers.filter(n => numbers.indexOf(n) === numbers.lastIndexOf(n))[0];
}

// Solution #1
function stray1(numbers) {  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) return numbers[i];
  }
}

// Solution #2
const stray2 = numbers => numbers.reduce((a, b) => a ^ b);

// Solution #3
function stray3(numbers) {  
  let unique = numbers.filter(n => numbers.indexOf(n) === numbers.lastIndexOf(n));
  return unique[0];
}
