"use strict";
/*Qs # 26- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points
• Write one version of this program that runs the if block and another that runs the else block.*/
//Define veriable
let alien_color = "Green";
//if-else chain 
if (alien_color === "Green") {
    console.log("Player earned 5 points...");
}
else {
    console.log("Player earn 10 points");
}
//second version
if (alien_color === "Red") {
    console.log("Player earned 5 points");
}
else {
    console.log("Player earned 10 points...");
}
