////////################# NUMBERS  ###################///////////

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.length);
// console.log(balance.toFixed(2)); /// for e commerce app

// /////// """"""""""PRECISION""""""""////////

// /// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// const othernum =1123.567789
// console.log(othernum.toPrecision(3)); // "agar presion 3 tk hi precision karega aur value 1123.56.. agar hai to exponential form me roundoff kr kr dega" "pr agar iske limit se km hoga to decimal ko round off kr dete hai.."

// ///// toLocalString  (add comma in the number)

// const hund = 10000000000
// console.log(hund.toLocaleString('en-IN'));

//+++++++++++++++  MATHS   +++++++++++++++++///////

// console.log(Math);
// console.log(Math.abs(-4)); // absolute:(negative ko positive me conver karega)
// console.log(Math.round(4.6));
// console.log(Math.ceil(8.2));//("ceil mtlb upper wali(before decimal one) value ko roundoff  kr dega ")
// console.log(Math.floor(4.2));//("floor mtlb nichi wali(after decimal) value ko roundoff kr dega  ")
// console.log(Math.sqrt(16));
// console.log(Math.max(61,40,23,9,78,34));
// console.log(Math.min(61,40,23,9,78,34));

console.log(Math.random()); // value always lies btw {0 and 1}///
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

