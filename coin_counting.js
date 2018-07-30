// usage: node coin_counter.js <p(x)> <x>

const args = process.argv.slice(2);

let p_of_x = Number(args[0]); // p(x)
let x = Number(args[1]); // x

const coins = {0:1};
let coin_ndx = 0;

// compute the values of coins to add to purse total
// exit loop when coin face value is too large to subtract from purse
for (let n = 0; Math.pow(x, n) <= p_of_x; n++, coin_ndx++) {
    coins[coin_ndx] = Math.pow(x, n); // compute coin face values
}

console.log("Show face values of coins:");
let keys = Object.keys(coins);
keys.sort();

// find the largest exponent (max_key)
let max_key = 0;
for (let key in keys) {
    console.log(key, coins[key]);
    // max_key = key > max_key ? key : max_key; // use current largest
    max_key = key;
}

console.log("Show polynomial");
let purse = p_of_x; // purse is sum of coins
for (max_key; max_key >= 0; max_key--) {
    let count = 0;
    while (coins[max_key] <= purse) {
        //console.log(purse, coins[max_key]);
         purse -= coins[max_key];
         count++;
    }
    console.log("+" + count + " x**" + max_key);
}