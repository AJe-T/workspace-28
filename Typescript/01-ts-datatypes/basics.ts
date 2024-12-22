import { RandomUserService } from "../02-ts-models/randomUsers";

export { RandomUserService } from "../02-ts-models/randomUsers";
let a: string = "Name";

let fun = (name: string, age: number): void => {
  console.log(`my name is ${name} and my age is ${age}`);
};

fun("john", 25);
console.log(a);

console.log(RandomUserService.getAllUsers());
