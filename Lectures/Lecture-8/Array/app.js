let arr=[1,2,3,4,5];
console.log(arr);
console.log(typeof (arr)); // returns object



//multiple value in array can be store in js
let randomArray=[1,2,3,4,5,"Kartik",null, undefined,["apple","grapes"]];
console.log(randomArray);

//another Example
let arandomarray=[1,2,3,['a','b','c',["Kartik","Mathur"]]];
console.log(arandomarray[3][3][0]);

//Array methods
let fruits=["Apple","Grapes","Pine-Apple","Guava"];
console.log(fruits);

//Push
fruits.push("Mango","Chiku");
console.log(fruits);

//Pop
let poppedFruits=fruits.pop();
console.log(poppedFruits);
console.log(fruits);


//shift
let shiftedFruits=fruits.shift();
console.log(shiftedFruits);
console.log(fruits);


//unshift
fruits.unshift('Jackfruit','Strawberry');
console.log(fruits);