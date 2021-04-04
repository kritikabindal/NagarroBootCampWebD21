// const math =require('./math');
//------------
//another way
const {square,add,PI}=require('./math');
//---------------

// console.log(math); //it gives an empty objectnif nothing is exports
//but if something is exports from math.js file then give the output


// console.log(math.square(7));

// console.log(math.add(3,5));
//--------------------------------------------

//afterdesturing the export file,then print
console.log( square(6));;;
console.log(add(3,4));
console.log(PI);

//---------------------------------
//Destructuring the object

//Structure the object
const person ={
    name:"Kritika",
    age:24,
    color:'black'
}

const { name,age,color}=person;
console.log(name);
console.log(age);
console.log(color);




