/*Qsno16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list*/

//Start the program EX # 15
console.log('\n>>>>>>Start the program EX # 15<<<<<<');
let guest_list :string[] = ['Waqas', 'Fahad', 'Hamza',];

guest_list.forEach(guest => console.log(`Dear ${guest} You are still invited to make dinner.`));

//EX # 16
console.log('\n>>>>>>EX # 16<<<<<<');

//print Good news
console.log('Good News ! We found a big dinner table, so we are inviting 3 more guests****\n');

//.unshift start me add
guest_list.unshift("Kafeel");

//.splice apni mrzi sy kisi b index py add or delete or kis index pr rkhna hy 3no work krta hy
guest_list.splice(2,0,"Noman");

//.push last me add)append ki jga .push use kry
guest_list.push("Umair");

//printa new message with 3 new guest:
guest_list.forEach(guest => console.log(`Dear ${guest}: You are invited to make dinner.`));

