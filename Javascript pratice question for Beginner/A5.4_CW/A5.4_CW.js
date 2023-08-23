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