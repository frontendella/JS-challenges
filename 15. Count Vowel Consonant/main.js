// Count Vowel Consonant
// You are given a strings that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.
// Example
// • For s = "abcde", the output should be count VowelConsonant(s) = 8.
// Hints
// • split()
// • reduce)



function countVowelConsonant(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Split the string into an array of characters
  const chars = s.split('');
  
  // Reduce the array of characters into a single value (the sum)
  const sum = chars.reduce((acc, curr) => {
    if (vowels.includes(curr)) {
      return acc + 1;
    } else {
      return acc + 2;
    }
  }, 0);
  
  return sum;
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});