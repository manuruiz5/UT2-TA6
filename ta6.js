function convertToCelsius(temp){
let fahrenheit = (temp - 32) * 5/9;
fahrenheit = Math.round(fahrenheit * 10) / 10;
return fahrenheit;
}

function convertToFahrenheit(temp){
let celsius = (temp * 9/5) + 32;
celsius = Math.round(celsius * 10) / 10;
return celsius;
}

console.log(convertToFahrenheit(37.8));
console.log(convertToCelsius(100));