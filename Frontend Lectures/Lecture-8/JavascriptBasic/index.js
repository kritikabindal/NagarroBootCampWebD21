// to print on the window

// alert("Hello Javascript");


let likes=99;
console.log(likes);
likes=likes+1;
console.log(likes);


//const
const pi=3.14;
console.log(pi);

// pi=6.8;
// console.log(pi);  // it throw an error

//need to initalise at the same time otherwise it throw na error
const num=80;
console.log(num);

//var
var magicnum=34; //older way of javascript
console.log(magicnum);


//boolean
let isRianing=true;
console.log(isRianing);

//string
let name='Kritika';
console.log(name);


let str1='This is vivek\'s book';
console.log(str1);

let str="hello world"
console.log(str);
console.log(str[0]); //access 1st character of hello string
console.log(str[1]);
console.log(str[99]); //throw undefined output

// ------string method---
console.log(str.length);

//Non destructing
let msg='Leave me alone';
console.log(msg);

console.log(msg.toUpperCase);
console.log(msg.toLowerCase);
console.log(msg);

//substring method
console.log(msg.substr(3));
console.log(msg.substr(2,5));
console.log(msg.substr(-5,3));


//method chaining
let msg1='   Leave me alone   ';
console.log(msg1.trim);
let angrymsg=msg1.trim().toUpperCase();

//indexof msg
console.log(msg.indexOf('me'));
console.log(msg.indexOf('m'));

//String Template literals
let fullName=`My full name is ${2+4}`;
console.log(fullName);
