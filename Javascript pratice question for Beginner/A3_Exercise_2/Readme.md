# A3_Exercise_2

Let's create a calorie tracker and report system to monitor your calorie burnt and intake for 5 days. Based on the data, we'll generate a daily report and a weekly summary to evaluate your performance. Additionally, we'll introduce some award based on certain achievements.

Data:

- Day 1: Calorie Burnt - 400, Calorie Intake - 1500
- Day 2: Calorie Burnt - 450, Calorie Intake - 1800
- Day 3: Calorie Burnt - 300, Calorie Intake - 1600
- Day 4: Calorie Burnt - 500, Calorie Intake - 2000
- Day 5: Calorie Burnt - 350, Calorie Intake - 1700

Award:

- Standing Goal Achievements: If 1000 or more calories burnt in total, then you get this badge.

Write a JavaScript code snippet to track the calorie burnt and intake data for 5 days. Calculate the surplus (sufficient on calories) or deficit of calories (low on calories) for each day and generate a daily report indicating whether you're in a surplus or not. At the end of the week, generate a weekly summary with additional award based on the predefined criteria.

### Follow the steps:

Step 1:
Define variables for calorie burnt and intake for each day:

- `day1Burnt` with the value 400
- `day1Intake` with the value 1500
- `day2Burnt` with the value 450
- `day2Intake` with the value 1800
- `day3Burnt` with the value 300
- `day3Intake` with the value 1600
- `day4Burnt` with the value 500
- `day4Intake` with the value 2000
- `day5Burnt` with the value 350
- `day5Intake` with the value 1700

Step 2:
Define the base calorie burn for a normal human being:

- `baseCalorieBurn` with the value 1500

Step 3:
Calculate the surplus/deficit for each day and generate the daily report:

- Calculate `day1Surplus` as the difference between `day1Burnt` and the sum of `day1Intake` and `baseCalorieBurn`
- Generate the daily report for Day 1 with the format "Day 1: Surplus/Deficit - [day1Surplus] ([Surplus/Deficit])"
- Repeat the above steps for Days 2, 3, 4, and 5, calculating the surplus/deficit and generating the daily report accordingly

Step 4:
Calculate the total calories burnt and intake for the week:

- Calculate `totalBurnt` as the sum of burnt calories for all 5 days
- Calculate `totalIntake` as the sum of intake calories for all 5 days
- Calculate `totalSurplus` as the difference between `totalBurnt` and the sum of `totalIntake` and 5 times `baseCalorieBurn`

Step 5:
Generate the weekly summary and awards based on predefined criteria:

- Create a variable `weeklySummary` with the initial value "\nWeekly Summary:\n"
- Append the total calories burnt, total calories intake, and total surplus/deficit to the `weeklySummary` variable
- Create a variable `standingGoalAwards` to store the standing goal achievements
- Evaluate the criteria for standing goal achievements and append the appropriate achievements to the `standingGoalAwards` variable.
- If 1000 or more calories burnt in total, then print the message, “Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!”
- If less than 1000 calories is burnt in total, print the message, “No Award yet”.
- Concatenate the`standingGoalAwards` to the `weeklySummary`.

Step 6:
Print the daily reports, weekly summary, and award:

- Print "Daily Reports:\n"
- Print the `dailyReports` variable containing the daily reports for each day
- Print the `weeklySummary` variable containing the weekly summary and award.

Complete the exercise by writing and running the code and examining the daily reports and weekly summary with award.

Good luck!

### a sample report format (don’t match your output values with this)