
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed



// Maing array of countries and print on its orginal order
let countriesToVisit: string[] = ["Norway", "Tanzania", "Spain", "Greenland", "Indonesia"];
console.log("orinalOrder:", countriesToVisit);

// print the array in alphabatical order without modifying the actual list of array
console.log("Alphabatical Order:", [...countriesToVisit].sort());

// Show that array is still in orginal order
console.log("Original Order:", countriesToVisit);

// Print the array in Reverse order without modifying the actual array
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Again show that array is still in  original order
console.log("Original Order:", countriesToVisit);

// Print the array in Reverse order
console.log("Original Order Reversed:", countriesToVisit.reverse());

// Print the reverse order array again into original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array in Alphabatical Order
console.log("sorted in Alphabatical Order:", countriesToVisit.sort());

// Print the Alphabatical order array into original order again
console.log("Alphabatical order Reversed again", countriesToVisit.reverse());



