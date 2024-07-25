// MAIN SYNTAX:

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// EXAMPLE:
for (let i = 0; i <= 10; i++) {
  const val = i;
  console.log(val);
  if (val === 5) {
    console.log(`the value is ${val}`);
    continue;
  }
}

const MyHeros = ["superman", "Batman", "spiderman"];
console.log(MyHeros.length);
for (let i = 0; i < MyHeros.length; i++) {
  const val = i;
  if (val < 5) {
    console.log(`The value is ${val}`);
  }
}
