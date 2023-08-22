let goalAmount = 12000;
let currentSavingsMonth1 = 3000;
let currentSavingsMonth2 = 5000;
let currentSavingsMonth3 = 8000;
let savingsContributionsMonth1 = 1000;
let savingsContributionsMonth2 = 1500;
let savingsContributionsMonth3 = 2000;

let totalSavingsContributions = (savingsContributionsMonth1 + savingsContributionsMonth2 + savingsContributionsMonth3);
let totalCurrentSavings = (currentSavingsMonth1 +currentSavingsMonth2 + currentSavingsMonth3);

let quarterlyGoalAmount = (goalAmount / 4 );

let percentageAchieved = (totalCurrentSavings /quarterlyGoalAmount) * 100 ;

if (percentageAchieved >= 100) {
    "Congratulations! You have already achieved your quarterly savings goal!"
}
let projectedTimeline;
if(projectedTimeline >= 75){
    "At your current savings rate, you are on track to reach your quarterly goal by the end of the quarter." 
}
else {
    projectedTimeline = "Based on your current savings rate, it may take some additional time to reach your quarterly goal. Consider increasing your savings contributions."
}

let savingsTips ="";
if (percentageAchieved >= 80) {
    savingsTips= "Great job! You are making excellent progress towards your quarterly goal. Keep up the good work!"  
}else if(percentageAchieved>=50){
    savingsTips="You are halfway there! Try to find additional ways to save money and increase your savings rate." 
    
}else{
    savingsTips="To reach your quarterly savings goal sooner, consider cutting back on non-essential expenses and finding opportunities to save more." 
    
}
console.log(`Goal Amount: $`,goalAmount);
console.log(`Quarterly goal amount:$`,quarterlyGoalAmount);
console.log(`Total current savings:$`,totalCurrentSavings);
console.log(`Total Savings  Contributions:$`,totalSavingsContributions);
console.log(`Percentage Achieved : $`,percentageAchieved);
console.log(`Projected timeline: $`,projectedTimeline);
console.log(`Savings  Tips: $`,savingsTips)