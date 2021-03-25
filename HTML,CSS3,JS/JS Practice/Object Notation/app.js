//oop in js
//allows to create objects without defining the class


//one way of creating js objects without creating classses
//and also called json
var bird={
    x:100,
    y:20,
    colour:"blue",
    // eggs:[1,2,3,4]
    eggs:["one","two","three"],
    fly:function()
    {
        console.log("Bird is flying",this.x,this.y);
    }
};

//calling the function
// bird.fly();


//for loop
// for(let i=0; i<bird.eggs.length;i++ )
// {
//     console.log(bird.eggs[i]);
// }

//foreach loop
bird.eggs.forEach(function(idx,val)
{
    console.log(idx,val);
});