const numIdenticalPairs = (nums) => {
    //var to return
    let ans = 0;
    // nested loop of i and j
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                console.log(nums[i], nums[j])
                ans++
            }
        }
    } return ans
    //if statement to see if its a pair else move to the next
}


console.log(numIdenticalPairs([1, 1, 1, 1]));