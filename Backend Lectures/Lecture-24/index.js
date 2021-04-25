const express =require('express');
const app =express();
const mongoose=require('mongoose');
const path=require('path');
// const SeedDB=require('./seed')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:true}));



//--------------Database-------------------

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>
{
    console.log("DB connected");
})
.catch(err=>
{
console.log("connection error");
console.log(err);

});




//--------------schema----------------
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0
    },
    desc:
    {
type:String
    }
})

//-------------Model-------------

const Product =mongoose.model('Product',productSchema)

SeedDB();

app.get("/",(req,res)=>{
    res.send("connected");
})

//Get all the Products
app.get("/products",async(req,res)=>
{
    // res.send("this is working")
    const products=await Product.find({});
    // res.send(products);
    res.render()

    
})




//Forms to create new Products
app.get('/products/new',(req,res)=>
{
    res.render('new')
})



app.post('/products',async(req,res)=>
{
// console.log(req.body);
// res.send("It worked");
const product=req.body;

await Product.create(product);

res.redirect('/products');
})


app.patch('/products/:id',async(req,res)=>
{
    await Product.findByIdandUpdate(req.params.id,req.body)
})






app.listen('3000',()=>{
    console.log("Server is running at port 3000")
})