const btn=document.querySelector('#btn');
// console.log(btn);
console.dir(btn);

//direct assign function
btn.onclick=function(){
    console.log(" you clicked anonoymous function");
}

//function then assign
function fun(){
    console.log(" you clicked it");
}

btn.onclick=fun;




//event comes automatically
//event is an object
btn.onclick=function(event) 
{
    console.log(event);
    console.log(event.target);//kaunse button p click kara hai

    console.log(" you clicked it");
}