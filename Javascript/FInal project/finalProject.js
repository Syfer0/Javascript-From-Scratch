// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    let finalprice;
    for (let i = 0; i < dishData.length; i++){
        
        if (taxBoolean === true) {
            finalprice = (dishData[i].price * 0.2) + dishData[i].price
            console.log(dishData[i].name,finalprice)
        } else {
            finalprice = dishData[i].price
            console.log(dishData[i].name,finalprice)
        }
    } 
}
console.log(getPrices(false))
// Implement getDiscount()
function getDiscount() {
    
}

// Call getDiscount()
