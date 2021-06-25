// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

function stringsNumber(startNum) {
    let countDownArray = []
    for(let i = startNum; i >= 0; i-- ){
        countDownArray.push(i)
    }
    return countDownArray
}

console.log(stringsNumber(5))
