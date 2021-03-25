//variables,array,functions


//variables
c=20; //gllobal variables
var d=30;//function scope
let e=50;//block scope
let b=[1,2, 3,4,5];

function fun()
{
    let a=5;
    if(a===5){
    let b=10;
    console.log("Inside",b);
    }
    console.log("Outside",b);
}

fun();


//example 
function square_root(n)
{
    console.log("In first Sqrt function");
    // return Math.sqrt(n);
    console.log(Math.sqrt(n));
}
square_root(9);

// function hoisting
//2nd way of creating function
//called as function declaration
//they are not hoisted

var sqrt_n=function()
{
    console.log("In second Sqrt function");
    return;
}

sqrt_n(n);