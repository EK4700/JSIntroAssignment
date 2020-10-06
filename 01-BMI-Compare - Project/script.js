let massMark = parseInt(prompt("Enter the mass of Mark"));
let massJohn = parseInt(prompt("Enter the mass of John"));;
let heightMark = 1.75;
let heightJohn = 1.86;
let BMIJohn = massJohn / (Math.pow(heightJohn,2))
BMIJohn = BMIJohn.toFixed(2);
let BMIMark = massMark / (Math.pow(heightMark,2))
BMIMark = BMIMark.toFixed(2);
console.log(BMIJohn);
console.log(BMIMark);
let higherBMI = BMIMark > BMIJohn ? true : false;
alert(`Is Mark's BMI is higher than John's? Answer is “${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`)