"use strict";
//Qs no-3 Name Cases: Store a person’s name in a variable, and then print that person’s name .in lowercase, uppercase, and titlecase.
let person_Name = "Zoya umair";
//Lowercase:
console.log("\nLowercase: ", person_Name.toLowerCase());
//Uppercase:
console.log("\nUppercase: ", person_Name.toUpperCase());
//Titlecase:
//regular expression regex /\b\w/g,().ye string k hr word k first character ko ek parameter k zrye store kr leta hy.
//.toUpperCase() hr first character ko small sy big krdo like zoya sy Zoya.
console.log("\nTitlecase: ", person_Name.replace(/\b\w/g, (convert) => convert.toUpperCase()));
