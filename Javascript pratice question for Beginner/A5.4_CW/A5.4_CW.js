console.log("A5.3_CW")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")
function sumuptoN(n){
    let sum = 0
    for(let i=1;i<=n;i++){
        sum = sum + i
    }
    return sum
}
console.log(sumuptoN(5))
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
function someofoddNumnersuptoN(n){
    let sum = 0
    for(let i=0;i<=n;i++){
        if (i % 2 !== 0){
            sum = sum + i
        } 
    }
    return sum
}
console.log(someofoddNumnersuptoN(7))
console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")
function sumofNumberDivisibleByThreeAndSevenuptoN(n){
    let sumofNumberDivisibleByThree = 0
    let sumofNumberDivisibleBySeven = 0
    for(let i = 1;i<=n;i++){
        if (i %3 === 0){
        sumofNumberDivisibleByThree = sumofNumberDivisibleByThree + i
    }
        if( i % 7 === 0){
            sumofNumberDivisibleBySeven = sumofNumberDivisibleBySeven + i
        }
    }
    console.log(" sum number are divisible by 3:" + " ",sumofNumberDivisibleByThree)
    console.log("sum number are divisible by 7:" + " ",sumofNumberDivisibleBySeven)
}
sumofNumberDivisibleByThreeAndSevenuptoN(21)
console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")
function factorial(n){
    let result = 1
    for(let i = 1;i<=n;i++){
        result = result * i
    }
    return result 
}
console.log(factorial(5))