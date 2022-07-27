/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/
//Input: nums = [1,2,3,1]
//Output: true

const containsDuplicate = (nums) => {
    let dup = false;
    let freq = {};
    console.log('feq counter starts at', freq)
    for (let i = 0; i < nums.length; i++) {
        let character = nums[i];
        console.log('on loop', i, 'character is', character)
        console.log('feq counter on loop', i, 'is', freq)
        if (freq[character]) {
            freq[character]++;
            dup = true;
            console.log('feq counter starts at', freq)
        } else {
            freq[character] = 1;
            console.log('feq counter starts at', freq)
        }
    }
    if (dup) {
        return true
    } else return false
};
console.log(containsDuplicate(['a', 'b', 'c', 'b', 'b']))