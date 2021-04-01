//  const textData=`{
// "ticker": {
//     "base": "BTC",
//     "target": "USD",
//     "price": "58931.05461665",
//     "volume": "28576.21543030",
//     "change": "-102.95949551"
//     },
//     "timestamp": 1617282904,
//     "success": true,
//     "error": ""
//     }`


 //parse method takes a json string and return an object
//  const data=JSON.parse(textData);

// console.log(data);
//then we use it as js object

//  console.log(data.ticker.price);


//--------------------------------------------------

//oldest way of sending request 
//1) XMLHttpRequest
//ye ek object return karega
// const req=new XMLHttpRequest();

// req.onload=function()
// {
//     console.log(this.responseText);
//     const data=JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }
// req.onerror= function()
// {
//     console.log(err);
// }
// req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();




//----------------------------------
//New way of sending request
//2) using fetch

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(data=>{
    console.log(data);
    //json promise is resolved then the  whole data will return
    return data.json();
})
.then(parseData=>{
    console.log(parseData.ticker.price);
})
.catch(err=>{
    console.log("Error");
    console.log(err);
})

//-------------------------------------
//3)third party








