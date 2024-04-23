/*Qsno15 -Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating(biyan krna) the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

//define an array
let guest_list:string[] = ['Ali,','Fahad,','Hamza,'];

//invite each guest 
for( let i=0; i<guest_list.length; i++){
    console.log('\nDear '+ guest_list[i] + '\nYou are invited to the dinner.');
}
//modify the arry
let absent_guest:string = "Ali";
let new_guest:string = "Mudassir";
guest_list[0] = new_guest;

console.log(`\nSir ${absent_guest} is not coming to the dinner....`);
console.log("\n'MODIFY THE LIST'")
for( let i=0; i<guest_list.length; i++){
  console.log('\nDear '+ guest_list[i] + '\nYou are  still invited to the dinner.');
}


