const express =require('express');
const app=express();
const path=require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));


const todos =["Go to Gym","Learn Web","Buy Groceries","Go for a walk"];

const product={
img: 'https://images.unsplash.com/photo-1617909660121-ee367f2874ef?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
name:'kuch bhi',

price: '200',

description: 'gjhgfetrfdrtryv'

}

app.get('/random',(req,res)=>
{
    const num=Math.floor(Math.random()*10+1)
    res.render('random',{randomNum:num , todos:todos});
})


app.get('/',(req,res)=>
{

console.log(__dirname);
    res.send("This is root route");
})


// app.get('/home',(req,res)=>
// {

// //rendering ejs file and it is present in the view folder
//     res.render('home',);
// })

app.get('/home',(req,res)=>
{
    res.render('home',{product});
})


//for static files  in public folder
// app.use(express.static('public'));
app.use(express.static('public'))



app.listen(3000,()=>
{
    console.log('server started  at port 3000');
})