console.log("A4.2_HW_1")
console.log("---- ---- ----")
console.log("1.2")
function checkAge(age) {
    if (age >= 18) {
        return "The person is eligible for voting";
    } else {
        return "The person is not eligible for voting";
    }
}
console.log(checkAge(12))
console.log("---- ---- ----")
console.log("1.2")
function compareNumbers(num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
    } else {
      console.log(`${num2} is greater than ${num1}`);
    }
  }
  
compareNumbers(10, 5);
console.log("---- ---- ----")
console.log("1.3")
function calculateShippingCost (totalWeight, country,basecost){
    if (totalWeight<=1  && country === "Local") {
        return basecost+10;
    } else if (totalWeight > 1 && country === "International") {
        return basecost + 20;
    } else {
        return basecost;
    }
}
console.log("the updated shipping cost:",calculateShippingCost(0.5,"Local",50))