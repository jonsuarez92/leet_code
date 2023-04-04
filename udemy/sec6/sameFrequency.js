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

console.log('my solution:', sameFrequency(182, 281)) // true
console.log('my solution:', sameFrequency(34, 14)) // false

// colt steele solution below.
function sameFrequencys(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        //below code is saying there one in there or 0
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
        console.log('this is count1 key vaule pair:', countNum1);

    }

    for (let j = 0; j < strNum2.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
        console.log('this is count2 key vaule pair:', countNum2);
    }
    /* for...in loops iterate over the keys of an object!!!,
    for...in loop is used to iterate over the keys of the 
    countNum1 object:*/
    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
        console.log('this is the key:', key)
        console.log('this is the vaule:', countNum1[key])
    }

    return true;
}


console.log(sameFrequencys(3589578, 5879385)) // true
console.log(sameFrequencys(22, 222)) // false