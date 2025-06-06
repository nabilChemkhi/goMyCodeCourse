//factory function
function createCrcle(radius,color){
    return {
        radius,
        color,
        draw: function(){
            console.log('draw');
        }
    }
}

let a=20;
msg=`The radius is ${a}`;
console.log(msg);



//this keyword
//this keyword refers to the object that is executing the current function
const car = {
    model: 'audi', 
    price: 2000, 
    report: function(){
        console.log(this);// // car object
      
        console.log("inside the car object",this);
        //return `this car costs ${this.price} `;
        return `Model: ${this.model}, Price: ${this.price}`;
    }
};

console.log(this)// // window object

function add(a,b){
    console.log(this);// // window object
    return a+b;
}

//constructor function
function Circle(radius,color){
    this.radius=radius;
    this.color=color;
    this.draw=function(){
        console.log('draw');
    }

    this.area=function(){
        return Math.PI*this.radius*this.radius;
    }
}

const circle=new Circle(10,'red');
console.log(circle.area());
console.log(circle);


//ES6
function reverseString(str){
    //for loop
    let reversedStr='';
    for(let i=str.length-1;i>=0;i--){
        reversedStr+=str[i];
    }
    return reversedStr;
}


//for of loop
function reversedStr(){
    let reversedStr='';
    for (let c of str){
        reverseString=c+reversedStr;
    }
    return reversedStr;
}



let str='hello';
console.log(reverseString(str));

function reverseString(str){
    return str.split('').reverse().join('');
}


const numbers=[114,25,34,4,51];

function search(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

consolelog(indexOf(numbers,4));// // 3
consolelog(indexOf(numbers,100));// // -1



const courses=[
    {id:1,title:'JS'},
    {id:2,title:'HTML'},
    {id:3,title:'CSS'}, 
    {id:4,title:'React'},
    {id:5,title:'Node'},
];

courses.indexOf({id:1,title:'JS'});// // -1
// // because the object is a reference type
// // to find the index of an object in an array, we need to use the findIndex method
courses.findIndex(course=>course.id===1);// // 0

courses.find(function(course){
    return course.id===1;
});// // {id:1,title:'JS'}
// // find method returns the first element that satisfies the condition


courses.find(course=>course.title==='JS');// // {id:1,title:'JS'}
// // find method returns the first element that satisfies the condition

numbers.find(function(number){
    return number===25;
}   );// // 25


//filtre method
const filteredCourses=courses.filter(function(course){
    return course.title.includes('JS');
});// // [{id:1,title:'JS'}]    
// // filter method returns an array of elements that satisfy the conditionq