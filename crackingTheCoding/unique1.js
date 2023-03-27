//Arrays and strings
//hash tables 
//hash table is data structure that maps keys to vaules for highly efficient lookup

// human read ability 
//1.1
const everyCharUnique = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        /*The reason obj[str[i]] appears twice in this expression is because it is being used to first check if the property exists in the object, and then to access its value to see if it is greater than or equal to 1. */
        if (obj[str[i]] && obj[str[i]] >= 1) {
            return false;
        } else {
            obj[str[i]] = 1;
        }
    }
    return true;
}
/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abcda'), 'false');
console.log(everyCharUnique('mdjq'), 'true');
