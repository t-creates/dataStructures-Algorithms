/* Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

// Solution #0
function pigIt(str){
  //  iterate through each word and remove first letter 
  //   add each letter to the end of each word + "ay" 
  //    check for punctuation 
    let wordArr = str.split(' ');
    return wordArr
      .map((word) => {
      return word.match(/[A-z]/i)
      ? `${word.substr(1)}${word.substr(0,1)}ay`
      : word
    }).join(' ')
  }

  // Solution #1
  function pigIt1(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

  // Solution #2
  function pigIt2(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }

  // Solution #3
  function pigIt3(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
  }