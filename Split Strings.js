/* Split Strings 
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters
then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

const solution = (str) => {
  if (str.length === 0) {
    return [];
    } else if  (str.length % 2 === 0)  {
      return str.match(/(..?)/g)
    } else {
     return str.concat('_').match(/(..?)/g);
    }
};