"use strict";
//Qs # 36-T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//make a function 
function make_shirt(size, printMessage) {
    console.log(`\nYou selected ${size} size shirt and printed on shart ${printMessage}.`);
}
// call the function
make_shirt('large:', "***I am happy***");
make_shirt('medium:', ">>>>I enjoy life<<<<");
make_shirt('small:', '"I love papa"');
