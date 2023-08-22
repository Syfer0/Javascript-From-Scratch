console.log("A5.2_CW")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")
for (let i = 10;i>=1;i--){
    console.log(i)
}
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
for(let i = 10; i>=1;i--){
     result = 7 * i
    console.log( 7 + " * " +  i + " = "+ result  )
}
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
for (let i = 12; i>=2; i -=3){
    console.log(i)
}
console.log("---- ---- ----")
console.log("2.1")
console.log("---- ---- ----")
function primeNumber(n){
    for(let i =1;i<=n;i++)
    console.log(i)
}
primeNumber(5)
console.log("---- ---- ----")
console.log("2.2")
console.log("---- ---- ----")
function printoddnumber (n){
    for(let i=1; i<=n;i++){
        
        if(i % 2 !==0){
            console.log(i)
        }
    }

}
printoddnumber(200)
console.log("---- ---- ----")
console.log("2.3")
console.log("---- ---- ----")
function printDivideby5(n){
    for(let i=1;i<=n;i++){
        if(i % 5 === 0){
            console.log(i)
        }
    }
}
printDivideby5(50)