const express=require('express');
const app=express();

app.set('view engine','ejs');
app.use()

//getting a form for new comment
app.get('/comments/new',(req,res)=>
{
    res.render('comments/new');
})

//creates a new comment
app.post('/comments',(req,res)=>
{
const {usernmae,body}=req.body;
comments.push({username,body});
    // console.log(req.body);
    res.send("create New route");
    res.redirect('/comments')
})


const comments=[{
username:"Prateek",
body:"hi Prateek"
},
{
    username:"Kritika",
    body:"this is a comment"
},
{
    username:"cat",
body:"meow meow"
},
{
    username:"dog",
body:"wooh wooh"
},
{
    username:"lion",
body:"roar roar"
}]


app.get('/comments',(req,res)=>
{
res.render('comments/index',{comments})
})

app.listen(3000,()=>
{
    console.log("server has been strated");
})