/*Implement a function called, areThereDuplicates which accepts a 
variable number of arguments, and checks whether there are any 
duplicates among the arguments passed in.  You can solve this using 
the frequency counter pattern OR the multiple pointers pattern. */


/*...args syntax simply collects all the arguments that are passed to 
the function into an array, regardless of their data types.
*/
const areThereDuplicates = (...args) => {
    const seen = {};
    for (let val of args) {
        console.log('val:', val);
        console.log('seen:', seen);
        if (seen[val]) {
            console.log('Duplicate found:', val);
            return true;
        }
        else {
            //used to check whether val already exists as a property 
            //in the seen object on line 22.
            seen[val] = 1;
            console.log('Updated seen:', seen);
        }
    }
    console.log('No duplicates found');
    return false;
}
//O(n)

console.log(areThereDuplicates(1, 2, 3))// false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a'))// true


// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);