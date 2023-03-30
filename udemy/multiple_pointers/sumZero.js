//pointer from right and pointer working in from left shown in 1.2

//1.1
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// time complexity 0(n^2)
// space complexity o(1)

//1.2
function sumZeros(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
//o(n)
//o(1)

// const sumZeros = (arr) => {
//     // parameter arr
//     //create a var and sort the array 
//     //loop through array twice one startin at 0 index second starting at index 1
//     //check which #'s in the array sum to 0
//     //if on or no numbers add up to zero its false

// }

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3] 
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZeros([-1, 1, 2, 3])) // [-1,1]