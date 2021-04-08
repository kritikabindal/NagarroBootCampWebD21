const express=require('express')
const app=express()

// console.log(app);


//sabhi incoming request k lia,this call back method will run
//this is middleware
// app.use(()=>
// {
//     console.log('YOu made a request!!');
// })
//----------------------------------
//this is for every req
// app.use((req,res)=>
// {
//     // console.log(req);
//     // console.log(res);

//     // res.send("Hello from the server.This is the response for the request you made");

//     //send html
//     res.send('<h1> this is the http response </h1>')
// })
//------------------------------------


//this is for particular uRL we requested


app.get('/',(req,res)=>
{
    res.send("<h1> this is root path </h1>");
})

// app.get('/cats',(req,res)=>
// {
//     res.send("<h1> Meowwwww</h1>");
// })

//send request using postman 
app.post('/cats',(req,res)=>
{
    res.send("<h3>  Post Request Meowwwww</h3>");
})


app.get('/dogs',(req,res)=>
{
    res.send("<h1> Woof Woof</h1>");
})


//for all (* meaning)
app.get('*',(req,res)=>
{
    res.send("This is the Invalid Path You are requesting");
})





app.listen(3000,()=>{
    console.log('server listening on port 3000');
})