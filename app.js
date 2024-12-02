let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromEurotoDollar(dollar){
    return parseFloat((dollar*oneEuroIs.USD).toFixed(3)); 
}

function fromDollarToYen(dollar){    
return parseFloat((fromEurotoDollar(dollar)*oneEuroIs.JPY).toFixed(3));
}

function fromYentoPound(yen){
    return parseFloat(((yen/oneEuroIs.JPY)*oneEuroIs.GBP).toFixed(3));
}

module.exports = {fromEurotoDollar, fromDollarToYen, fromYentoPound}

