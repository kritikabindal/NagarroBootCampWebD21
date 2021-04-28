const express =require('express');
const app=express();


// app.use((req,res,next)=>{
//     req.name="Sabeel";
//     console.log("My first middleware");
//     // next();
//     // res.send("HiJAcked by my app.use!!");
//     // console.log("this is the first middle ware after calling next()");
// })



// app.use((req,res,next)=>{
//     req.name="Sabeel";
//     console.log("My second middleware");
//     next();
//     // res.send("HiJacked by my app.use!!");
//     console.log("this is the second middle ware after calling next()");
// })




//----middleware function for authentication
const verify=(req,res,next)=>
{
    const {password}=req.query;
    if(password ==='orange')
    {
    next();
    }
res.send("INVALID PASSWORD...!!")
}


//request as a middle
app.use('/cats',(req,res,next)=>
{
console.log("this is the middle at path /cats" )
next();
})



app.get ('/',(req,res)=>{
    console.log(req.name);
    res.send("this is working");
})


app.get('/dogs',verify,(req,res)=>
{
    res.send("woof woof");
})

//------------------------
//--------just a fake authentication-------------
//just we follow the approach--


app.get('/secret',(req,res)=>
{
    res.send("My secret is :Sometime I put the headphone i dont have to talk to anyone");
})

app.listen('3000',()=>
{
    console.log("server is running");
})