console.log("A5.3_CW")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")
function printNumberpattern(n,m){
    let output = ''
    for(let i = 1;i<=n;i++){
        output = output + i
        if(i % m === 0 && i !=n){
            output = output + '#'
        }
    }
    console.log(output)
}
printNumberpattern(9,3)
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
function divisibleNumber(n,m){
    let divisibleNumber =''
    let notdivisibleNumber =''      
    for(let i = 1;i<=n;i++){
        if(i % m ===0){
            divisibleNumber = divisibleNumber +i
        }else{
            notdivisibleNumber = notdivisibleNumber + i
        }
    }
    console.log("Divisible by 3:",divisibleNumber)
    console.log("Not Divsible by 3:",notdivisibleNumber)
}
divisibleNumber(10,3)
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
function printvisiblenumberbetween(p,n,m){
    if(p<n<m){
        for(i =n;i<=m;i++){
            if(i % p === 0){
                console.log(i)
            }
        }
    }

}
printvisiblenumberbetween(2,4,9)