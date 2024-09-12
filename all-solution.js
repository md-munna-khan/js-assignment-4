
function calculateTax(income, expenses) {
    if( income <0 || expenses <0 || income <expenses){
return "Invalid Input"
    }
    const total = income - expenses;
    let tex = total *.20;
    return tex
}



function sendNotification(email) {
    if(typeof email !=="string"){
        return "Invalid Email"
    }
    if(!email.includes("@")){
        return "Invalid Email"
    }
  
    let splitEmail =email.split("@");
const userName =splitEmail[0];
const domainName =splitEmail[1];
const notificationMessage = userName +" sent you an email from " + domainName;
return notificationMessage
}

function checkDigitsInName(name) {
    if(typeof name !=="string"){
        return "Invalid Input"
    }
for(let element of name){
  if (!isNaN(element)  ){
    return true
  }
}
return false

  }

  
  function calculateFinalScore(obj) {
    if(typeof obj !=="object"){
        return "Invalid Input"
    }
let total_marks = obj.testScore + obj.schoolGrade;
if(obj.isFFamily){
    total_marks = total_marks + (total_marks * 0.2)
}

if(obj.isFFamily && total_marks >=80  ){
    return true
} else if(!obj.isFFamily && total_marks < 80){
    return false
}
else if(obj.isFFamily && total_marks < 80){
    return false
}


}




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