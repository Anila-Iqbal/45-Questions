//Qs # 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//Creating array
let newArray :string[] = ['Sana' ,'Saba', 'Sadia','Hina'];

//produce an error accessing invalid index 
console.log('\n\t"Accessing error by invalid index"');
console.log(newArray[10]);//undefine ans

//Make sure you correct the error before closing the program
//Correct the error
console.log('\n\t"Correct the error"');
console.log(newArray);

//accessing index by array
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);