// DEFINE YOUR FUNCTION BELOW:
// function called return days 
// if else statements 

// function returnDay(days){
//     const week = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday']
//      if(days > 7 || days < 0){
//          return null
//      } else{
//          return week[days]
//      }
// }
// console.log(returnDay(10))



function returnDay(days) {
    const week = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (days > 7 || days < 1) {
        return null
    } else {
        return week[days]
    }
}
console.log(returnDay(0))