         //Qs No18   
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//array
let places :string[] = ['krachi', 'lahore', 'dubai', 'multan', 'cape town'];

//Print your array in its original order.
console.log('\nOrignal order: ' , places);

//Print your array in alphabetical order without modifying the actual list.sort it $ copy
console.log('Alphabetical order Copy: ' , [...places].sort());

//• Show that your array is still in its original order by printing it.
console.log('Still in Orignal order: ' , places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse order Copy: ' , [...places].sort().reverse());

//Show that your array is still in its original order by printing it
console.log('Still in Orignal order: ' , places);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal array reverse: ', places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Orignal array reverse again : ' , places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Stored in alphabetical order Orignal array:' , places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log( 'Reverse order again in Orignal array: ' ,  places.sort().reverse());





