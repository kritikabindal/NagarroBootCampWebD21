// function fizzBuzz(n)
// {
//     for(let i=0;i<=n;i++)
//     {
//         let str="";
//         if(i % 3===0 && i % 5===0)
//         {
//             str+='fizzBuzz';
//         }
//         else if(i%3===0)
//         {
//             str+='fizz';
//         }
//         else if(i%5===0)
//         {
//             str+='Buzz';
//         }
//         else{
//             str+=i;
//         }
//         console.log( str);
//     }
// }
// fizzBuzz(20);


function fizzBuzzOptt(n)
{
    for(let i=0;i<=n;i++)
    {
        let str="";
        if(i%3===0)
        {
            str+='fizz';
        }
         if(i%5===0)
        {
            str+='Buzz';
        }
        if(str =='')
        {
            str+=i;
        }
        console.log( str);
    }
}
fizzBuzzOptt(20);