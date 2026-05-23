//1

let Food = ["burger", "pizza", "pasta", "Noodles", "dosa"];

console.log(Food[0]);             
console.log(Food[Food.length - 1]); 
console.log(Food.length);         

//2

let numbers = [10, 25, 8, 47, 3, 99, 15];

numbers.forEach(function(number){
    console.log(number);
});
//arrow function
numbers.forEach(element => {
    console.log(element);
});

//3
let numbers = [10, 25, 8, 47, 3, 99, 15];
let doubles = numbers.map(n => n*2);
console.log(doubles);

//4
numbers_2 = [10, 25, 8, 47, 3, 99, 15];
let new_numbers = numbers_2.filter(n => n > 20);
console.log(new_numbers);

 //5

 let numbers = [10, 25, 8, 47, 3, 99, 15];

let sum = numbers.reduce((acc, n) => {
    return acc + n;
}, 0);

//6

let students = ["Ishant", "Raj", "Priya", "Amit", "Sara"];
let Final_name = students.filter(x => x.length > 4);
console.log(Final_name);

//7
let list = [10, 25, 8, 47, 3, 99, 15];
let found = list.find(w => w > 40 );

console.log(found);

//8

let prices = [120, 45, 890, 230, 67];

let Discounted = prices.map(z => 0.9*z);
console.log(Discounted);

//9
let marks = [45, 72, 88, 33, 91, 60];
let result = marks.filter(n => n > 50);
let status = result.map(n => n + "- pass");
console.log(status);

//10
let ages = [15, 22, 17, 30, 14, 25];

let adults = ages.filter(a => a >= 18);
let sum = adults.reduce((acc, a) => acc + a, 0); 
let average = sum / adults.length;              

console.log(average);