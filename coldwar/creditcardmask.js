/*Usually when you buy something, you're asked whether your credit card number,
 phone number or answer to your most secret question is still correct. However,
 since someone could look over your shoulder, you don't want that shown on your screen. 
 Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/

// return masked string
const maskify = (cc) => {
    let ccArr = Array.from(cc);
    let lengthCC = cc.length
    let shownNum = cc.slice(-4);
    let newArr = [];
    
    if(lengthCC < 4){
        return cc
        } else if (lengthCC > 4){
            let idx = lengthCC -4;
        ccArr.splice(idx, 4);
        ccArr.forEach(()=> {
            newArr.push('#');
            return newArr
        });
        finalArr = newArr.concat(shownNum).join('')
        return finalArr
    }
}


console.log(maskify('4556364607935616'));

