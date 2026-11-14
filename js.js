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


let arr = [12, 45, 7, 89, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let words = [",", "кіт", "сонце", "комп'ютер", "дім"];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        console.log(words[i]);
    }
}


let numbers10 = [4, 15, 8, 42, 23, 16, 4, 88, 15, 23];
let max = numbers10[0]; 

for (let i = 1; i < numbers10.length; i++) {
    if (numbers10[i] > max) {
        max = numbers10[i];
    }
}

console.log(max); 


let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) { 
        console.log(data[i]);
    }
}
