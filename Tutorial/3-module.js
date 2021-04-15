//common js,every file is module(by default)
//modules-Encapsulatd code(only share minimum)

const names =require('./4-names');
const sayHi =require('./5-util');
const data=require('./6-alternative-flavor');
 require('./7-mind-generate')




// console.log(data);

console.log(names);
console.log(sayHi);
sayHi('Kritika');
// sayHi(john); cannot write this
sayHi(names.john)
// sayHi(peter); cannot write this 
sayHi(names.peter)
