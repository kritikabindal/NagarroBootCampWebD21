// async function add(x,y)
// {
//     return x + y;
// }

//---------------------async-----------
// async function add(x,y)
// {
//     if(typeof x !== 'number' || typeof y !== 'number')
//     {
//         throw " INVALID NUMBER TYPE";
//     }
//     return x+y;
// }

// add(5,6)
// .then(data=>{
//     console.log("Inside  Resolve");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("Inside  Reject");
//     console.log("Something Went wrong");
//     console.log(err);
// })

//------------------await----------------

async function getBitCoinPrice()
{
    console.log("Starting the getBitCoin Function");

  const response=await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
  console.log("After Getting Response from fetch");
console.log("Parsing response for data");
  const data=await response.json();
  console.log("Parsing Complete");

  console.log(data.ticker.price);
  console.log("getBitCoinPrice Function completes,AlL Done!!");
}


  getBitCoinPrice()
    .then(()=>
    {
        console.log("Resolved");
    
    })
    .catch(err=>
        {
            console.log("AAAAHHHH! ERROR");
        })

console.log("After Function");
console.log("After Function");
console.log("After Function");
console.log("After Function");
console.log("After Function");




    