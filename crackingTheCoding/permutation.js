//1.2
//first create a function that accepts 2 argumants of str1 and str2
// create if  else statement to see if its the same length
//make sure both str1 === str2 for it to be a permutation

const permutation = (str1, str2) => {

    if (str1.length !== str2.length) {
        return false
    } else {
        s1 = str1.split('').sort().join('');
        s2 = str2.split('').sort().join('');
        s1 === s2;
        return true
    }
}

console.log(permutation('aba', 'aab'))