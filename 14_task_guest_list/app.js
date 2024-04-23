"use strict";
//Qsno14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("*****'Ex # 14*****'");
//define an array
let guest_list = ['Ali,', 'Fahad,', 'Hamza,'];
//invite each guest 
guest_list.forEach(guest => console.log(`Dear ${guest} You are invited to dinner.`));
