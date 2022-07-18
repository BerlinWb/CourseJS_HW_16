"use strict";


const num = prompt('Enter a number: ');

const minDivisor = (num) => {
let divisor = 2;
if (num < 1) {
return NaN;
}
if (num === 1) {
return num;
}
while (num % divisor) {
divisor++;
}

return divisor;
};

console.log(minDivisor(num));