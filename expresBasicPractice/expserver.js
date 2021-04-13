const express=require('express')
const app=express()
// const bodyParser=require("body-parser")


app.use(express.urlencoded({extended :true}));


app.get('/',(req,res)=>
{
res.send("HEllo ,we write our first server");
})



app.get('/about',(req,res)=>
{
res.send("this is all about ");
})

app.get('/contact',(req,res)=>
{
res.send("contact me on:kritikabindal30@gmail.com ");
})

//show static file in the browser
app.get('/calculator',(req,res)=>
{
// console.log( __dirname );
res.sendFile( __dirname +"/index.html")
})

app.post('/calculator',(req,res)=>
{
// res.sendFile( __dirname +"/index.html")

    // res.send("Thankyou");
    console.log(req.body);
})

app.listen('3000',()=>
{
    console.log("Server has been at the port 3000")
})