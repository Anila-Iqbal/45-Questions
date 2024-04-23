
//Q No-21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Write a program that creates Objects containing these items?
//>>>>My extra information<<
//update obj property console.log(person.Name="anila") obj k bad
//jaha apko koi b data type deni ho waha = any type likhy

//Data type of person
interface person{

    Name :     string,
    fatherName :string,
    rollNumber : number,
    Grades : number,
    Nationality : String,
    Student   :  Boolean,
}

//Person object
console.log('\t*****"Object 1"*****\t');
let person = {

    Name :  'Zoya',    
    fatherName : 'Umair Ahmed',
    rollNumber : 1,
    Grades : [99,90,85],
    Nationality: 'Pakistani',
    Student   :  'Yes',
} 
console.log(person);

//Data type of Car
interface car{
    Maker :  String,
    Color  : String,
    Automatic : Boolean,
    Description  :string,
}
//Car object
console.log('\t****"object 2"****\t');
let Car = {
    Maker :  'Honda',
    Color  :     'Black',
    Automatic : 'True',
    Description : 'High perfomance'
}
console.log(Car);

