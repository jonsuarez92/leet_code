//understand the problem?
/* 1.explain the problem in your own words!*/

//explore the concrete examples?
/*1.start with simple examples with input and output!*/

//break it down, puesdo code shown in code below!

//solve/simplify?
/* write a simplified solution amd leave diffuclt part for the end! */

const charCount = (str) => {
    //make a object to return at end
    let freq = {};
    //loop over string, for each char...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        //if the char is a num/letter  and is a key in object, add one to count
        if (freq[char] > 0) {
            freq[char]++;
            //if the char is a num/letter  and is a key in object, add one to count
        } else {
            freq[char] = 1;
        }
    }
    //if char is something else (space,period,etc.) dont do anything

    //return object at end
    return freq;
}
console.log(charCount('hello'))
/*
REFACTORING QUESTIONS
Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem? */