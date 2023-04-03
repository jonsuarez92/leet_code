/*Write a function called sameFrequency. Given two positive integers,
 find out if the two numbers have the same frequency of digits. */

//completed in 13 minutes and 52 seconds

const sameFrequency = (num1, num2) => {
    //change the digits into a string to use future methods
    let str1 = num1.toString();
    let str2 = num2.toString();
    //check if both numbers of freq are the same length if not return false
    if (str1.length !== str2.length) {
        return false
    }
    //create a empty freq
    let freq1 = {};

    //loop over each num1 and num 2 with its new varibale name after making it a string

    //check if the string index is the same as the other string index if the same return true
    //else return false
    for (let i = 0; i < str1.length; i++) {
        let strNum = str1[i];
        if (freq1[strNum]) {
            freq1[strNum] += 1
        } else {
            freq1[strNum] = 1
        }
    }
    for (let j = 0; j < str2.length; j++) {
        let strNum2 = str2[j];
        if (!freq1[strNum2]) {
            return false
        } else {
            freq1[strNum2] -= 1
        }
    } return true

}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false