/*Qa # 32- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted*/

//current_users array
//case insensitive NOMAN sy noman both are like same
let current_users: string[]= ['ADMIN','Hamza','Mazz','Fahad','JOHN'];

//new_users array
let new_users: string[]= ['Noor','Admin','Saba','Fatima','john'];

//loop through new users check for username availablity
new_users.forEach(new_one_user => {

//making a our_condition variable store value to already exist    
//When 2 array compare, use .some method its work one by one
//.some boolean me value return krta hy//true
//.some jb tk pore array ki value ko search na kr ly tb tk wo forEach ko chalny nhi dy ga
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase () === new_one_user.toLowerCase())    
 if(our_condition){
     console.log(`\nSory, ${new_one_user} is alrady taken.please write a different username!!`)
 }else{
        console.log(`\n"This username ${new_one_user} is available"<<<<<`)
    }
})







