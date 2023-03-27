//1.()How do we assign a value to a variable?
let x = 10;
console.log(x);


//2.How do we change the value of a variable?
x = 20;
console.log(x);



//3.How do we assign an existing variable to a new variable?
//let a = {
//firstname: "Jon",
//lastname: "Suarez",}

//let b = a;
//console.log(b);

//4.Remind me, what are declare, assign, and define?

//5.What is pseudocoding and why should you do it?

//6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?



//Create a variable called firstVariable

let firstVariable;

//Assign it the value of the string "Hello World"

firstVariable = 'hello world';

//Change the value of this variable to some number

firstVariable = 2;
console.log(firstVariable)

//Store the value of firstVariablein a new variable called secondVariable
secondVariable = firstVariable;

console.log(secondVariable)

//Change the value of secondVariableto any string.

secondVariable = 'any string'

//What is the value of firstVariable?

console.log(firstVariable)
console.log(secondVariable)

//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

let yourName = 'jonathan';
let hi = 'hi, my name is ';

console.log(hi + yourName)

/*C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
 */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//D. The farm
//Declare a variable animal. Set it to be either "cow" or something else

//Write code that will print out "mooooo" if the it is equal to cow

//Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
let animal = 'cow';
if ('cow' || 'some') {
    console.log('mooooo')
} else if (!animal)
    console('heyyy! your not a cow');


//Commit


/*E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
 */

let age = 16;
if (age >= 16) {
    console.log('here are the keys')
} else if (age < 16)
    console.log('you to young');

console.log(age)

/*II. Loops
Remember: USE letwhen you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++) */

/*A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000 */

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log('///////////////////')
for (let j = 10; j <= 401; j++) {
    console.log(j)
}
console.log('///////////////////')

for (let k = 12; k <= 4000; k += 3) {
    console.log(k)
}

/*B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
 */

for (let l = 0; l <= 100; l += 2) {

    console.log(l, 'this is a even number')
}

for (let s = 0; s <= 100; s += 5) {

    console.log('I found a', s, 'high five')
}