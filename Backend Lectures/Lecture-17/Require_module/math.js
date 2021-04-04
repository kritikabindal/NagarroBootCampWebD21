const square = n=> n*n;

const add =(x,y)=> x+y;


const PI=3.14;


// console.log(square(9));
// console.log(module.exports);//it also return empty object

// module.exports.square=square;
// module.exports.add=add;
// module.exports.PI=PI;


const all={
    square:square,
    add:add,
    PI:PI
}

module.exports=all;
 

// module.exports="Hello INDIA";