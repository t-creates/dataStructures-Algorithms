/* Twice As Old


Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/


// Solution #0
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld - (dadYearsOld - sonYearsOld));
}

// Solution #1
function twiceAsOld1(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (2 * sonYearsOld));
}