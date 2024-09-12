function  waitingTime(waitingTimes ,serialNumber) {
    if( !Array.isArray(waitingTimes) || typeof serialNumber !=="number"){
        return "invalid Input"
    }

    let sum = 0;
    for(const number of waitingTimes){
        sum =sum + number
    } 
   
   let averageTime = Math.round(sum /waitingTimes.length);
  let peopleWaiting = serialNumber -1;
  let peopleRemaining = peopleWaiting -waitingTimes.length;
if(peopleRemaining <=0){
    return 0;
}
let resultWaitingTime =peopleRemaining * averageTime;
return resultWaitingTime;
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7 , 10))
console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))