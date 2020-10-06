const kelvin = parseInt(prompt("Enter a temperature in kelvin"));
let celsius = kelvin - 273;
let fahrenheit = celsius * 9/5 +32;
fahrenheit = Math.round(fahrenheit);
document.write(`The temperature is ${fahrenheit} degrees Fahrenheit.`)