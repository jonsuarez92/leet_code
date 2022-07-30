//Given a string s consisting of words and spaces, return the length of the last word in the string.
//Input: s = "Hello World"
//Output: 5
//Explanation: The last word is "World" with length 5.

const lengthOfLastWord = (s) => {
    let arr = s.trim().split(' ')
    return arr[arr.length - 1].length

};

