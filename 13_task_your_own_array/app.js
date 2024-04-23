"use strict";
//Qsno13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”tsc
//array
let transportationModes = ['Motorcycle', 'Car', 'Train', 'Bus'];
//forEach ek ek elemnt ki value return krta hy. jbi yaha or console me apny variable sy hat k koi milta nam dena parta hy
//we make here arrow function =>
transportationModes.forEach(transportation => {
    console.log(`" I would like to own a:  ${transportation}. "`);
});
