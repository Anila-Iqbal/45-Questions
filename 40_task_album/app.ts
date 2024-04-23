/*Qs# 40- Album: Write a function called make_album() that  describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/

//make a function 0f obj value
 function makeAlbum(artist_name:string, album_tittle:string, tracks?:number){
//making an Object key
   let album:{artist:string, title:string, tracks?:number} = {
//key-value pairs      
    artist : artist_name,
    title : album_tittle,
   };
   //condition
   if(tracks !== undefined){
      album.tracks = tracks;
   }
   return album;
 }; 

//calling three function and creating 3 variables different values
let album1 = makeAlbum("Ali","Album tittle 1");
let album2 = makeAlbum("Hamza","Album tittle 2");

//calling function with 3rd parameter tracks
let album3 = makeAlbum("Umair","Album tittle 3",10);

//printing function 
//qk yaha ham ny return krwaya hy is liye console krwana zrori hy
console.log(album1);
console.log(album2);
console.log(album3);






    