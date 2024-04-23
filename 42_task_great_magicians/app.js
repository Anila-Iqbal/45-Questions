"use strict";
// Qs# 42- Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//array      
let magicians_name = ['John Elbern', 'Harry', 'Criss Angle', 'Ricy Jay'];
//making a function with forEach loop
function show_magicians(magicians) {
    magicians.forEach(name => {
        console.log(name);
    });
}
;
//modify the array with function 2
function make_great(magicians) {
    magicians.forEach(name => {
        console.log(`The great ${name}.`);
    });
}
;
//calling the function
console.log("\n****magicians_name****");
show_magicians(magicians_name);
console.log("\n>>>>Modify with the great<<<<");
make_great(magicians_name);
