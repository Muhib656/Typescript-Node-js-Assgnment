// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames = ["saad", "Bilal", "Admin", "Monee", "Noman"];

userNames = []

// Using foreach method loop on array
if (userNames.length === 0){
    console.log("We need to find some user")
}else{
userNames.forEach(oneUser => {
    if (oneUser === "Admin"){
        console.log(` Hello ${oneUser}, would you like to see a status report? `)
    }
else{
 console.log(`Hello ${oneUser}, thankyou for logging in again`)
}})
}