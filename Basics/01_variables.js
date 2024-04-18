var firstVar = "This is first variable with var";
let secondVar = "This is second variable with let";
const thirdVar = "This is third variable with const";

console.table([firstVar, secondVar, thirdVar]);

firstVar = "This is first var 2nd time";
secondVar = "This is second var 2nd time";
//=== you can not re-declare & re-asign const ===
// thirdVar = "This is third var 2nd time";

console.table([firstVar, secondVar, thirdVar]);

//  function syntax
function myFunc1(a, b) {
    console.log(a + b);
}
myFunc1(2, 2);