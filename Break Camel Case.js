/* Break Camel Case 

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/* 

// Solution #0
function solution(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i).toUpperCase()) {
      str += ' ' + string[i];
    } else {
      str += string[i];
    }
  }
  return str;
}

// Solution #1
function solution1(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

// Solution #2
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}
