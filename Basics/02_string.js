/* String indexing */
let myName = "Angshuman"
console.log(myName.length); //This is used to find the length of a string
console.log(myName.length - 1); //This used to find the secound last letter's index
console.log(myName[myName.length - 1]);

/* Trim */
let myFullName = "   Angshuman Roy   "
console.log(myFullName.length);
//we have to store the value after trim or it'll not work
myFullName = myFullName.trim();
console.log(myFullName);
console.log(myFullName.length);

/* To Uppercase */
let myNameSmall = "angshuman";
console.log(myNameSmall.toUpperCase());

/* To Uppercase */
let myNameCap = "ANGSHUMAN";
console.log(myNameCap.toLowerCase());