//Array
let arr=["apple","Mango","Guava","Bananas"];
// console.log(arr);


for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}
//insert at the last
arr.push("cherry");
console.log(arr);

console.log(arr.length);
//delete from the last
arr.pop();
console.log(arr);


//find index of the element
console.log(arr.indexOf("Mango"));

//remove from the fronts
arr.shift();
console.log(arr);

//add in the front
arr.unshift("Kiwi");
console.log(arr);


//conditional statements

if(arr[0]==="Kiwi")
{
    console.log("Kiwi is sweeet in taste");
}
else{
    console.log("No it is ",arr[0]);
}

