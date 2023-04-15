/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function alternatingCaps(sentence) {
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
      const capitalized = i % 2 === 0;
      const letter = sentence[i];
      result += capitalized ? letter.toUpperCase() : letter ;
    }
    return result;
  }
  
  
  console.log(alternatingCaps("I'm so happy it's Monday")); // "I'M So hApPy iT'S MoNdAy"
  