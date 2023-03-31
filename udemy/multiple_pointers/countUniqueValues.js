//count through the array to fin all unique values and how many there are.
const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    //create a var that starts at index 0 for array.
    let i = 0;
    //use a for loop to loop over the array, start at index 1.
    for (let j = 1; j < arr.length; j++) {
        //compare if index 1 and so on is the same as whatever var i is
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
// time O(n)



console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4