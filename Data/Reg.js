// Regular Expressions
// RegExp Constructor
// with constructor
let regEx = new RegExp('love', 'gi')
// without constructor
regEx = /love/gi

// RegExp Object Methods
// 1. Reg.test() Testing for a match
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result) // true

// 2. String.match() Array containing all of the match
// If we do not use a global flag, match() returns an array containing the pattern, index, input and group
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result) // ["love", index: 2, input: "I love JavaScript", groups: undefined]

const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result) // ['love']

// 3. String.search() Search for the match
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result) // 2 (index)
console.log(str.search(/base/g)) // -1 (search failed)

// 4. String.replace() Replacing a substring
const txt =
  'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

const txt =
  '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)

// I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

// Meta Characters Example
// 1. [] Square Bracket
const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches) // ["Apple", "banana", "apple", "banana", "Banana"]

// 2. Escape character(\) in RegExp & One or more times(+)
const pattern = /\d+/g // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt.match(pattern)
console.log(matches) // ["12", "2020"]

// 3. Period(.) any character
const pattern = /[a]./g // this square bracket means a and . means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches) // ["an", "an", "an", "a ", "ar"]

// 4. Zero or more times(*)
const pattern = /[a].*/g
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches) // ['and banana are fruits']

// 5. Zero or one times(?)
const txt =
  'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g // ? means optional
matches = txt.match(pattern)

console.log(matches) // ["e-mail", "email", "Email", "E-mail"]

// 6. Quantifier in RegExp({})
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b[a-zA-Z]{4}\b/g //  exactly four character  words without numbers
const matches = txt.match(pattern)
console.log(matches) //['This', 'made']

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{1,4}/g // 1 to 4
const matches = txt.match(pattern)
console.log(matches) // ['6', '2019']

// 7. Cart ^
// Start With
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches) // ['This']

// Negation
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern)
console.log(matches) // ["6", "2019"]

// 8. Exact match ^ $
let pattern = /^[A-Z][a-z]{3,12}$/
let name = 'Asabeneh'
let result = pattern.test(name)

console.log(result) // true
