# JavaScript Exercises - Loops and Functions

This document explains the JavaScript code in the file `A5.3_CW.js`. The code contains various functions that perform different tasks using loops and conditional statements.

## Exercise 1

### 1.1 - `sumuptoN`

**Question:** What does the `sumuptoN` function do?

**Answer:** The `sumuptoN` function takes a number `n` as input and calculates the sum of all numbers from 1 to `n`.

**Code:**
```javascript
function sumuptoN(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sumuptoN(5)); // Expected Output: 15
1.2 - someofoddNumnersuptoN
Question: What does the someofoddNumnersuptoN function do?

Answer: The someofoddNumnersuptoN function takes a number n as input and calculates the sum of all odd numbers from 1 to n.

Code:

javascript
Copy code
function someofoddNumnersuptoN(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if (i % 2 !== 0){
            sum = sum + i;
        } 
    }
    return sum;
}
console.log(someofoddNumnersuptoN(7)); // Expected Output: 16
1.3 - sumofNumberDivisibleByThreeAndSevenuptoN
Question: What does the sumofNumberDivisibleByThreeAndSevenuptoN function do?

Answer: The sumofNumberDivisibleByThreeAndSevenuptoN function takes a number n as input and calculates the sum of numbers divisible by both 3 and 7, separately, from 1 to n.

Code:

javascript
Copy code
function sumofNumberDivisibleByThreeAndSevenuptoN(n){
    let sumofNumberDivisibleByThree = 0;
    let sumofNumberDivisibleBySeven = 0;
    for(let i = 1; i <= n; i++){
        if (i % 3 === 0){
            sumofNumberDivisibleByThree = sumofNumberDivisibleByThree + i;
        }
        if( i % 7 === 0){
            sumofNumberDivisibleBySeven = sumofNumberDivisibleBySeven + i;
        }
    }
    console.log("Sum of numbers divisible by 3:", sumofNumberDivisibleByThree);
    console.log("Sum of numbers divisible by 7:", sumofNumberDivisibleBySeven);
}
sumofNumberDivisibleByThreeAndSevenuptoN(21);
1.4 - factorial
Question: What does the factorial function do?

Answer: The factorial function takes a number n as input and calculates the factorial of that number.

Code:

javascript
Copy code
function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(5)); // Expected Output: 120