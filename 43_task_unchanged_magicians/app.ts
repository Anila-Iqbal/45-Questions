//Qs# 43- Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name

// Start with your work from Exercise 42
//creat a array
let magicians:string[]=['John Elbern','Harry','Criss Angle','Ricy Jay'];

//make function for copy of array
function copyArray(array:string[]){
  return [...array]
}

//store copy of array in a variable
let copy_magicians_array = copyArray(magicians)

//Original Array
//make a function 1
function show_magicians(magicians:string[]){
  magicians.forEach(name => console.log(name));
}

//Original Array call
console.log("\n'>>>>Original array will be unchanged<<<<'");
show_magicians(magicians);

//copy array
//creat function 2
function make_great(magicians:string[]){
  magicians.forEach(name => console.log(`The Great ${name}.`));
}

//Copy array call
console.log('\n***"Copy Array: with "The Great"***');
make_great(magicians);



 