const express=require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))

const comments=[
{
    id:0,
username:"Prateek",
body:"hi Prateek"
},
{
    id:1,
    username:"Kritika",
    body:"this is a comment"
},
{
    id:2,
    username:"cat",
body:"meow meow"
},
{
    id:3,
    username:"dog",
body:"woof woof"
},
{
    username:"lion",
body:"roar roar"
}]
//-------------------------------------
//list all the comments
app.get('/comments',(req,res)=>
{
res.render('comments/index',{comments});
})




//------------------------
 //getting a form for adding  new comment
app.get('/comments/new',(req,res)=>
{
    res.render('comments/new');
})




//-------------------------------
//creates a new comment
app.post('/comments',(req,res)=>
{
     // console.log(req.body);
    const {username,body}=req.body;

    const id=comments.length;
    comments.push({username,body ,id});
   
    // res.send("create New Comment Route");
    res.redirect('/comments')
})
//---------------------------------

//show Particular comment
app.get('/comments/:id',(req,res)=>
{
    const {id}=req.params;
    const foundcomment=comments.find(c=> c.id===parseInt(id));
    // console.log(foundcomment);
    res.render('comments/show',{comment:foundcomment});
    res.send(foundcomment);
})



//---------------------
//get a form for editing comments
app.get('/comments/:id/edit',(req,res)=>
{
    const {id}=req.params;
    const foundcomment=comments.find(c=> c.id===parseInt(id));
    res.render('comments/edit',{comment:foundcomment});
})
//----------------
//to update the particular comment
app.patch('/comments/:id',(req,res)=>
{
   res.send("you hit the patch ") 
})

app.listen(3000,()=>
{
    console.log("server has been started at 3000");
})