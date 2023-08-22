# A3.3_HW_2

Calculate and generate a quarterly savings report based on the given data. Follow the steps below:

1. Define a variable named `goalAmount` and assign it a value of `12000`. This represents the total savings goal for the quarter.
2. Define variables for the current savings and savings contributions for each month:
    - `currentSavingsMonth1` with a value of `3000`
    - `currentSavingsMonth2` with a value of `5000`
    - `currentSavingsMonth3` with a value of `8000`
    - `savingsContributionsMonth1` with a value of `1000`
    - `savingsContributionsMonth2` with a value of `1500`
    - `savingsContributionsMonth3` with a value of `2000`
3. Calculate the total current savings for the quarter by adding up the savings for each month and assign it to a variable named `totalCurrentSavings`.
4. Calculate the total savings contributions for the quarter by adding up the contributions for each month and assign it to a variable named `totalSavingsContributions`.
5. Calculate 1/4th (one-fourth) of the savings goal by dividing the `goalAmount` by `4` and assign it to a variable named `quarterlyGoalAmount`.
6. Calculate the percentage of the quarterly goal achieved by dividing `totalCurrentSavings` by `quarterlyGoalAmount` and multiplying it by `100`. Assign the result to a variable named `percentageAchieved`.
7. Determine the projected timeline for reaching the goal based on the `percentageAchieved` using an if-else statement:
    - If `percentageAchieved` is greater than or equal to `100`, assign the message "Congratulations! You have already achieved your quarterly savings goal!" to a variable named `projectedTimeline`.
    - If `percentageAchieved` is greater than or equal to `75`, assign the message "At your current savings rate, you are on track to reach your quarterly goal by the end of the quarter." to `projectedTimeline`.
    - For any other case, assign the message "Based on your current savings rate, it may take some additional time to reach your quarterly goal. Consider increasing your savings contributions." to `projectedTimeline`.
8. Provide savings tips based on the `percentageAchieved` using an if-else statement:
    - If `percentageAchieved` is greater than or equal to `80`, assign the message "Great job! You are making excellent progress towards your quarterly goal. Keep up the good work!" to a variable named `savingsTips`.
    - If `percentageAchieved` is greater than or equal to `50`, assign the message "You are halfway there! Try to find additional ways to save money and increase your savings rate." to `savingsTips`.
    - For any other case, assign the message "To reach your quarterly savings goal sooner, consider cutting back on non-essential expenses and finding opportunities to save more." to `savingsTips`.
9. Generate the quarterly savings report by concatenating all the necessary information into a formatted string:
    - Start with the header "Quarterly Savings Report".
    - Add a line of dashes for separation.
    - Include the goal amount, quarterly goal amount, total current savings, total savings contributions, and percentage achieved.
    - Add a blank line for spacing.
    - Include the projected timeline.
    - Add another blank line for spacing.
    - Include the savings tips.
10. Print the quarterly savings report.