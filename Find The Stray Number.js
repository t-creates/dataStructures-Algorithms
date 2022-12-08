/* Find The Stranger Number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

// BEST SOLUTION
function stray(numbers) {
  // create an empty object to store the number of times each element occurs
  const counts = {};

  // loop through the input array and count the number of times each element occurs
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // loop through the counts object and find the element that occurs only once
  for (const num in counts) {
    if (counts[num] === 1) return Number(num);
  }
}


// Solution #0
function stray0(numbers) {
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
