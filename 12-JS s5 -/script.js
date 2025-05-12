let a=100;
let b=200;

let sum=a+b;
console.log("Sum is: " + sum);

//sum(10,20); // This will throw an error because sum is not a function


//1-declaration phase
function sum2(x,y ){ 
    //logic to add two numbers
    console.log("Inside function sum");
    return x+y;
}

//2-calling phase
const result = sum2(10,20); // This will work because sum is a function
console.log("Result is: " + result);
//sum2(10,20); // This will work because sum is a function


//function declaration
//declaration phase
function test(){
    console.log("1");
    console.log("2");
    return 7; // This will exit the function and not execute the next lines
    // The following lines will not be executed
    console.log("3");
    console.log("4");
    
}

//calling phase
test();

//function expression
const total= function(x,y){
    console.log("Inside function total");
    //logic to add two numbers

    return x+y;
}

total(10,20); // This will work because total is a function
//total(10,20); // This will work because total is a function



/**  truthy and falsy */
// falsy values
// 0, "", null, undefined, NaN, false

// truthy values
// any value that is not falsy

let c='';
if(c){
    console.log("c is truthy");
}
else{
    console.log("c is falsy");
}

let d=0;
if(d){
    console.log("d is truthy");
}
else{
    console.log("d is falsy");      
}

let e=null;
if(e){
    console.log("e is truthy");
}
else{
    console.log("e is falsy");
}

let f=undefined;
if(f){
    console.log("f is truthy");
}
else{
    console.log("f is falsy");
}

let g=NaN;
if(g){
    console.log("g is truthy");
}
else{
    console.log("g is falsy");
}

let h=false;
if(h){
    console.log("h is truthy");
}
else{
    console.log("h is falsy");
}


function isEligible(enrolled, salary){
    return (enrolled && salary>10000);
}

isEligible(true, 20000); // true && true = true
isEligible(false, 20000); // false && true = false
isEligible(true, 5000); // true && false = false

function notifyUser(enrolled, salary) { 
    if (isEligible(enrolled, salary)) {
        console.log("You are eligible for the course.");
    } else {
        console.log("You are not eligible for the course.");
    }
}
notifyUser(true, 20000); // true && true = true
notifyUser(false, 20000); // false && true = false

/* tarnary operator */
let age=18;
let isEligibleToVote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(isEligibleToVote);

let age2=17;
let isEligibleToVote2 = (age2 >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(isEligibleToVote2);


//multiple conditions
let color;
if(color==="red"){  
    console.log("Color is red");
}
else if(color==="blue"){
    console.log("Color is blue");
}
else if(color==="green"){
    console.log("Color is green");
}
else{
    console.log("Color is not red, blue or green");
}


//exercise fizzbuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(n)   {
    
    if (typeof n !== 'number') {
        console.log("Please enter a number.");
        return;
    }

        if (n % 3 === 0 && n % 5 === 0) {
            console.log("FizzBuzz");
            return "FizzBuzz";
        } else if (n % 3 === 0) {
            console.log("Fizz");
            return "Fizz";
        } else if (n % 5 === 0) {
            console.log("Buzz");
            return "Buzz";
        } else {
            console.log(n);
            return n;
        }
   
}

console.log(fizzBuzz(15)) // FizzBuzz
fizzBuzz(3); // Fizz
fizzBuzz(5); // Buzz
fizzBuzz(7); // 7
fizzBuzz(15); // FizzBuzz
fizzBuzz('abc'); // Please enter a number.
fizzBuzz('15'); // Please enter a number.