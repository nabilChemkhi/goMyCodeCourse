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


/*arithmetic operators*/
let num1=10;
let num2=20;

//sum
console.log(num1+num2); //30
//subtraction
console.log(num1-num2); //-10
//multiplication
console.log(num1*num2); //200
//division
console.log(num1/num2); //0.5
//modulus
//remainder of division
console.log(num1%num2); //10
//exponentiation
//power of a number
console.log(num1**num2); //100
//increment
//increment by 1
console.log(num1++); //10
//postfix increment
//increment by 1 and return the value before incrementing
console.log(num1--); //11
//postfix decrement
//decrement by 1 and return the value before decrementing
console.log(++num1); //12
//prefix increment
//increment by 1 and return the value after incrementing
console.log(--num1); //11
//prefix decrement
//decrement by 1 and return the value after decrementing
console.log(num1+=num2); //31
//addition assignment
console.log(num1=num1+num2); //31
//addition assignment
console.log(num1-=num2); //11
//subtraction assignment
console.log(num1*=num2); //220

//comparison operators
//equal to
console.log(num1==num2); //false
//not equal to
console.log(num1!=num2); //true
//strict equal to
console.log(num1===num2); //false
//strict not equal to
console.log(num1!==num2); //true
//greater than
console.log(num1>num2); //false
//less than
console.log(num1<num2); //true
//greater than or equal to
console.log(num1>=num2); //false
//less than or equal to
console.log(num1<=num2); //true
//logical operators
//and
console.log(num1>10 && num2>20); //false
//or
console.log(num1>10 || num2>20); //true
//not
console.log(!(num1>10)); //true
//bitwise operators
//and
console.log(num1&num2); //0
//or
console.log(num1|num2); //31
//xor
console.log(num1^num2); //31
