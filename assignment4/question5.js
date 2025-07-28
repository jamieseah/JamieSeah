const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sum = 0;

for (let i = 0; i < disneyData.length; i++) {
	sum += parseFloat(disneyData[i]["close"]);
}

const average = sum / disneyData.length;
const roundedAverage = parseFloat(average.toFixed(2));

console.log("Average closing price of Disney is " + roundedAverage); 