"use strict";
//Qsno17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//•Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Start the program EX #16
console.log('\n*****Start the program EX #16*****\n');
//array
let guest_list = ['Waqas', 'Fahad', 'Hamza',];
//prinr Good news
//console.log('Good News ! We found a big dinner table, so we are inviting 3 more guests****\n');
//.unshift start me add
guest_list.unshift("Kafeel");
//.splice apni mrzi sy kisi b index py add or delete or kis index pr rkhna hy
guest_list.splice(2, 0, "Noman");
//.push last me add)append ki jga .push use kry
guest_list.push("Umair");
//printa new message with 3 new guest:
guest_list.forEach(guest => console.log(`Dear ${guest} You are invited to make dinner.`));
//EX # 17
console.log('\n****EX # 17****');
//not invited
console.log('\nSorry, we can not arrange a big table, only two peoples will be invited<<<<\n');
//guest remove
//pop delete krta hy or return b
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Dear ${remove_guest}, you are not invited for dinner.`);
}
//we have left only 2 guest
console.log('\nInvitation to the last 2 guest');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr, ' + guest_list[i] + ' you are still invited...');
}
//Remove all the list:
console.log('\n*****Remove all the list*******');
guest_list.splice(0, 2);
console.log('Empty List:', guest_list);
