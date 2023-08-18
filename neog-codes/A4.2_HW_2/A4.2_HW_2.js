console.log("A4.2_HW_2")
console.log("---- ---- ----")
console.log("1.1")
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return `${number} is odd`;
    }
}

console.log(checkEvenOdd(6))
console.log("---- ---- ----")
console.log("1.2")
function checkGrade (score,passingscore){
    if (score >= passingscore) {
        return ` Congratulations!you are passed!`
    } else {
        return `call you Dad(abba) are fail`
    }
}
console.log(checkGrade(29,28))
console.log("---- ---- ----")
console.log("1.3")
function calculateAllowance(age, isStudent, baseAllowance) {
    if (age < 18 && isStudent) {
        return baseAllowance + 100;
    } else if (age >= 18 && age <= 25 && isStudent) {
        return baseAllowance + 50;
    } else {
        return baseAllowance;
    }
}
console.log("The updated allowance is:" +calculateAllowance(16,true,500))