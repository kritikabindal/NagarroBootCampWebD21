const person=
{
    firstName:"Kartik",
    age:25,
    isAdult : true
}

//access property using dot operator
console.log(person.firstName);

//using subscript
// console.log(person[firstName]);

person.lastName="Mathur";
console.log(person.lastName);

delete person.isAdult;
console.log(person);