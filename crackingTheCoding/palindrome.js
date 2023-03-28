
//need some work 
const palindrome = (str) => {

    for (let i = 0; i <= str.length; i++) {
        let normalStr = str.split('').join('')
        // console.log('normal:', normalStr)
        let reverseStr = str.split('').reverse().join('');
        // console.log('reverse:', reverseStr)
        if (normalStr.charAt([i]) === reverseStr[i]) {
            // console.log('this the normal string:', normalStr[i])
            // console.log('this the reverse:', reverseStr[i])
            return true
        }
    } return false
}
console.log(palindrome('atco cta'))


