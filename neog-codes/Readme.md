# A3.3_HW_1
problem statement 
## 1

In this exercise, you will be calculating the payslip for three employees based on various factors such as grade, hours worked, salary, leave taken, and bonus eligibility. You will perform calculations to determine the bonus, PF deduction, TDS deduction, vacation and sick leave deductions, and net salary for each employee. Finally, you will generate the payslip for each employee.

### 1.1

Define the following variables for Employee 1:

- `employee1Name` with the value "Rahul"
- `employee1Grade` with the value 90
- `employee1HoursWorked` with the value 27
- `employee1Salary` with the value 45000
- `employee1VacationLeaveTaken` with the value 2
- `employee1SickLeaveTaken` with the value 1

### 1.2

Calculate the bonus for Employee 1 based on the following conditions:

- If the hours worked by Employee 1 is greater than 30 and the grade is greater than 75, set `employee1Bonus` to 0.2.
- Else if the hours worked by Employee 1 is greater than 25 and the grade is greater than 95, set `employee1Bonus` to 0.15.
- Else if the hours worked by Employee 1 is greater than 25 and the grade is greater than 85, set `employee1Bonus` to 0.1.

### 1.3

Calculate the PF (Provident Fund) deduction for Employee 1 based on the following conditions:

- If the salary of Employee 1 is greater than 35000, calculate `employee1PFDeduction` as 12.5% of the salary
- Else, set `employee1PFDeduction` to 2500

### 1.4

Calculate the TDS (Tax Deducted at Source) deduction for Employee 1 based on the following conditions:

- If the salary of Employee 1 is greater than 40000, calculate `employee1TDSDeduction` as 10% of the salary
- Else, set `employee1TDSDeduction` to 199

### 1.5

Calculate the deductions for vacation leave and sick leave for Employee 1:

- Calculate `employee1VacationDeduction` as the product of `employee1VacationLeaveTaken` and the daily salary (i.e., `employee1Salary / 30`)
- Calculate `employee1SickDeduction` as the product of `employee1SickLeaveTaken` and the daily salary (i.e., `employee1Salary / 30`)

### 1.6

Calculate the net salary for Employee 1:

- Calculate `employee1NetSalary` as the sum of the salary (`employee1Salary`) and bonus amount(i.e. `employee1Salary * employee1Bonus`), and deduct the PF, TDS, vacation deductions and sick deductions from the net salary.

### 1.7

Generate the payslip for Employee 1:

- Create a string variable `employee1Payslip` with the following format:

```
Employee Name: [employee1Name]
Grade: [employee1Grade]
Hours Worked: [employee1HoursWorked]
Salary: [employee1Salary]
Bonus: [employee1Bonus]
PF Deduction: [employee1PFDeduction]
TDS Deduction: [employee1TDSDeduction]
Vacation Deduction: [employee1VacationDeduction]
Sick Deduction: [employee1SickDeduction]
Net Salary: [employee1NetSalary]

```

- Replace the placeholders ([...]) with the corresponding variable values

### 1.8

Print the payslip for Employee 1:

- Output the payslip for Employee 1 using the `console.log()` function
- Include a separator line after printing the payslip