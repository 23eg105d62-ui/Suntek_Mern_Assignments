const temperatures = [32, 35, 28, 40, 38, 30, 42];

/*Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/

// 1. filter() temperatures above 35
let above = temperatures.filter(temp => temp > 35);
console.log(above);
// 2. map() to convert all temperatures from Celsius → Fahrenheit
let f = temperatures.map(temp => temp * 9 / 5 + 32)
console.log(f);
// 3. reduce() to calculate average temperature
let sum = temperatures.reduce((acc, temp) => acc + temp, 0);
console.log(sum / temperatures.length);
//4.find() first temperature above 40
let firstAb = temperatures.find(temp => temp > 40)
console.log(firstAb);
//5. findIndex() of temperature 28
let idx = temperatures.findIndex(temp => temp == 28)
console.log(idx);