console.log("array methods")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let price = 100;
let name ='Nabil';
let isAvalible = true;


//accessing elements
console.log(numbers[0]); // 1
console.log(numbers[9]); // 10

//array methods
//adding elements at the end of the array
numbers.push(11); // add to the end of the array
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
numbers.push(12,13,14); // add multiple elements to the end of the array
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

//adding elements at the start of the array
numbers.unshift(0); // add to the start of the array
numbers.unshift(-1,-2,-3); // add multiple elements to the start of the array
console.log(numbers); // [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

//removing elements from the end of the array
numbers.pop(); // remove from the end of the array
console.log(numbers); // [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//removing elements from the start of the array
numbers.shift(); // remove from the start of the array









