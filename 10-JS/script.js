console.log("array methods")
//array declaration
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


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


numbers.length; // get the length of the array // 17
numbers.sort(); // sort the array in ascending order // [-3, -2, -1, 0, 1, 10, 11, 12, 13, 14]
numbers.indexOf(5); // get the index of an element // 4
numbers.includes(5); // check if an element is in the array

numbers.reverse(); // reverse the array
console.log(numbers); // [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, -3, -2, -1]



numbers.slice(0, 5); // get a slice of the array    // [1, 2, 3, 4, 5]
numbers.splice(0, 5); // remove a slice from the array // [-1, -2, -3, 0, 6, 7, 8, 9, 10, 11, 12, 13]
numbers.splice(0, 5, 1, 2, 3); // remove a slice from the array and add new elements // [1, 2, 3, 0, 6, 7, 8, 9, 10, 11, 12, 13]

numbers.filter((number) => number > 5); // filter the array // [6, 7, 8, 9, 10, 11, 12, 13]
numbers.map((number) => number * 2); // map the array // [26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, -6, -4, -2]


//forEach method
numbers.forEach((number) => console.log(number)); // print each element of the array // -1 -2 -3 0 1 2 3 4 5 6 7 8 9 10 11 12 13

//for in loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // print each element of the array // -1 -2 -3 0 1 2 3 4 5 6 7 8 9 10 11 12 13
}

//object declaration
const person = {
    name: 'Nabil',
    isAvalible: true,
    hobbies: ['reading', 'writing', 'coding'],
    address: {
        city: 'kairouan',
        country: 'Tunisia'
    },
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}
console.log(person.name); // Nabil
console.log(person.isAvalible); // true

//object declaration 
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'red',
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log('Car stopped');
    }
}

//accessing object properties // dot notation
console.log(car.brand); // Toyota

//accessing object properties // bracket notation
console.log(car['model']); // Corolla
console.log(car['year']); // 2020


//object methods
car.start(); // Car started
car.stop(); // Car stopped


//js dynamic typing
//js is a dynamically typed language, which means that the type of a variable can change at runtime
let test=100;
test='hello';
console.log(test); // hello

//js dynamic typing objects
//js is a dynamically typed language, which means that the type of a variable can change at runtime
car.weels=4; // add new property to the object
console.log(car.weels ); // 4

//delete property from the object  
delete car.year; // delete property from the object
console.log(car.year); // undefined
console.log(car); // { brand: 'Toyota', model: 'Corolla', color: 'red', start: [Function], stop: [Function], weels: 4 }



//object dexlaration
computer = {
    brand: 'HP',
    color: 'black',
    screenSize: 15.6,
    keyboard: 'mechanical',
    mouse: 'wireless',
    price: 500
}

//adding properties to the object
computer.age = 5; // add new property to the object
//delete property from the object
delete computer.mouse ; // delete property from the object