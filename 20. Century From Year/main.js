// Century From Year
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// Example
// • For year = 1905, the output should be centuryFromYear(year) = 20;
// • For year = 1700, the output should be centuryFromYear(year) = 17.
// Hints
// • Math.floor()

// Solution with Math.floor

function centuryFromYear(year) {
    // Divide the year by 100 and round down to the nearest integer to get the century
    return Math.floor((year - 1) / 100) + 1;
  }
  
// Solution with Math.ceil

function centuryFromYear(year) {
    // Divide the year by 100 and round up to the nearest integer to get the century
    return Math.ceil(year / 100);
  }
  



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});