//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alienColour = "green";


//Version 1
console.log("Please select right colour")
;
if(alienColour == "green"){
    console.log("Version 1 : Player just earned 5 points")
}else if(alienColour == "yellow"){
    console.log("Player just earned 10 points")
}else if(alienColour == "red"){
    console.log("player just earned 15 points")
}else{
    console.log("Please select right colour");
}


//  Version 2
alienColour= "yellow";

if(alienColour == "green"){
    console.log("Player just earned 5 points")
}else if(alienColour == "yellow"){
    console.log("Version 2 : Player just earned 10 points")
}else if(alienColour == "red"){
    console.log("player just earned 15 points")
}else{
    console.log("Please select right colour")
}


// Version 3
alienColour = "red";


if(alienColour == "green"){
    console.log("Player just earned 5 points")
}else if(alienColour == "yellow"){
    console.log("Player just earned 10 points")
}else if(alienColour == "red"){
    console.log("Version 3 : player just earned 15 points")
}else{
    console.log("Please select right colour")
} 