# A3_Assignment

In this assignment, you will write JavaScript code to perform a monthly budget analysis based on provided income sources and expense categories. Your task is to calculate the total income, total expenses, and budget surplus or deficit. Additionally, you will determine the budget status, provide insights on spending patterns, and offer budget management tips.

### Follow the Steps:

1. Define variables for income sources and expense categories:
    - `salary` with a value of ₹50,000
    - `sideHustles` with a value of ₹10,000
    - `groceries` with a value of ₹5,000
    - `utilities` with a value of ₹2,000
    - `rent` with a value of ₹20,000
    - `transportation` with a value of ₹3,000
    
    Use only the values/numbers. Add the ₹ symbol, only for printing purposes.
    
2. Calculate the total income by adding up the income sources (salary and sideHustle) and assign it to a variable named `totalIncome`.
3. Calculate the total expenses by adding up the expenses (groceries, utilities, rent and transportation) and assign it to a variable named `totalExpenses`.
4. Calculate the budget surplus or deficit by subtracting the total expenses from the total income and assign it to a variable named `budgetSurplusDeficit`.
    - Budget Surplus means if you have an amount in positive (`budgetSurplusDeficit`>= 0) after deducting total expenses from total income.
    - Budget deficit means if you have a negative amount (`budgetSurplusDeficit` < 0) after deducting total expenses from total income.
5. Determine the budget status based on the `budgetSurplusDeficit` using an if-else statement:
    - If `budgetSurplusDeficit` is greater than or equal to `0`, assign the message "Congratulations! You have a budget surplus." to a variable named `budgetStatus`.
    - If `budgetSurplusDeficit` is less than `0`, assign the message "Oops! You have a budget deficit. Consider reducing expenses or increasing income." to `budgetStatus`.
6. Provide insights on spending patterns based on the total expenses using an if-else-if-else ladder:
    - If `totalExpenses` is less than or equal to ₹10,000, assign the message "Great job! You have maintained a low expense level." to a variable named `spendingInsights`.
    - If `totalExpenses` is between ₹10,000 and ₹20,000, assign the message "Your expenses are moderate. Look for opportunities to reduce unnecessary spending." to `spendingInsights`.
    - If `totalExpenses` is between ₹20,000 and ₹30,000, assign the message "Your expenses are on the higher side. Consider creating a more detailed budget to manage your spending." to `spendingInsights`.
    - For any other case, assign the message "Your expenses are quite high. It is essential to analyze your spending habits and make necessary adjustments." to `spendingInsights`.
7. Provide budget management tips based on the `budgetSurplusDeficit` using an if-else statement:
    - If `budgetSurplusDeficit` is greater than or equal to ₹10,000, assign the message "You have a significant budget surplus. Consider allocating the surplus towards savings or debt repayment." to a variable named `budgetTips`.
    - If `budgetSurplusDeficit` is less than ₹10,000 and greater than or equal to ₹-10,000, assign the message "Your budget is relatively balanced. Focus on maintaining your current financial habits." to `budgetTips`.
    - For any other case, assign the message "You have a budget deficit. Evaluate your expenses and identify areas where you can cut back." to `budgetTips`.
8. Generate the monthly budget analysis report by concatenating all the necessary information into a formatted string:
    - Start with the header "Monthly Budget Analysis Report".
    - Add a line of dashes for separation.
    - Include the total income, total expenses, and the budget surplus or deficit.
    - Add a blank line for spacing.
    - Include the budget status.
    - Add another blank line for spacing.
    - Include the spending insights.
    - Add a final blank line for spacing.
    - Include the budget management tips.
9. Print the monthly budget analysis report using the `console.log()` function.

Remember to assign the calculated values to the respective variables and format the output according to the provided instructions.

### sample report form

(This is just a sample report, don’t match your output values with this)

Monthly Budget Analysis Report
--------------------------------
Total Income: ₹60000
Total Expenses: ₹30000
Budget Surplus/Deficit: ₹32000

Budget Status: Congratulations! You have a budget surplus.

Spending Insights:
Your expenses are moderate. Look for opportunities to reduce unnecessary spending.

Budget Management Tips:
You have a significant budget surplus. Consider allocating the surplus towards savings or debt repayment.