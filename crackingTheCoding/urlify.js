// write function that accepts argument as a str
//write method that replaces all spaces with %20
// get the length of the str


// const urlify = (str) => {

//     let convertToArr = str.trim().split('');
//     for (let i = 0; i < convertToArr.length; i++) {
//         // console.log(convertToArr[i])
//         if (convertToArr[i] === ' ') {
//             convertToArr[i] = '%20'

//         }
//     }

//     return convertToArr.join('')
// }

// console.log(urlify('i love to eat '))

const urlify = (str) => {
    let convertToArr = str.trim().split('');
    return convertToArr.map((char) => {
        return char === ' ' ? '%20' : char;
    }).join('');
}

console.log(urlify('i love to eat '));