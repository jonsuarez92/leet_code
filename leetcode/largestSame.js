/*Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777". */

const largestGoodInteger = (num) => {
    let outPut = '';
    let temp = '';
    for (let i = 0; i < num.length; i++) {
        if (num[i] == num[i + 1] && num[i] == num[i + 2]) {
            // console.log(num[i], num[i + 1], num[i + 2])
            temp = num[i] + num[i + 1] + num[i + 2]
            if (temp > outPut) {
                outPut = temp
            }
        }
    }

    return outPut
}

console.log(largestGoodInteger('123456777'))
