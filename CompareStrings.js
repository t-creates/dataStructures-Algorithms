var canConstruct = function (ransomNote, magazine) {
  let rn = ransomNote.split('');
  let mg = magazine.split('');

  for (let l = 0; l < rn.length; l++) {
    if (mg.includes(rn[l])) {
      rn.pop(rn[l]);
      mg.pop(mg.indexOf(rn[l]));
    } else {
      return false;
    }
  }
  return true;
};

/* Compare Strings Ransom Note

Write a function that compares two strings and returns true if they are equal or false if they are not.
they do not have to be in order and use cannot use the same letter twice.

Example:
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

// Solution #0
var canConstruct = function (ransomNote, magazine) {
  let rn = ransomNote.split('');
  let mg = magazine.split('');

  for (let l = 0; l < rn.length; l++) {
    if (mg.includes(rn[l])) {
      rn.pop(rn[l]);
      mg.pop(mg.indexOf(rn[l]));
    } else {
      return false;
    }
  }
  return true;
};

// Solution #1
var canConstruct = function (ransomNote, magazine) {
  for (let char of ransomNote) {
    if (magazine.includes(char)) {
      magazine = magazine.replace(char, '');
    } else {
      return false;
    }
  }
  return true;
};

