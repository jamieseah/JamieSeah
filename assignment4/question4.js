const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let sum = 0;

for(let i = 0; i < msftData.length; i++) {
	sum += msftData[i][3]
}

const average = sum / msftData.length;
const roundedAverage = parseFloat(average.toFixed(2));

console.log("Average closing price of MSFT is " + roundedAverage); 