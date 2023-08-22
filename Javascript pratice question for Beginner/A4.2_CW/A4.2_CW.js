console.log("A4.Cw");
console.log("---- ---- ----")

console.log("1.1")
function CheckTemperature (temperature){
    if (temperature> 30) {
        console.log("That it's hot day.")
    }
}

CheckTemperature(35)
 
console.log("1,2")
function checkDiscountEligibility(totalamount,DicountThresholed){
    if (totalamount>= DicountThresholed) {
        console.log ("your Eligible for discount")
    }else{
        console.log("customer not eligible for discount")
    }
}
checkDiscountEligibility(500,100)
console.log("---- ---- ----")

console.log("1.3")

function largerstNumber(num1,num2,num3){
    if (num1 >num2 && num1> num3 ) {
       return num1
    }else if(num2>num1 && num2 > num3){
        return num2
    }else if(num3>num1 && num3>num2){
        return num3
    }
}
console.log(largerstNumber(100,49,40))
console.log("---- ---- ----")
console.log("1.4")
function calculateBonus (workHour,Grade,Totalsalary){
    if (workHour > 25 && Grade>85) {
        return Totalsalary + (Totalsalary*10)/100
    }else if (workHour >15 && Grade > 75 ) {
        return Totalsalary + (Totalsalary*5)/100
    }else{
        return Totalsalary
    }
}
console.log(calculateBonus(20,95,1000))
