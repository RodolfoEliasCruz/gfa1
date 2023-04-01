let nickname = prompt("Enter your nickname:");
let heightInches = prompt("Enter your height in inches:");
let weightKg = prompt("Enter your weight in kg:");

let heightFeet = Math.floor(heightInches / 12);
let heightInchesRemainder = heightInches % 12;

let weightLbs = weightKg * 2.20462;

alert("Name: " + nickname + "\nHeight: " + heightFeet + "'" + heightInchesRemainder + "\"" + "\nWeight: " + weightLbs.toFixed(3) + " lbs");

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let birthYear = prompt("Enter your birth year:");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

alert("Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?");

console.log("Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?");

