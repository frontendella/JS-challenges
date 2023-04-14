/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(string){
    string = `${string.toUpperCase()}!`
    return string.includes(" ") ? string.split(' ').join(' 😱 ') : string
}


// Test your function
console.log(panic("Hello"));
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

// Handling Edge Cases 

function panic(string) {
    if (typeof string !== "string" || string.length === 0) {
      throw new Error("Input must be a non-empty string");
    }
  
    const uppercaseString = string.toUpperCase();
  
    if (uppercaseString.trim().length === 0) {
      throw new Error("Input must contain at least one non-space character");
    }
  
    let result = uppercaseString;
  
    if (uppercaseString.includes(" ")) {
      const words = uppercaseString.split(" ");
      result = words.join(" 😱 ");
    }
  
    return `${result}!`;
  }
  