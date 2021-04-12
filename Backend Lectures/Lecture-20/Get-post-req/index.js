const express=require('express')
const app= express()



app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>
{
    res.render('form');

})

//create a get request
app.get('/user',(req,res)=>
{
    const username=req.query;
    res.send(`Hello from ${username}`);

})

//create a post request
app.post('/user',(req,res)=>
{
    // const username=req.query;
    // res.send(`Hello from ${username}`);
    //data send through form will go in the req body
    console.log(req.body);
    req.send("Post req ")

})
app.listen(3000,()=>
{
    console.log("server has started");
})