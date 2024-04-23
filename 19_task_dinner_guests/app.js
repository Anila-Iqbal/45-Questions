"use strict";
//Qs No19
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.*/
//Ex # 14
//define an array
let guest_list = ['Ali,', 'Fahad,', 'Hamza,'];
//Exercise 14
console.log('\n*****Ex # 14*****');
//invite each guest 
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ' You are invited to the dinner.');
}
//Exercise 19
console.log('\n>>>>>>>Ex # 19<<<<<<');
// print a message indicating the number of people you are inviting to dinner.
console.log(`"We are inviting total ${guest_list.length} guests"...`);
