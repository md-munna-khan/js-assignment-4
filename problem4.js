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



const person1=




{ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }

// { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false,   }

// { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
// "hello" 
console.log(calculateFinalScore(person1))
