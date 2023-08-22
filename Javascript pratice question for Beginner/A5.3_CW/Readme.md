# A5.3_CW Readme

## Exercise 1
### 1.1
#### Print Number Pattern

The function `printNumberpattern(n, m)` takes two arguments: `n` and `m`. It prints a pattern of numbers from 1 to `n`, where `m` indicates the position where a '#' character will be added.

```javascript
function printNumberpattern(n, m){
    let output = '';
    for(let i = 1; i <= n; i++){
        output = output + i;
        if(i % m === 0 && i !== n){
            output = output + '#';
        }
    }
    console.log(output);
}
Output for printNumberpattern(9, 3):

less
Copy code
1#23#45#67#89
1.2
Divisible Numbers
The function divisibleNumber(n, m) takes two arguments: n and m. It prints numbers from 0 to n, indicating whether each number is divisible by m or not.

javascript
Copy code
function divisibleNumber(n, m){
    let divisibleNumbers = '';
    let notDivisibleNumbers = '';
    for(let i = 0; i <= n; i++){
        if(i % m === 0){
            divisibleNumbers = divisibleNumbers + i + ' ';
        }else{
            notDivisibleNumbers = notDivisibleNumbers + i + ' ';
        }
    }
    console.log("Divisible by " + m + ": " + divisibleNumbers);
    console.log("Not Divisible by " + m + ": " + notDivisibleNumbers);
}
Output for divisibleNumber(10, 3):

mathematica
Copy code
Divisible by 3: 0 3 6 9 
Not Divisible by 3: 1 2 4 5 7 8 10 
Exercise 2
2.1
Print Visible Numbers Between Range
The function printVisibleNumberBetween(p, n, m) takes three arguments: p, n, and m. It prints numbers between n and m (inclusive) that are divisible by p.

javascript
Copy code
function printVisibleNumberBetween(p, n, m){
    if(p < n && n < m){
        for(let i = n; i <= m; i++){
            if(i % p === 0){
                console.log(i);
            }
        }
    }
}
Output for printVisibleNumberBetween(2, 4, 9):

Copy code
4
6
8
 