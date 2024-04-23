"use strict";
//Qs # 37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//make a function
function make_shirt(size = 'large ', text = "'I love TypecSript'") {
    console.log(`creating a ${size} shirt and printed on message ${text}.`);
}
//calling a function with by default values
make_shirt();
//calling a function now with medium size and default message
make_shirt('medium');
//just calling a function
make_shirt('small', "***I love flowers***'");
