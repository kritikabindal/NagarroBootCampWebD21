const express=require('express')
const app= express()


// to set for the ejs files
app.set('view engine','ejs');

//middleware
app.use(express.urlencoded({extended:true}))


//create a root request
app.get('/',(req,res)=>
{
    // res.send ('It worked');
    res.render('form');

})

//create a get request for user
app.get('/user',(req,res)=>
{
    // res.send("hello")
    const {username}=req.query;
    res.send(`Hello from ${username}`);

})

//create a post request
app.post('/user',(req,res)=>
{
    // const username=req.query;
    // res.send(`Hello from ${username}`);
    //data send through form will go in the req body
    console.log(req.body);
    res.send("Post req")

})
app.listen('3000',()=>
{
    console.log("server has started at port 3000");
})