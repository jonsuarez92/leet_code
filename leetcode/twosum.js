/*Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.*/

//loop over the array to see what two numbers add up to the target
const twoSum = ( nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
    return null
}


console.log(twoSum([2, 7, 3, 6],9))//true
console.log(twoSum(9, [3,8,10,11]))//false
