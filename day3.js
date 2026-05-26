let person = {
  name: "Ishant",
  age: 19,
  city: "Jaipur",
  isStudent: true
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.isStudent);

//2

let { name, age, city, isStudent } = person;

//3

let book = { title: "Harry Potter", author: "Rowling", price: 499 };
let { title, author, price } = book;
console.log(`${title} by ${author} costs ${price}`);

//4
let colors = ["red", "green", "blue", "yellow", "pink"];

let[first, second, ...others] = colors;

console.log(first);
console.log(second);
console.log(others);

//5
let product = { name: "Shoes", price: 599, brand: "Nike" };
let newProduct = { ...product, price: 399 };
console.log(newProduct);

//6

let basicInfo = { name: "Ishant", age: 19 };
let extraInfo = { city: "Jaipur", hobby: "coding" };
let Info = {...basicInfo, ...extraInfo};
console.log(Info);

//7
let a = [1, 2, 3];
let b = [4, 5, 6]; 
let c = [...a,...b, 7 ];

console.log(c);

//8
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printUser({ name: "Ishant", age: 19 });

//9

let students = [
  { name: "Ishant", marks: 88 },
  { name: "Raj", marks: 45 },
  { name: "Priya", marks: 76 }
];

students.map(({ name, marks }) => {
    console.log(`${name} scored ${marks}`);
});

//10

