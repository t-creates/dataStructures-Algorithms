/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;

  if (tLen == sLen) {
    for (let char of s) {
      if (t.includes(char)) {
        console.info('Found character:', char, 'in', t);
        t = t.replace(char, '');
      } else {
        return false;
      }
    }
    return true;
  }
  console.log('Length did not match:', sLen, tLen, s, t);
  return false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
