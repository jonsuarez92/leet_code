/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as 
forward.

For example, 121 is a palindrome while 123 is not.
 */
const isPalindrome = (x) => {
    let num1 = x.toString().split('').reverse().join('');
    if (num1 == x) {
        return true
    } else if (x < 0) {
        return false
    }
    return false
};
console.log(isPalindrome(121))//true
console.log(isPalindrome(-1))//false
console.log(isPalindrome(123))//false
