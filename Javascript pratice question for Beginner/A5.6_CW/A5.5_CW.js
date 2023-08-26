console.log("A5.6_cW");
console.log("Exercise 1")
const number = [1,2,3,4,5,6,7,8,9,10 ]
console.log("------ ------ ------");
console.log("1.1")
console.log("------ ------ ------");
console.log("number divisible by 3:");
for(let i = 0;i< number.length;i++){
    if(number[i] % 3 === 0){
        console.log(number[i])
    }
}
console.log("------ ------ ------");
console.log("1.2")
console.log("------ ------ ------");
console.log("number divisible by 5:")
for(let i = 0;i < number.length;i++){
    if(number[i] % 5 === 0){
        console.log(number[i])
    }
}
console.log("------ ------ ------");
console.log("1.3")
console.log("------ ------ ------");
let newArray =[]
for(let i = 0;i< number.length;i++){
    if(number[i]% 2 ===0){
        newArray.push(number[i])
    }
}
console.log("new array",newArray)
console.log("------ ------ ------");
console.log("1.4")
console.log("------ ------ ------");
let sum = 0
for (let i =0;i<number.length;i++){
    sum = sum + number[i]
}
console.log("sum of all number :",sum)
console.log("------ ------ ------");
console.log("1.5")
console.log("------ ------ ------");
let sumeven = 0
let sumodd = 0
for(let i = 0;i<number.length;i++){
    if(number[i]% 2===0){
        sumeven = sumeven + number[i]
    }
    if(number[i]%2 !== 0){
        sumodd = sumodd + number[i]
    }
}
console.log("sum of even number :",sumeven)
console.log("sum of odd number :",sumodd)
