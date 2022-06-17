function createPhoneNumber(numbers) {
    console.log("first pass is:", numbers)
    numbers.unshift("(");
    console.log("second pass is:", numbers)
    numbers.splice(4, 0, ")", " ");
    console.log("third pass is:", numbers)
    numbers.splice(9, 0, "-");
    console.log("fourth pass is:", numbers)
    console.log("test number is", numbers[7])
    // return numbers.join("");
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"

