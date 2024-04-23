"use strict";
//Qs # 45- Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//EX # 45
//we make a function with 2 compulsory and 1 is optinoal option with (spread)res parameter. jisko operator kehty hain:
//spread operator takes a large amount of data at a time
//values jo function me cal hon gi ...option[] blank array
//index signatur {[key:string]:any} we make an blank obj structer, property string type, value any,
//function
function storeCarInfo(manufacturer, modelName, ...Options) {
    //make an object (of key)
    //.assign update and add new value
    let carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...Options));
    return carInfo;
}
;
//call
let answer = storeCarInfo("Toyota", "Honda", { color: 'Black' }, { features: ['sunroof:true', 'year:2024', 'Power Window'] });
//print
console.log(answer);
