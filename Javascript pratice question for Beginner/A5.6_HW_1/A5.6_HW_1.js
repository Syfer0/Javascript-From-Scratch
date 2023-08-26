console.log("A5.6_HW_1");
console.log("Exercise 1")
const viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42]
console.log("------ ------ ------");
console.log("1.1")
console.log("------ ------ ------");
console.log("Number divisible by 3:")
for(let i=0;i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]%3===0){
        console.log(viratKohliRuns[i])
    }
}
console.log("------ ------ ------");
console.log("1.2")
console.log("------ ------ ------");
console.log("number divisible by 5:")
for(let i = 0;i <  viratKohliRuns.length;i++){
    if( viratKohliRuns[i] % 5 === 0){
        console.log( viratKohliRuns[i])
    }
}
console.log("------ ------ ------");
console.log("1.3")
console.log("------ ------ ------");
let newArray =[]
for(let i = 0;i< viratKohliRuns.length;i++){
    if(viratKohliRuns[i]% 2 ===0){
        newArray.push(viratKohliRuns[i])
    }
}
console.log("new array",newArray)
console.log("------ ------ ------");
console.log("1.4")
console.log("------ ------ ------");
let sum = 0
for (let i =0;i<viratKohliRuns.length;i++){
    sum = sum + viratKohliRuns[i]
}
console.log("Total Run score :",sum)
console.log("------ ------ ------");
console.log("1.5")
console.log("------ ------ ------");
let sumeven = 0
let sumodd = 0
for(let i = 0;i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]% 2===0){
        sumeven = sumeven + viratKohliRuns[i]
    }
    if(viratKohliRuns[i]%2 !== 0){
        sumodd = sumodd + viratKohliRuns[i]
    }
}
console.log("sum of even viratKohliRuns :",sumeven)
console.log("sum of odd viratKohliRuns :",sumodd)