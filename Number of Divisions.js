/* Number of Divisions 

Calculate how many times a number can be divided by a given number.

Examples
For example the number 6 can be divided by 2 two times:
1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1

100 can be divided by 2 six times:
1. 100 / 2 = 50
2. 50 / 2 = 25
3. 25 / 2 = 12 remainder 1
4. 12 / 2 = 6
5. 6 / 2 = 3
6. 3 / 2 = 1 remainder 1

*/

// Solution #0
const divisions = (n, divisor) => {
  let timesDivided = 0;
  let num = n
  while (num >= divisor) {
    num = num / divisor
    timesDivided++;
  }
  return timesDivided;
};

// Solution #1
const divisions = (n, divisor) => {
  return Math.floor(Math.log(n)/Math.log(divisor))
};