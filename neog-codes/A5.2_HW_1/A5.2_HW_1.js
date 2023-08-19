console.log("A5.2_HW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("1.1")
console.log("---- ---- ----")
numberReverse =""
for(let i=20;i>=10;i--){
    console.log(i)
}
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
for(i=10;i>=1;i--){
    multipliyby6 = 6 * i
    console.log(6+" * "+i+" = "+multipliyby6)
}
console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")
for(let i=100;i>=10;i-=10){
    console.log(i)
}
console.log("---- ---- ----")
console.log("Exercise 2")
console.log("2.1")
console.log("---- ---- ----")
function printNumbersUpToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbersUpToN(8);
console.log("---- ---- ----")
console.log("2.2")
console.log("---- ---- ----")
function printNumbersUp(n){
    for(let i =1; i <= n; i++){
        console.log(i)
    }
}
printNumbersUp(15)
console.log("---- ---- ----")
console.log("2.3")
console.log("---- ---- ----")
function divisible(n){
    let call = ""
    for(let i=1;i<=n;i++){
        
    }
    if ( n % 5 ===0 && n % 10 === 0){
        call += i + " "; 
    }
    return call;
}
console.log(divisible(50))