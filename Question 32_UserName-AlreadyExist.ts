/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/


// Making a current_users array
let current_users = ["Saad", "bilal", "Monee", "anza", "Noman"];

// Making a new_user array
let new_users = ["Ali", 'Bilal', "Aqib", "Anza", "saeed" ];

// Loop through new_user to check avialabilty
new_users.forEach(new_one_user => {

    // Making a condition user name already exist and save it in our_condition
  let our_condition =  current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())

  // Print diffrent messages in both conditions
  if(our_condition){
    console.log(`This username ${new_one_user} is already taken`)
   } else{console.log(`This username ${new_one_user} is available`)}
  }
);