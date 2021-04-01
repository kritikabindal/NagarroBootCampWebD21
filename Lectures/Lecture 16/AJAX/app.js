// const 

// const data=JSON.parse(textData);

// console.log(data);
// console.log(data.ticket.price);




//oldest way of sending request

// const req=new X



// req.onload=function()
// {
//     console.log(this.responseText);
//     console.log()
// }

// req.onerror= function()
// {
//     console.log(err);
// }


// req.open('GET',);
// req.send();




//----------------------------------
//New way of sending request
fetch('')
.then(data=>{
    console.log(data);


    return data.json();
})
.then(parseData=>{
    console.log(parseData.ticker.price);
})
.catch(err=>{
    console.log("Error");
    console.log(err);
})









