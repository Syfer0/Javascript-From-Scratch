console.log("A5.3_HW_2")
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
function printNumberpattern(n,m){
    let output ='';
    for(let i = 1;i<=n;i++){
        output = output + i
        if(i % m === 0 && i !=n){
            output = output + '%'
        }
    }
    console.log(output)
}        
printNumberpattern(20,5)
console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
function Divisibleby5(n,m){
let divisibleNumber = '';
let NotdivisibleNumber = '';
for(let i=5;i<=n;i++){
    if(i % m ===0){
        divisibleNumber = divisibleNumber + i + ' '
    }else{
        NotdivisibleNumber = NotdivisibleNumber + i+ ' '
    }
    }
    console.log("Divisible by 5:",divisibleNumber)
    console.log("Not Divsible by :5",NotdivisibleNumber)
    }
Divisibleby5(30,5)
console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")
function printvisiblenumberbetween(p,n,m){
    if(p>n<m){
        for(i =p;i<=m;i++){
            if(i % 2 === 0){
                console.log(i)
            }
        }
    }

}
printvisiblenumberbetween(8,5,15)
