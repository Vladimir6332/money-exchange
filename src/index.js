// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) return {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    let exchange = {};
    let coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let current = currency;
    for (key in coins) {
        if ((current % coins[key]) == 0) {
            if ((current / coins[key]) > 0) {
                exchange[key] = current / coins[key];
                current = 0;
            }
        } else {
            if (((current - (current % coins[key])) / coins[key]) > 0) {
                exchange[key] = (current - (current % coins[key])) / coins[key];
                current = current % coins[key];
            }
        }

    }
    return exchange

}