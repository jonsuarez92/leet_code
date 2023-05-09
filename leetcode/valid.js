/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

//create a list of char with valid char 
//loop through all possible char
//create a if statement to see if the opening char and closing char is the same.
const isValid = (s) => {
    // Create a stack to keep track of opening brackets
    const stack = [];

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        // console.log(c)

        // If the current character is an opening bracket, push it onto the stack
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            // Otherwise, if the stack is empty or the current character doesn't match the last opening bracket, return false
            if (stack.length === 0 ||
                (c === ')' && stack[stack.length - 1] !== '(') ||
                (c === ']' && stack[stack.length - 1] !== '[') ||
                (c === '}' && stack[stack.length - 1] !== '{')) {
                console.log(`this is whats in the array: ${stack[stack.length - 1]}`)
                console.log(`this is closing bracket: ${c}`)
                return false;
            }

            // If the current character is a closing bracket and it matches the last opening bracket, pop the opening bracket from the stack
            stack.pop();
            console.log(stack)
        }
    }

    // If the stack is empty, all brackets have been matched and the string is valid
    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("(])")); // false