"use strict";
//Qs# 41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//making a array
let magicians = ['John Elbern', 'Harry', 'Criss Angle', 'Ricy Jay'];
//making a function
function show_magicians(magicians) {
    magicians.forEach(name => {
        console.log(name);
    });
}
;
//calling the function
show_magicians(magicians);
