/*
Happy Number
Easy
Topics
premium lock icon
Companies
*/  /*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n == 1) return true;
  let results = [];
  let nums = 0;
  while (n != 1) {
    let nStr = n.toString().split('');
    console.log('nStr:', nStr);
    nums = 0;
    for (let i = 0; i < nStr.length; i++) {
      nums += parseInt(nStr[i]) * parseInt(nStr[i]);
    }
    n = nums;
    console.log('n:', n);
    if (n == 1) return true;

    if (!results.includes(n)) {
      console.log('results:', results);
      results.push(n);
    } else {
      return false;
    }
  }
};

console.log(isHappy(19));


/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  // Helper function to get sum of squares of digits
  const getNext = (number) => {
    let sum = 0;
    while (number > 0) {
      const digit = number % 10;
      sum += digit * digit;
      number = Math.floor(number / 10);
    }
    return sum;
  };

  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);          // moves one step
    fast = getNext(getNext(fast)); // moves two steps
  }

  return fast === 1;
};
/*
Explanation:
1. Space Complexity: O(1)
Unlike the set/array approach that needs extra space to store visited numbers
Only uses two pointers (slow and fast) regardless of input size

2. Time Complexity: O(log n)
The number of steps needed is proportional to log(n)
For any number n, the next number in the sequence is always less than or equal to 9²×(number of digits in n)

3. Key Concepts:
Uses Floyd's Cycle-Finding Algorithm
Two pointers move at different speeds through the sequence
If there's a cycle, the fast pointer will eventually catch up to the slow pointer
If there's no cycle and the number is happy, fast pointer will reach 1

4. How it works:
slow pointer moves one step at a time
fast pointer moves two steps at a time
If the number is happy, fast will reach 1
If the number is unhappy, fast will eventually meet slow in the cycle

5. Advantages:
No extra space needed for storing visited numbers
Deterministic runtime
Clean and efficient implementation

This algorithm is more efficient than keeping track of seen numbers in a set 
because it uses constant space and can detect cycles without storing any previous values.
*/