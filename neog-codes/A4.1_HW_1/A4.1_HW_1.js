console.log("A4.1_HW")
console.log("------------------------");
console.log("Exercise 1")
console.log("------------------------");

function greeetuser(){
    console.log("good morning!")
}
greeetuser();

console.log("---- ---- ----")
console.log("1.2");
function welcomemessage(userName){
    console.log("Hey there, " + userName + "! We are thrilled to have you.!" )
}
welcomemessage("Rushda");

console.log("---- ---- ----")
console.log("1.3")
function formatMessege(messege){
    return "**" + messege + "**"
}
console.log(formatMessege("Learning functions with return in javaScript."))

console.log("---- ---- ----")
console.log("1.4")
function concatenateStrings  (string1,string2){
    return(string1 +" "+string2)
}

console.log("---- ---- ----")
console.log(concatenateStrings("red","bull"));
console.log("2.1")
function incrementAgeBy5(age){
    return age + 5 
}
console.log(incrementAgeBy5(25))

console.log("---- ---- ----")
console.log("2.2")
function calculateProduct(num1,num2){
     return num1*num2
}
console.log(calculateProduct(10,30))

console.log("---- ---- ----")
console.log("2.3")
function calculateDiscountAmount(price,discountPercentage){
    return(price * discountPercentage) /100
} 
console.log(calculateDiscountAmount(1000,20))
console.log("---- ---- ----")
console.log("2.4")
function calculateNetSalary(basesalary,performancebonus){
    return basesalary + performancebonus
}
console.log(calculateNetSalary(290000,20000))