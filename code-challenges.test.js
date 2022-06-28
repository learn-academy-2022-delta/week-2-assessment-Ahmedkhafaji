// ASSESSMENT 2: Coding Practical Questions with Jest

// const { CodeGenerator } = require("@babel/generator")

// const { exportAllDeclaration } = require("@babel/types")

// const { string, describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//Pseudo code: create a function called evenlyDivisibleByThree.
//use a paramater 'number' 
// create a return to meet the condition 


const num1 = 15
// Expected output: "15 is divisible by three"
   const num2 = 0
// Expected output: "0 is divisible by three"
   const num3 = -7
// Expected output: "-7 is not divisible by three"

// describe("evenlyDivisibleByThree", () => {
//   it("decides if the number is evenly divisble by three or not", () => {
// expect(evenlyDivisibleByThree(15)).toEqual("15 is divisible by three")
// expect(evenlyDivisibleByThree(0)).toEqual("0 is divisible by three")
// expect(evenlyDivisibleByThree(-7)).toEqual("-7 is not divisible by three")
//   })
// })

//ReferenceError: evenlyDivisible is not defined

//b) Create the function that makes the test pass.
//  const evenlyDivisibleByThree = (number) => {
//   if (number % 3 === 0) {
//     return `${number} is divisible by three`
//   } else {
//     return `${number} is not divisible by three`
//   } 
// }

//   console.log(evenlyDivisibleByThree(num1))
//   console.log(evenlyDivisibleByThree(num2))
//   console.log(evenlyDivisibleByThree(num3))

  //output
//   15 is divisible by three
// 0 is divisible by three
// -7 is not divisible by three
 


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//input: array of words 
//output: array captilized

//Pseudo code:
//create a function called randoms 
//input is the array of all words 
// use .map to iterate the array 
// use value 0 to captilize the first letter of each word.

// describe("randoms", () => {
//   it("return array with all the words capitalized", () => { 
//   expect(randoms(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//   expect(randoms(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//   })
// })
// ReferenceError: randoms is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.

// const randoms = (array) => {
//   let caps = array.map(value => value[0].toUpperCase() + value.substring(1))
//   return  caps 
// }

//output:  PASS  ./code-challenges.test.js
  // randoms
  // ✓ return array with all the words capitalized (1 ms)







// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//pseudo Code:
//create a function called firstv
//takes in string and outputs value of the first vowel
// i used .search which finds the vowel and outputs the value of it. 
 
describe("firstv", () => {
  it("takes in a string and logs the index of the first vowel", () => {
      const vowelTester1 = "learn"
      const vowelTester2 = "academy"
      const vowelTester3 = "challenges"
      expect(firstv(vowelTester1)).toEqual(1)
      expect(firstv(vowelTester2)).toEqual(0)
      expect(firstv(vowelTester3)).toEqual(2)
  })
})
//ReferenceError: firstv is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.

const firstv = (string) => {
  return string.search(/[a,e,i,o,u,]/)
}


//output: PASS  ./code-challenges.test.js
  // firstv
  // ✓ takes in a string and logs the index of the first vowel (1 ms)