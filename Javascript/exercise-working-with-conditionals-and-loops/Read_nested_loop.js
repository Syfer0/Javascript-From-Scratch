//  Loops and nested loops
// Let's say I want to output a custom multiplication table.

// This is a perfect use case scenario for nested loops.

// The outer loop's counter variable will act as the first number to be multiplied, and the inner loop counter variable will act as the second number to be multiplied.

// Here's my code:
//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}

// The output of the above code will be:

// 0
// 1

// This means that my for loop starts at 0 and stops after 1.

// So now I can code what will later become the inner loop, whose counter variable will be the second number in this multiplication:

//single loop
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}

// This time, the output is:

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// Now's the time to combine the first and the second loop:

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}