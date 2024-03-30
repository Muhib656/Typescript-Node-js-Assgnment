// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// Making Variables
let apple = "apple";
let uppercaseAppple = "APPLE";
let four = 4
let nine = 9
let cars = ["honda", "kia", "porche"]

// Test for equality and inequality using strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?")
console.log(apple != "apple");

// Test for using lowercase
console.log("\nIs APPLE is equal to apple after converting into lowercase");
console.log(uppercaseAppple.toLowerCase() == "apple");

// test for greater than and smaller than
console.log("\nIs nine is greater than four");
console.log(9 > 4);

console.log("\nIs 4 is smaller than nine");
console.log(four < 9 );

console.log("\nIs four is greater than 9");
console.log(4 > nine);

console.log("\nIs 9 is smaller than 4");
console.log(9 < 4);

// test for equality and inequaity using numeric values
console.log("\nIs four is equal to nine");
console.log(four == nine);

console.log("\nIs four is inequal to nine");
console.log(four != nine);

// greater tthan or equal to
console.log("\nIs nine is greater than or equal to four")
console.log(nine >= four);

// less than or equal to 
console.log("\nIs nine is less than or equal to four");
console.log(nine <= four);

// test using && (AND)
console.log("\nIs nine is not equal to four and nine is greater than 4");
console.log(nine != 4 && nine > four);

console.log("\nIs nine is not equal to four and nine is greater than 15");
console.log(nine != 4 && nine > 15);

// using || (OR)

console.log("\nIf nine is smaller than four or nine is equal to 9");
console.log(nine < four || nine == 9);


console.log("\nIf nine is smaller than four or nine is not equal to 9");
console.log(nine < four || nine != 9);

// test item include in array
console.log("\nIs honda is includes in cars array");
console.log(cars.includes("honda"));

// notincluded in array
console.log("\nIs honda is not includes in cars array");
console.log(!cars.includes("honda"));













