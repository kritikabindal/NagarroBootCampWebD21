function fun()
{
    console.log("Inside fun");
let x=0;
    function innerFun()
{
    x++;
    console.log('x');
}
return innerFun;

}


let f=fun();
console.log(f);