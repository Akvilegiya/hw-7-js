let numbers = [5, 15, 25];
numbers[1] = 10; 
console.log(numbers); 

let list = ["яблуко", "банан", "груша"];
list[3] = "ківі";

console.log(list);



let numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Сума:", sum);