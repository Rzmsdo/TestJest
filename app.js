let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromEurotoDollar(Euro){
    return parseFloat((Euro*oneEuroIs.USD).toFixed(3)); 
}

function fromDollarToYen(dollar){    
return parseFloat(((dollar/oneEuroIs.USD)*oneEuroIs.JPY).toFixed(3));
}

function fromYentoPound(yen){
    return parseFloat(((yen/oneEuroIs.JPY)*oneEuroIs.GBP).toFixed(3));
}

module.exports = {fromEurotoDollar, fromDollarToYen, fromYentoPound}

