console.log("A5.3_HW_1")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")
function printNumberpattern(n,m){
    let output ='';
    for(let i = 1;i<=n;i++){
        output = output + i
        if(i % m === 0 && i !=n){
            output = output + '#'
        }
    }
    console.log(output)
}
printNumberpattern(9,4)
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")
function Divisibleby6(n,m){
let divisibleNumber=''
let NotdivisibleNumber=''
for(let i=0;i<=0;i++){
    if(i % m ===0){
        divisibleNumber = divisibleNumber + i;
    }else{
        NotdivisibleNumber = NotdivisibleNumber + i;
    }
    console.log("Divisible by 6:",divisibleNumber)
    console.log("Not Divsible by :6",NotdivisibleNumber)
    }
}
Divisibleby6(20,6)