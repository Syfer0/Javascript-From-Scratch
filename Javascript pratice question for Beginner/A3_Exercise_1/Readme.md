 # A3_Exercise_1

# Sales Performance Report

Let's create a sales performance report for a team of salespeople. We have 3 salespeople named Rahul, Priya, and Amit. Each salesperson is responsible for selling different items in varying quantities. Your task is to calculate the sales target and actual sales for each salesperson and generate a sales performance report indicating their performance level based on the following criteria:

- High Performer: Achieves 90% or more of the sales target, eligible for a 20% bonus on actual sales.
- Average Performer: Achieves between 70% and 89% of the sales target, eligible for a 10% bonus on actual sales.
- Low Performer: Achieves less than 70% of the sales target, no bonus.

Sales Targets:

- Rahul: Target of 100 units for electronics.
- Priya: Target of 200 units for clothing.
- Amit: Target of 150 units for accessories.

Write a JavaScript code to calculate the sales target and actual sales for each salesperson. Then, determine their performance level and calculate the bonus amount based on the criteria mentioned above. Finally, generate a sales performance report for each salesperson, including their sales target, actual sales, sales percentage, performance level, and bonus amount.

Follow the steps below:

Step 1:

Define the following variables:
- `rahulSalesTarget` with a value of 100
- `priyaSalesTarget` with a value of 200
- `amitSalesTarget` with a value of 150
- `rahulActualSales` with a value of 85
- `priyaActualSales` with a value of 180
- `amitActualSales` with a value of 120

Step 2:

Calculate the sales percentage for each salesperson using the formula:
- `rahulSalesPercentage` equals `(rahulActualSales / rahulSalesTarget) * 100`
- `priyaSalesPercentage` equals `(priyaActualSales / priyaSalesTarget) * 100`
- `amitSalesPercentage` equals `(amitActualSales / amitSalesTarget) * 100`

Step 3:

Generate a sales performance report for each salesperson based on the following criteria:
- If the sales percentage of a salesperson is greater than or equal to 90, set their performance as "High Performer" and their bonus as 0.2 (20% of their actual sales).
- If the sales percentage of a salesperson is greater than or equal to 70, set their performance as "Average Performer" and their bonus as 0.1 (10% of their actual sales).
- If the sales percentage of a salesperson is less than 70, set their performance as "Low Performer" and their bonus as 0.

Step 4:

Calculate the bonus amount for each salesperson using the formula:
- `rahulBonusAmount` equals `rahulActualSales * rahulBonus`
- `priyaBonusAmount` equals `priyaActualSales * priyaBonus`
- `amitBonusAmount` equals `amitActualSales * amitBonus`

Step 5:

Generate a sales performance report for each salesperson with the following details:
- Salesperson name
- Sales target
- Units sold
- Sales percentage
- Performance category
- Bonus amount

Combine the sales performance reports of all salespersons into a single `salesReport` variable.

Step 6:

Print the `salesReport` variable to display the sales performance report for each salesperson.

Note: Use the given numerical values for variables.