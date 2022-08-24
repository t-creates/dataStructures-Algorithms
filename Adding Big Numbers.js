/* Adding Big Numbers

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives

*/

// Solution #0
function add(a, b) {
  let result = '', c = 0;
  // Turn to array's
  a = a.split('');
  b = b.split('');
  
  while (a.length || b.length || c) {
    // ~~ substitute for Math.floor (only works similar on positive numbers)
    // Add a and b to c array
    c += ~~a.pop() + ~~b.pop();
    // Remainder added to result
    result = c % 10 + result
    c = c > 9
  }
  return result
}

