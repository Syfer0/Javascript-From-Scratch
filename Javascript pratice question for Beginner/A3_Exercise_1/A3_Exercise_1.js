console.log("A3_Exercise_1")
console.log("---------------------------------------")

let rahulSalesTarget = 100;
let priyaSalesTarget = 200;
let amitSalesTarget = 150;
let rahulActualSales = 85;
let priyaActualSales =180;
let amitActualSales =120;

//calculating sales percentange 
let rahulSalesPercentage = ( rahulActualSales / rahulSalesTarget)*100;
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget)*100;
let amitSalesPercentage = (amitActualSales / amitSalesTarget)*100;
//Rahul bonus
let rahulPerformance;
let rahulBonus; 
if (rahulSalesPercentage >= 90) {
  rahulPerformance = "High Performer";
  rahulBonus = 0.2;
} else if (rahulSalesPercentage >= 70) {
  rahulPerformance = "Average Performer";
  rahulBonus = 0.1;
} else {
  rahulPerformance = "Low Performer";
  rahulBonus = 0;
}

let priyaPerformance;
let priyaBonus; 
if (priyaSalesPercentage >= 90) {
  priyaPerformance = "High Performer";
  priyaBonus = 0.2;
} else if (priyaSalesPercentage >= 70) {
  priyaPerformance = "Average Performer";
  priyaBonus = 0.1;
} else {
  priyaPerformance = "Low Performer";
  priyaBonus = 0;
}

let amitPerformance;
let amitBonus; 
if (amitSalesPercentage >= 90) {
  amitPerformance = "High Performer";
  amitBonus = 0.2;
} else if (amitSalesPercentage >= 70) {
  amitPerformance = "Average Performer";
  amitBonus = 0.1;
} else {
  amitPerformance = "Low Performer";
  amitBonus = 0;
}
 
let rahulBonusAmount = rahulActualSales * rahulBonus
let priyaBonusAmount=priyaActualSales * priyaBonus
let amitBonusAmount = amitActualSales * amitBonus

// Generate a sales performance report for each salesperson with the following details:
// - Salesperson name
// - Sales target
// - Units sold
// - Sales percentage
// - Performance category
// - Bonus amount

console.log("-------sales performace report---------");
console.log("---------------------------------------");
console.log("sales person name:","Rahul");
console.log("sales target:",rahulSalesTarget,"units");
console.log("units sold:",rahulActualSales,"units");
console.log("sales percentage:",rahulSalesPercentage,"%");
console.log("performance category",rahulPerformance);
console.log("Bonus amount:",rahulBonusAmount,"units"+"\n");

console.log("Salesperson name: ","Priya") 
console.log("- Sales target: ",priyaSalesTarget,"units");
console.log("- Units sold: ",priyaActualSales,"units");
console.log("- Sales percentage: ",priyaSalesPercentage,"%")
console.log("- Performance category: ",priyaPerformance);
console.log("- Bonus amount: ", priyaBonusAmount,"units"+"\n");

console.log("Salesperson name: ","Amit") 
console.log("- Sales target: ",amitSalesTarget,"units");
console.log("- Units sold: ",amitActualSales,"units");
console.log("- Sales percentage: ",amitSalesPercentage,"%")
console.log("- Performance category: ",amitPerformance);
console.log("- Bonus amount: ", amitBonusAmount,"units"+"\n")