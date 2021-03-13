//slice 
//it doesnt change the original array

let a=[1,2,3,4,5];
console.log(a.slice);

console.log(a.slice(2));

console.log(a.slice(2,5));

console.log(a.slice(-4));
//op:2,3,4,5

console.log(a.slice(-4,-2));

//-------------splice-------------

//it actually change original array
//destructive array

let aa=[1,2,3,4,5,6];
console.log(aa);
console.log(aa.splice(1,4));
console.log(aa);

let a1=[1,4,"blue","red","green"];
console.log(a1);
console.log(a1.splice(2,4));

let colors=["blue","red","orange","pink"];
console.log(colors);
console.log(colors.splice(2,1,"apple","Guava"));
console.log(colors);


//-------------split-----
//it is used on string

let url='http://abc..com/song.mp3';
console.log(url);
console.log(url.split('/'));
let fileName=url.split('/').pop();
console.log(fileName);


//-----Join---
//it is non destructive
let arr=[1,2,3];
console.log(arr);

console.log(arr.join('-'));
console.log(arr.join('+'));
console.log(arr);









