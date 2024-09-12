
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
console.log(sendNotification("zihad@gmail.com"))
console.log(sendNotification("farhan34@yahoo.com"))
console.log(sendNotification("nadim.naem5@outlook.com"))
console.log(sendNotification("fahim234.hotmail.com"))
console.log(sendNotification("sadia8icloud.com"))