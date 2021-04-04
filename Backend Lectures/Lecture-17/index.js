// console.log("Welcome to Backend World");


// function add(x,y)
// {
//     return x+y;
// }
//  let sum=add(3,5);
// console.log("sum is "+sum);


console.log( process.argv);
//then take input at the command line

const arr=process.argv.slice(2);

for (let user of arr)
{
    console.log(`Hello from ${user} `);
}