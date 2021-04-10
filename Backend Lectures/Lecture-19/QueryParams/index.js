const express =require('express');
const app=express();
;

app.get('/',(req,res)=>
{


    res.send("This is root route")
})

app.get('/hello',(req,res)=>
{


    res.send("This is just for hello")
})

app.get('/search',(req,res)=>
{
    //http://localhost:3000/search?name=kritika
console.log(req.query);
    res.send("This is a search page")
    // console.log("this is a search page");
})



app.get('/greet',(req,res)=>
{
   const{username}=req.query;
   res.send(`Hello from ${username}`) 
})



app.listen(3000,()=>
{
    console.log('server started  at port 3000');
})