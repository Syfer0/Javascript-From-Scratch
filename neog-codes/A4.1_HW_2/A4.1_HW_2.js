console.log("A4.1_HW_2")
console.log("---- ---- ----")

function warnUser(username){
    console.log("Hey,there " + username + "! You are running out of storage.")
}
console.log (warnUser("Rushda"));

console.log("1.2")
function congratulationsMessage (message){
    console.log("$$"+ message + "$$")
}
console.log(congratulationsMessage("Congratulations! You won a lottery."))
console.log("---- ---- ----")
console.log("1.3")
function concatenateKeywords(keyword1, keyword2) {
    return keyword1 + "-" + keyword2;
  }
  console.log(concatenateKeywords("if", "else"));
console.log("---- ---- ----")
console.log("1.4")
function showTertiaryColors(color1,color2,color3,color4,color5,color6){
    return `Six Tertiary Colors: ${color1}-${color2}, ${color3}-${color2}, ${color3}-${color4}, ${color5}-${color4}, ${color5}-${color6} `

}
console.log(showTertiaryColors("Red", "Orange", "Yellow", "Green", "Blue", "Violet"))

console.log("---- ---- ----")
console.log("2.2")
function getRemainder (num1,num2){
    return num1 % num2;
}
console.log(getRemainder(10,3))
console.log("---- ---- ----")
console.log("2.3")
function calculateTotalPrice (price,quantity){
    return totalprice = price * quantity;
}
console.log(calculateTotalPrice(120,10))
console.log("---- ---- ----")
console.log("2.4")
function calculateTotalAmount (price1, price2,quantity1,quantity2){
    return (price1*quantity1) + (price2*quantity2)
}
console.log(calculateTotalAmount(120,150,10,15))
