console.log("A5.3_HW_1")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")
function sumUpToN(n){
    let sum = 0
    for(let i =1;i<=n;i++){
        sum = sum + i
    }
    return sum
}
console.log(sumUpToN(10))
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
function sumOfEvenNumbersUpToN (n){
    let sum = 0
    for(let i =1;i<=n;i++){
        if(i % 2 ===0){
            sum = sum + i 
             
        }
    }
    return sum
}
console.log("sum of even Number:",sumOfEvenNumbersUpToN(9))
console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")
function sumDivisibleByFiveAndSevenUpToN(n){
    let sumofoddNumberByseven = 0
    let sumDivisibleByFive = 0
    for(let i =1;i<=n;i++){
        if(i % 5 === 0){
            sumDivisibleByFive = sumDivisibleByFive + i
            
        }
        if( i % 7 == 0){
            sumofoddNumberByseven = sumofoddNumberByseven + i
            

        }
    }
    console.log("sum of Number divisible By 5 :",sumDivisibleByFive)
    console.log("sum of Number divisible By 7:"+" ",sumofoddNumberByseven)
}
sumDivisibleByFiveAndSevenUpToN(35)
console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")
function factorial (n){
    let result = 1
    for(let i = 1;i<=n;i++){
        result = result * i
    }
    return result
}
console.log(factorial(7))
