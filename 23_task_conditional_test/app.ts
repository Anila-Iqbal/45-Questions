/*Qs# 23-Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False*/

//Making a variables
let five = 5;
let ten = 10;

//True Condition
console.log("\n\t>>>>>>True Condition<<<<<<");
//Test # 1
console.log('\nTest # 1: five is equal to 5 ?');//hard code message
console.log(five == 5);//true

//Test # 2
console.log('Test # 2: ten is equal to 10 ?');
console.log(ten == 10);//true

//Test # 3
console.log('Test # 3: five is not equal to 10 ?');
console.log(five != 10);//true

//Test # 4
console.log('Test # 4: 10 is great than to 5 ?');
console.log(10 > 5);//true

//Test # 5
console.log('Test # 5: 5 is smaller than to 10 ?\n');
console.log(5 < 10);//true

//false Condition
console.log("\t>>>>>>false Condition<<<<<");
//Test # 6
console.log('\nTest # 6: 10 is smaller than 5 ?');
console.log(10 < 5);//false

//Test # 7
console.log('Test # 7: five is equal to 10 ?');
console.log(five == 10);//false

//Test # 8
console.log('Test # 8: ten is not equal to 10 ?');
console.log(ten != 10);//false

//Test # 9
console.log('Test # 9: 5 is greater then 10 ?');
console.log(five > 10);//false

//Test # 10
console.log('Test # 10: ten is smaller then to 5 ?');
console.log(ten < 5);//false

