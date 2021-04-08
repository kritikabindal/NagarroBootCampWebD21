const express = require('express')
const app=express()





app.get('/',(req,res)=>
{
    res.send("This is Home Route");
})


// /:subreditt is a variable

app.get('/r/:subredit',(req,res)=>
{
    const {subredit} =req.params;
    // res.send("This is Subreddit");
    // console.log(req.params)
    res.send(`<h1> this is a ${subredit} Subredit </h1>`)
})



app.listen(8080,()=>
{
    console.log('server running at port 8080');

})