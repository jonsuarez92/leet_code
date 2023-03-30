// freq counter and how to use it 
const validAnagram = (str1, str2) => {
    // if both strings isnt the same length return false.
    if (str1.length !== str2.length) {
        return false
    }
    // create two freq counters for both strings
    let freq = {};
    //loop through both strings
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        if (freq[letter]) {
            freq[letter] += 1;
        } else {
            freq[letter] = 1;
        }
        console.log(freq)

    }
    for (let j = 0; j < str2.length; j++) {
        let letter = str2[j];
        if (!freq[letter]) {
            return false
        } else {
            freq[letter] -= 1
        }

    }
    // then return
    return true
}
// console.log(validAnagram('', '')); // true
// console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')) // true
// validAnagram("rat", "car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
