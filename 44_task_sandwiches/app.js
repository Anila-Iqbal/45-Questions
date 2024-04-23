"use strict";
//Qs # 44- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//creating a function with a (spread)res parameter,jisko operatr kehty hy. and store once a time many values
//...item[] make a blank array
function makeSandwich(...item) {
    console.log('\nMaking your Sandwich with  the following items:');
    //In a temporary variable called singleItem
    //forEach_loop single value print krny k liye
    item.forEach(singleItem => console.log(" - " + singleItem));
    console.log("Now enjoy your Sandwich.......");
}
//call the function three times, using a different number of argument
makeSandwich('egg', 'bread', 'butter');
makeSandwich('chicken', 'bread', 'mayo', 'tomato', 'lettuce');
makeSandwich('chicken', 'cheese', 'mayo', 'egg'); //
