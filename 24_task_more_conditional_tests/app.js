"use strict";
/*Qs # 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
//Define veriables
let apple = "apple";
let uppercase = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ['apple', 'banana', 'orange'];
//Test for equality and inequality with strings
console.log("\n******Tests for equality and inequality with strings******");
//equal to
console.log("Is apple is equal to apple?"); //hard code message
console.log(apple == apple); //true
//not equal to
console.log("Is apple is not equal to apple?");
console.log(apple != apple); //false
//Test using the lower case function
console.log("\n*****Tests using the lower case function******");
//converting to lowercase true
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercase.toLowerCase() == "apple"); //true
//converting to lowercase false
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercase.toLowerCase() != "apple"); //false
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n*****Numerical test*****");
//Numerical not equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty); //true
//Numerical equal to
console.log("Is ten is equal to twenty?");
console.log(ten == twenty); //false
//greater than and less than
console.log("\n******greater than and less than*****");
//greater than
console.log("Is ten is greater then 0?");
console.log(ten > 0); //true
//less then
console.log("Is twenty is less then 10?");
console.log(twenty < 10); //false
//greater than or equal to, and less than or equal to
console.log("\n***greater than or equal to, and less than or equal to,***");
//greater than or equal to
//ek b condition true it give us true
console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5); //true
//less than or equal to
//dono condition false hon gi to hi false mily ga
console.log("Is twenty is less than or equal to 10?");
console.log(twenty <= 5); //false
//Tests using "and" and "or" operators
console.log("\n****Tests using AND & OR operators***");
//using and && 
//jb tk 2no condition true nhi ho gi it not give true
console.log("Is twenty is not equal to 10 AND twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10); //true
//ek condition bhi false ho gi it give us false
console.log("Is twenty is not equal to 10 AND twenty is less than 10?");
console.log(twenty != 10 && twenty < 10); //false
//using or ||
//ek condition bhi true ho gi it give us true
console.log("Is 20 is greater then 50 OR 20 is equal to 20?");
console.log(twenty > 50 || 20 == 20); //true
//jb tk 2no condition false nhi ho gi it not give false
console.log("Is 20 is greater then 50 OR 20 is not equal to 20?");
console.log(twenty > 50 || 20 != 20); //false
//Test whether an item is in a array
console.log("\n*****Test whether an item is in a array****");
//include in array
console.log("Is apple is include in my fruits array");
console.log(fruits.includes("apple")); //true
//not include in array
console.log("Is banana is not include in my fruits array");
console.log(!fruits.includes("banana")); //false
