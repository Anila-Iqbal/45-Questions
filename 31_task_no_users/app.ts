/*Qs # 31-No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

//array
let users :string[] = ['Admin','Eric','Ali','Hamza','Nabeel','Mazz'];


if(users.length === 0){
    console.log('we need to fined some users');
}else{ 
//update variable and empty array
    users = [];
    console.log('\n"Remove all of the usernames from array:"', + users.length)
}







