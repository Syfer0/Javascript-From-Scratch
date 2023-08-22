# A4.2_HW_2

### 1.1

Create a function called `checkEvenOdd` that takes one argument called `number`. Inside the function, use an if-else statement to check if the `number` is even or odd. If it is even, console.log a message indicating that the number is even. If it is odd, console.log a message indicating that the number is odd.

Call the function with the argument (9) to see the output.

Expected output:

```
The number is odd.
```

### 1.2

Create a function called **`checkGrade`** that takes two arguments, **`score`** and **`passingScore`**. Inside the function, use an if statement to compare the **`score`** with the **`passingScore`**. If the **`score`** is greater than or equal to the **`passingScore`**, console.log a message indicating that the student has passed. 

Call the function with two arguments (score as 85 and passing score as 60) to see the output.

Expected output:

```
Congratulations! You have passed.
```

### 1.3

Create a function called `calculateAllowance` that takes three arguments: `age`, `isStudent` and `baseAllowance`. Inside the function, use if/else statements to determine the additional allowance based on the following criteria:

- If `age` is less than 18 and `isStudent` is true, add 100 to the `baseAllowance` and return the updated allowance.
- If `age` is between 18 and 25 (inclusive of both 18 and 25) and `isStudent` is true, add 50 to the `baseAllowance` and return the updated allowance.
- If none of the above conditions are met, return the original `baseAllowance`.

Call the function with three arguments (age as 16, isStudent as true and base allowance as 500) to see the output.

Expected output:
The updated allowance is: 600