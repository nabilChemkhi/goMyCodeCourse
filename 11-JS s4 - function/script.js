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