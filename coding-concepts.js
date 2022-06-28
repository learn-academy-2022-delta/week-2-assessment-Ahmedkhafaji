// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

 var cohort = "Delta 2022"
//  console.log(cohort.split(""))

// a) Your answer: split would put every value in its own quotation mark, turn it string into an array
// b) Verify and explain: my answer is suprisingly correct, every value in the string 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 //console.log(greeter("EARN Student"))

// a) Your answer: output is 'Hello Learn Student' 
// b) Verify and explain: is is saying undefined for some reason???? i tirted to fi it but couldnt :(


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 //console.log(multBy2)

// a) Your answer: all values will be multiplied by 2 
// b) Verify and explain: my answer is correct! .map will iterate the through the array and multiplying each value by 2. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: will return only odd numbers
// b) Verify and explain: answer is correct! .filter will give out a new array with the results that have met the condition. sp [11, 13, 15]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: this will return the first value in the language string which is javascript
// b) Verify and explain: answer is correct! becuase the vlaue of zero in the languages array is "javascript"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: name is the paramater for geroge, I hope my statement is correct!  
// b) Verify and explain: yup! im correct. though I am not sure how to explain, but this.student has a string and 'goerge' filled in. 
