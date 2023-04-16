/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str){
    const lowerCaseStr = str.toLowerCase()
    let reversed = ''
    for (let i = lowerCaseStr.length-1; i >=0; i--){
        reversed += lowerCaseStr[i]
    }
    return reversed === lowerCaseStr
}


// Using built-in method: reverse()

function isPalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    const reversedStr = lowerCaseStr.split('').reverse().join('');
    return lowerCaseStr === reversedStr;
  }
  


// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
