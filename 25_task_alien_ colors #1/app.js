"use strict";
/*Qs # 25- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
//Define a veriable
let alien_color = "green";
//if condition is green earn 5 point
console.log("\n\t>>>>>>alien was shot down a game<<<<<<<");
if (alien_color === 'green') {
    console.log('Player just earn 5 points. ');
}
//second version
alien_color = "yellow";
//the version that fails will have no output.
if (alien_color === 'Red') {
    console.log('You just earn 10 points.');
}
