/* Bit Counting 

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// Solution #0
var countBits = function(n) {
  let answer = 0;
// take input turn it into a string if it is not already
  const number = parseInt(n); 
// convert to binary
  const result = number.toString(2);
  // Loop through the binary number adding all the ones 
  for (let i = 0; result.length > i; i++) {
    if (result[i] === '1') {
     answer++;
   }
 }
  return answer;
};

// Solution #1  --- Loops though n dividing it by two everytime and adds all the remainders.
var countBits1 = function(n) {
  var count = 0;
  while(n > 0){
    if(n%2 === 1) {
      count++;
    }
    n = Math.floor(n/2);
  }
  return count;
};

// Solution #2
var countBits2 = function(n) {
  let baseNum = (n).toString(2).split('');    //Turns n into a binary array
  let result = baseNum.reduce((sum, num) => sum + Number(num), 0);  //Adds the baseNum array
  return result;
}