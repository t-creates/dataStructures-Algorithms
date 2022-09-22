// First Non-Repeating Character

/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/



// Solution #0
function firstNonRepeatingLetter(s) {
    // Add your code here
    let arr = s.split("");
    let count = 0;
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].toLowerCase() === arr[j].toLowerCase()) {
                count++;
            }
        }
        if (count === 1) {
            result = arr[i];
            break;
        }
        count = 0;
    }
    return result;
}

// Solution #1
