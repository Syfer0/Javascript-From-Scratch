 Sure, here's a step-by-step guide on how to understand and use the JavaScript code provided in your "A4._CW" exercise. You can use this information :

---

# A4._CW Code Exercise Readme

This repository contains JavaScript code snippets for various exercises as part of the "A4._CW" assignment. Each exercise focuses on a specific function and its usage. Let's walk through the exercises step by step:

## Exercise 1

### 1.1 - Greeting Function
In this exercise, a function named `greetUser` is defined to welcome users to a website. It logs a message "Welcome to our website" to the console.

```javascript
function greetUser(){
  console.log("Welcome to our website");
}
greetUser();
```

### 1.2 - Greeting with Name
Here, a function named `greetPerson` takes a `name` parameter and greets the person using the provided name. The function logs a customized message to the console.

```javascript
function greetPerson(name){
  console.log("Hello, " + name + " ! Welcome to our website");
}
greetPerson("rushda");
```

### 1.3 - Formatting Message
The `formatMessage` function formats a given message by enclosing it in asterisks (`*`). The formatted message is returned.

```javascript
function formatMessage(message){
  return "*" + message + "*";
}
console.log(formatMessage("Hello, World"));
```

### 1.4 - Combining Strings
This function named `combineStrings` takes two strings as input and combines them with a space in between. The combined string is returned.

```javascript
function combineStrings(string1, string2){
  return string1 + " " + string2;
}
console.log(combineStrings("Hello,", "World"));
```

## Exercise 2

### 2.1 - Incrementing Age
The `incrementAge` function takes an `age` as input and returns the age incremented by 1.

```javascript
function incrementAge(age){
  return age + 1;
}
console.log(incrementAge(22));
```

### 2.2 - Calculating Square
The `calculateSquare` function calculates the square of a given number.

```javascript
function calculateSquare(number){
  return number * number;
}
console.log(calculateSquare(2));
```

### 2.3 - Calculating Discounted Price
Here, the `calculateDiscountedPrice` function calculates the discounted price based on the original price and a discount percentage.

```javascript
function calculateDiscountedPrice(price, discountPercentage){
  return price - (price * discountPercentage) / 100;
}
console.log(calculateDiscountedPrice(500, 5));
```

### 2.4 - Calculating Salary
The `calculateSalary` function computes the salary based on hours worked and hourly rate.

```javascript
function calculateSalary(hoursWorked, hourlyRate){
  return hoursWorked * hourlyRate;
}
console.log(calculateSalary(24, 500));
```

---

 