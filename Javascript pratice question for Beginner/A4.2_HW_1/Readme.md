# A4.2_HW_1

## 1.1

Create a function called `checkAge` that takes one argument called `age`. Inside the function, use an if statement to check if the `age` is greater than or equal to 18. If it is, console.log a message indicating that the person is eligible for voting. Call the function with the argument (21) to see the output.

The expected output is:

```
You are eligible for voting.
```

## 1.2

Create a function called `compareNumbers` that takes two arguments called `num1` and `num2`. Inside the function, use an if/else statement to compare the values of `num1` and `num2`. If `num1` is greater than `num2`, console.log a message indicating that `num1` is greater. Otherwise, console.log a message indicating that `num2` is greater. Call the function with two arguments (10 and 5) to see the output.

The expected output is:

```
10 is greater than 5
```

### 1.3

Create a function called `calculateShippingCost` that takes three arguments: `totalWeight`, `country`, and `baseCost`. Inside the function, use if/else statements to calculate the shipping cost based on the following criteria:

- If `totalWeight` is less than or equal to 1 kg and `country` is "Local", add 10 to the `baseCost` and return the updated cost.
- If `totalWeight` is greater than 1 kg and `country` is "International", add 20 to the `baseCost` and return the updated cost.
- If none of the above conditions are met, return the `baseCost` without any additional charges.

Call the function with three arguments (total weight as 0.5, country as “Local” and base cost as 50) to see the output.

The expected output is: