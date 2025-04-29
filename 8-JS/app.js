console.log("Hello World from app/js!");

var price = 100;
var name ='Nabil';
var isActive = true;


var product;


console.log(price);
console.log(name);
console.log(isActive);
console.log(product);

product = 'phone';
console.log(product);

//dynamic nature of js
console.log(price);
price='hello';
console.log(price);


'abc' + 1; // NaN
'abc' + 'efg'; // 'abcefg'
'abc' + 1; // 'abc1'

var prices= [100, 200, 300, 400];
console.log(prices);

//modern js ver -> let and const
let price = 100;
const name = 'Nabil';
let b;
b = 100;
console.log(b);
const name = 'Nabil'; // error: Identifier 'name' has already been declared


// let and const are block scoped
// var is function scoped
let y=100;
let numbers= [1, 2, 3, 4, 5];
numbers.length; // 5
numbers[0]; // 1
numbers[1]; // 2
numbers[2]; // 3
numbers[3]; // 4
numbers[4]; // 5
numbers[5]; // undefined

numbers.push(6); // add 6 to the end of the array
numbers.pop(); // remove the last element of the array
numbers.push(7,'hello'); // add 7 and 'hello' to the end of the array
numbers.unshift(0); // add 0 to the beginning of the array
numbers.shift(); // remove the first element of the array
numbers.splice(2, 1); // remove the element at index 2
numbers.splice(2, 1, 'a', 'b'); // remove the element at index 2 and add 'a' and 'b' to the array
numbers.slice(2, 4); // return a new array with the elements from index 2 to index 4

numbers.indexOf(3); // return the index of the first occurrence of 3 in the array
numbers.lastIndexOf(3); // return the index of the last occurrence of 3 in the array
numbers.includes(3); // return true if 3 is in the array, false otherwise

