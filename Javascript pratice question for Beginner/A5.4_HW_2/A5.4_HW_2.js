console.log("A5.4_HW_2");
console.log("Exercise 1")
console.log("------ ------ ------");
console.log("1.1")
function averageOfNumbersuptoN(n){
  let sum=0;
  let divident=0;  
  for (let i = 1;i<=n;i++){
  sum+=i;
  divident+=1;      
  }
  console.log("The average of numbers from 1 to 10: ",sum/divident)
}
averageOfNumbersuptoN(10);

console.log("------ ------ ------");
console.log("1.2")


function sumOfNumbersGreaterThanSixUpToN(n){
  let sumSix=0;
  
  for(let i =1;i<=n;i++){
    
    if(i>6){
      sumSix+=i;
    }   
  }    
  console.log("Sum of Even numbers : ",sumSix)  
}
sumOfNumbersGreaterThanSixUpToN(12);

console.log("------ ------ ------");
console.log("1.3");
function sumDivisibleByEightUpToN(n){
 let sum =0;
  for(let i=10;i<=n;i++){
    if(i%8==0){
      sum+=i;
    }
    
  }
   console.log(sum) 
}  
sumDivisibleByEightUpToN(40)
console.log("------ ------ ------");
console.log("1.4");
function sumEvenAndOddUpToN(n){
  let even=0;
  let odd=0;
for(let i =1;i<=n;i++){
  if(i%2===0){
    even+=i
  }else{
    odd+=i;
  }


  
}
  console.log("Sum of even numbers: ",even);
  console.log("Sum of Odd numbers: ",odd);


  
}
sumEvenAndOddUpToN(30)

