const myName = "Zolon";
let numberOfToppings = 10;

console.log(typeof numberOfToppings);
console.log(typeof myName);

console.log(`When you visit ${myName} you can choose any amount of ${numberOfToppings} of toppings`);

if (numberOfToppings < 10){
  console.log("Quantity not quality.");
} else if (numberOfToppings>=10){
  console.log("A whole lot of pizza");
};

for (i=1;i<=numberOfToppings;i++){
  if (i%2==0){
    console.log(i);
  }
}
