console.log("A5.6_HW_2")
console.log("------ ------ ------");
console.log("Exercise 1");
console.log("1.1")
const srkEarnings = [12500020, 15000465, 950000302, 201800006, 
18000000, 11000000, 900054608, 130050087, 140000000, 160000109]
console.log(" Earnings which are divisible by 3: ")

for (let i = 0; i < srkEarnings.length; i++)
  if (srkEarnings[i] % 3 === 0) {
    console.log(srkEarnings[i])
  }

console.log("------ ------ ------");
console.log("1.2")
console.log("Earnings which are divisible by 5: ")

for (let i = 0; i < srkEarnings.length; i++) {


  if (srkEarnings[i] % 5 === 0) {
    console.log(srkEarnings[i])
  }
}
console.log("------ ------ ------");
console.log("1.3")
let numArray = []
for (let i = 0; i < srkEarnings.length; i++) {
  if (srkEarnings[i] % 2 === 0) {
    numArray.push(srkEarnings[i]);
  }
}
console.log("Earnings  divisible by 3: ", numArray)
console.log("------ ------ ------");
console.log("1.4")

let summed = 0;
for (let i = 0; i < srkEarnings.length; i++) {
  summed += srkEarnings[i];
}
console.log("Tota runs by virat kholi:")
console.log(summed)

console.log("------ ------ ------");
console.log("1.5");

let oddNums = 0;
let evenNums = 0;
for (let i = 0; i < srkEarnings.length; i++) {
  if (srkEarnings[i] % 2 === 0) {
    oddNums += srkEarnings[i];
  } else {
    evenNums += srkEarnings[i]

  }

}
console.log("Sum of odd earnings : ", oddNums);
console.log("Sum of even  earnings : ", evenNums)