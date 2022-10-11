/*
 * @param {number[]} nums
 * @return {number}
 * Given a non-empty array of integers nums, every element appears 
 * twice except for one. Find that single one. You must implement a 
 * solution with a linear runtime complexity and use only constant 
 * extra space.
 * Input: nums = [4,1,2,1,2]
Output: 4
 */
// const singleNumber = (nums) => {
//     let res = 0
//     //loop throught the nums.lemgth
//     for (i = 0; i < nums.length; i++) {
//         for (j = 1; j < nums.length; j++) {
//             if (nums[i] !== nums[j]) {

//             }
//         }
//         //if number appears once


//         console.log(nums.length);

//         //if number is a pair
//     }

// };
// console.log(singleNumber([1, 2, 1, 2, 5, 6, 6]));


const singleNumber = (nums) => {
    let res = {};
    nums.forEach((singleNum) => {
        // res[singleNum] = 'monday'
        // console.log(singleNum)
        //line 38 is stating if its not in there put one in there
        if (!res[singleNum]) {
            res[singleNum] = 1
        } else {
            res[singleNum] += 1
        }
    });
    return Object.keys(res).find(key => res[key] === 1)
};
console.log(singleNumber([1, 2, 1, 2, 5, 6, 6, 7, 7]));

