//1
const name = "ishant";
let age = 19;
let student = true;

console.log(`My name is ${name},I am ${age} year old,Student: ${student}`);


//2
let temperature = 38;

if (temperature > 37) {
    console.log("fever");
} else if (temperature >= 36 && temperature <= 37) {
    console.log("normal");
} else {
    console.log("low");
}

//3
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`${i} even`);
    } else {
        console.log(`${i} odd`);
    }
}
//4
let bill = 850;

if (bill > 1000) {
    console.log("20% discount");
} else if (bill >= 500 && bill <= 1000) {
    console.log("10% discount");
} else {
    console.log("no discount");
}

//5
const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

//6

let count = 0;
let sum = 0;
while (count <=100) {
    sum = sum + count;
    count++;
}

console.log(sum);

//7

const length = "raj123".length

if (length < 6) {
    console.log("too short");
} else {
    console.log("password ok");
}

//8

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}

//9

let score = 72;

if (score >= 90) {
    console.log("GRADE A");
} else if (score >= 75 && score <= 89) {
    console.log("GRADE B");
} else if (score >= 60 && score <= 74) {
    console.log("GRADE C");
} else {
    console.log("GRADE F");
}

//10
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
