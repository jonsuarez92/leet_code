// function createPhoneNumber(numbers) {
//     console.log("first pass is:", numbers)
//     numbers.unshift("(");
//     console.log("second pass is:", numbers)
//     numbers.splice(4, 0, ")", " ");
//     console.log("third pass is:", numbers)
//     numbers.splice(9, 0, "-");
//     console.log("fourth pass is:", numbers)
//     console.log("test number is", numbers[7])
//     // return numbers.join("");
// }


// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"



// add var a and var b to get the given  number
//fuction going to be given a number 
//have divide this number by 2 until the result of your division is 0
//make  a var that hols the remenders in string form 

const addBinary = (a,b) => {
    let sum = a+b;
    let toggle = true
    let remainder =  sum % 2
    let  newString = remainder.toString()
    // console.log(`this is my remainder, ${remainder.toString()}`)
   while(toggle){
//        console.log(`this is the sum: ${sum}`)
        sum = Math.floor(sum/2)
     remainder = sum % 2
     if(sum !== 0){
        newString += remainder.toString()
     }
     //  console.log(newString)
    //  console.log(`this is my remainder, ${remainder.toString()}`)
     if(sum == 0){
         let finalString = newString.split("").reverse().join("")
        //  console.log(finalString)
        return finalString
      }
    //  console.log(`this is new, ${newString}`)
 }
    }
  console.log(addBinary(266,368))