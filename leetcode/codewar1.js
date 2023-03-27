
/*Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//want to first make a variable to hold any word you put as the argument.
//want remove the dashes and make the next letter captial in 
//the sentence using the splice method.
// use toUpperCase method
// loop to find

const toCamelCase = (str) => {
    let outPut = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (outPut[i] == '-' || outPut[i] == '_') {
            outPut.splice(i, 1)
            let next = outPut[i]
            // console.log(next)
            outPut.splice(i, 1, next.toUpperCase())
        }

    }

    return outPut.join('')
}

toCamelCase('test_jon-test')