
const express =require('express');
const routes =express.Router();
const Product =require('../models/product');
//-------------------
//------------RESTFUL ------------
routes.get("/",(req,res)=>{
    res.send("connected");
})

//Get all the Products
routes.get("/products",async(req,res)=>
{
    // res.send("this is working")
    //this find function return a query so we can use async and await

    //product cannot find all the products at once so we use await there...
    const products=await Product.find({});


    //we get array from this
    // res.send(products);

    res.render('index',{products});

    
})




//Forms to create new Products
routes.get('/products/new',(req,res)=>
{
    res.render('new')
})

//---------

routes.post('/products',async(req,res)=>
{
// console.log(req.body);
// res.send("It worked");
const product=req.body;

await Product.create(product);

res.redirect('/products');
})

//-------------
//show the product
routes.get('/products/:id',async(req,res)=>
{
    // const {id}=req.params;
    const product= await Product.findById(req.params.id);
    res.render('show',{product})
})


//-----
routes.get('/products/:id/edit',async(req,res)=>
{
 const product=await Product.findById(req.params.id);
 res.render('edit',{product});
})


routes.patch('/products/:id',async(req,res)=>
{
    // res.send("You hit the path route");
    await Product.findByIdAndUpdate(req.params.id,req.body)
    res.redirect(`/products/${req.params.id}`);
})



routes.delete('/products/:id',async(req,res)=>
{
await Product.findByIdAndDelete(req.params.id);
res.redirect('/products');
})


module.exports=routes;