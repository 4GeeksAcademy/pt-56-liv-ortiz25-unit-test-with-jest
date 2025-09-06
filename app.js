const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInGBP = valueInYen * 0.87;
    return valueInGBP;
}
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound }