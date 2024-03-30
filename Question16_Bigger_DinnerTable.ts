// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.




// Making Array
let guestList = ["Saad ", "Bilal", "Monee"];

// Remove a guest who cant come
let dontCome = guestList[0];

// Print message who cant come
console.log(dontCome, "would not come");

// Add and Remove a guest with new guest who cant come
guestList.splice(0, 1, "Anza");

// Print message 
console.log(`Good News ! We have found a bigger table for Dinner`);

// Adding a new guest at the start index of the array
guestList.unshift("Noman");

// Adding a new guest at the end index of the array
guestList.push("Amania")

//Get a midde index of the array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest at the middle index of the array
guestList.splice(middleIndex, 0, "Zain");

// print a updated guest list
console.log("updated ist of our guest")

// Sendin a invitation message one by one with thier names
guestList.forEach(oneguest => console.log(`Salam, ${oneguest}, Woukd you like to dinner with me?`));

