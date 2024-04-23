"use strict";
//Qs no 6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//variable
const personName = "\n\tZoya Umair\t\n";
//print Name with Whitespace:
console.log("\nName with Whitespace:\n ", personName);
//print Without Whitespace use .trim Removes white space and extra line:
console.log("Without Whitespace!! ", personName.trim());
