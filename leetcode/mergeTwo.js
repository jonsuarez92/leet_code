/*Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]*/

/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.*/

// const mergeTwoLists = (list1, list2) => {
//     //make new arr to splice and push into new arr
//     let newArr = []
//     let p1 = list1
//     let p2 = list2

//     //loop over list and list2  for num to be splice into new arr
//     p1.forEach((l1) => {
//         // console.log(l1)
//         newArr.push(l1)
//     })
//     p2.forEach((l2) => {
//         // console.log(l1)
//         newArr.push(l2)
//     })
//     return console.log(newArr.sort());
// };

const mergeTwoLists = (list1, list2) => {
    //make new arr to splice and push into new arr
    let newArr = []
    let p1 = list1
    let p2 = list2

    //loop over list and list2  for num to be splice into new arr
    p1.forEach((l1) => {
        // console.log(l1)
        newArr.push(l1)
    })
    p2.forEach((l2) => {
        // console.log(l1)
        newArr.push(l2)
    })
    return console.log(newArr.sort());
};


mergeTwoLists([1, 2, 4], [3, 4, 5]);

