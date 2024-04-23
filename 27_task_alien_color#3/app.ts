/*Qs #27- Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//versions 1 of the program,
let alien_color: string = "Green";

if (alien_color === "Green") {
  console.log("player earned 5 points.");
}
else if (alien_color === "Yellow") {
  console.log("player earnrd 10 points.");
}
else if (alien_color === "Red") {
  console.log("player earned 15 points.");
} 
else {
  console.log("Please select right color.");
}

//versions 2 of the program,
alien_color = "Yellow";

if (alien_color === "Green") {
  console.log("player earned 5 points.");
}
else if (alien_color === "Yellow") {
  console.log("player earnrd 10 points.");
}
else if (alien_color === "Red") {
  console.log("player earned 15 points.");
}
else {
  console.log("Please select right color.");
}

//versions 3 of the program,
alien_color = "Red";

if (alien_color === "Green") {
  console.log("player earned 5 points.");
}
else if (alien_color === "Yellow") {
  console.log("player earnrd 10 points.");
} 
else if (alien_color === "Red") {
  console.log("player earned 15 points.");
} 
else {
  console.log("Please select right color.");
}
