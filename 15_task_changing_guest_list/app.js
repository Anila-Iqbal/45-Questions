"use strict";
//Qs# 15_Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//EX # 14
console.log("\n******start with your program from Ex 14*****");
//define an array
let guest_list = ['Ali,', 'Fahad,', 'Hamza,'];
//array
guest_list.forEach(guest => console.log(`Dear ${guest} You are invited to make dinner.`));
//EX # 15
console.log("\n>>>>EX # 15<<<<<");
let absent_guest = "Ali";
let new_guest = "Waqas";
guest_list[0] = new_guest;
console.log(`\nMr, ${absent_guest} is not coming......`);
//invite and modify
console.log("\n'*****MODIFY THE LIST*****'");
guest_list.forEach(guest => console.log(`Dear ${guest} You are still invited to make dinner.`));
