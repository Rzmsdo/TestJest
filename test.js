





test('adds 100 to equal 107', () => {
const { fromEurotoDollar } = require('./app.js');
let money = fromEurotoDollar(1100);
    let total = 1100*1.07;
    expect(money).toBe(total);
});


test('adds dollar to yen', () => {
const { fromDollarToYen } = require('./app.js');
    let total = (1500*1.07)*156.5;
    expect(fromDollarToYen(1500)).toBe(total);


});test('adds 100 to equal 107', function() {
const {fromYentoPound } = require('./app.js');
    let total = parseFloat(((15000/156.5)*0.87).toFixed(3));
    expect(fromYentoPound(15000)).toBe(total);
});
