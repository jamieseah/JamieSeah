const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let sum = 0;

for (let i = 0; i < amdPrices.length; i++) {
  sum += amdPrices[i];
}

const average = sum / amdPrices.length;
const roundedAverage = parseFloat(average.toFixed(2));

let countAboveAverage = 0;

for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > average) {
    countAboveAverage++;
  }
}

console.log("Number of days AMD was above the 7-day SMA is:", countAboveAverage);
