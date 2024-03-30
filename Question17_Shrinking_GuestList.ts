// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




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
console.log("updated list of our guest")

// Sendin a initation message one by one with thier names
guestList.forEach(oneguest => console.log(`Salam, ${oneguest}, Woukd you like to dinner with me?`));

// Informing that only 2 guests invite for dinner
console.log("Unfortunately, the new dinner table won't arrive on time. So I can invite only two Guests for dinner");

// Removing guests from array until two guests left and print a message 
while(guestList.length > 2){
    let removeGuest = guestList.pop()
    console.log(`Sorry ${removeGuest}, I can't invite you for dinner`);
}

// Inviting last two guest
console.log("Invitation to the last two Guests");

guestList.forEach(lastTwoGuests => console.log(`Luckiy ${lastTwoGuests}, you are still invited for dinner`));

// Removing last two guest
guestList.pop();
guestList.pop();

// Making empty list
console.log("Empty list:", guestList);

