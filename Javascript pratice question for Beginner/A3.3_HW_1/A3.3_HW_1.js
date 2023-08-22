console.log("A3.3_HW_1")

let employee1 = "Rahul";
let employeeGrade = 90;
let employee1hoursworks =27;
let employee1salary = 45000;
let employee1VacationLeaveTaken =2;
let employee1sickleaveTaken = 1;

let employee1Bonus; 
if ( employeeGrade > 75 && employee1hoursworks > 30  ){
    employee1Bonus = 0.2;
    
}else if(employee1hoursworks > 25 && employeeGrade > 95){
    employee1Bonus = 0.15;

}else if(employee1hoursworks >25 && employeeGrade > 85){
    employee1Bonus = 0.1;
}

let employee1PFDeduction;
if (employee1 > 35000  ) {
    employee1PFDeduction = employee1salary * 0.125;
}else{
    employee1PFDeduction = 2500;
}
//tax deduction
let employee1TDSDeduction 
if (employee1salary>40000) {
    employee1TDSDeduction = employee1salary  %10;
    
} else {
    employee1TDSDeduction = 199;
    
}
//employe vaction 
let employee1VacationDeduction = employee1VacationLeaveTaken * (employee1salary / 30);
let employee1SickDeduction = employee1sickleaveTaken * (employee1salary / 30);

let employee1NetSalary  = (employee1salary * employee1Bonus) - (employee1PFDeduction +employee1TDSDeduction + employee1SickDeduction + employee1VacationDeduction);

console.log("Employee Name:", employee1);
console.log("Grade:", employeeGrade);
console.log("Hours Worked:", employee1hoursworks);
console.log("Salary:", employee1salary);
console.log("Bonus:", employee1Bonus);
console.log("PF Deduction:", employee1PFDeduction)
console.log("TDS Deduction:", employee1TDSDeduction)
console.log("Vacation Deduction:", employee1VacationDeduction)
console.log("Sick Deduction:", employee1SickDeduction)
console.log("Net Salary:", employee1NetSalary)