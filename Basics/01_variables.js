var firstVar = "This is first variable with var";
let secondVar = "This is second variable with let";
const thirdVar = "This is third variable with const";

//=== console.table([]); **Creates array format ===
console.table([firstVar, secondVar, thirdVar]);

firstVar = "This is first var 2nd time";
//=== you can not re-declare lett ===
secondVar = "This is second var 2nd time";
//=== you can not re-declare & re-asign const ===
// thirdVar = "This is third var 2nd time";
console.table([firstVar, secondVar, thirdVar]);

//=== we can use special characters to create a variable, (EXAMPLE BELOW) ===
let first$var =
  "this text is stored under a variable which have a special character";
console.log(first$var);

//=== we can not start a variables name with a number, (EXAMPLE BELOW) ===
// let 1stvar = "this text is stored under a variable who's name starts with a number";
// console.log(1stvar);
