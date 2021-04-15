const express =require('express')
const app=express();

const path=require('path')

app.set('view engine','ejs');


app.use('/cat',express.static(path.join(__dirname,'public')))

const todos=["GO to gym","learn web","watch Movie","Go park"]

app.get('/todo',(req,res)=>
{
if(req.xhr)
{
    console.log("AJAX REQUEST");
}
else{
    console.log("SSR");
    res.render("home",{todos});
}
})

app.listen('3000',()=>
{
console.log('server is running at port 3000');
})