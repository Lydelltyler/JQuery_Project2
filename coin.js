function newarray(coin) {

    var quarter = 0
    var quarterleftover = coin - (Math.floor(coin / 25) * 25)
    var nickel = 0
    var dime = 0
    var penny = 0

    if (coin % 10 != 0 && coin % 10 != 5) {
        penny = coin % 10
    } if (coin > 25) {
        quarter = Math.floor(coin / 25)
    } if (coin > 25) {
        dime = (quarterleftover - quarterleftover % 10) / 10
    } if (coin > 25) {
        nickel = Math.floor((quarterleftover % 10) / 5)
    }

    if (coin < 25) {
        quarter = 0
    } if (coin < 25) {
        dime = (coin - coin % 10) / 10
    } if (coin < 25 && coin % 10 == 5) {
        nickel = coin % 10
    }


    return ["quarter: " + quarter, "dime: " + dime, "nickel: " + nickel, "penny: " + penny]
}


console.log(newarray(30))