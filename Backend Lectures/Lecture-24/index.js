const express =require('express');
const app =express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override')
const Product=require('./models/product');
// const SeedDB=require('./seed');
const  productRoutes=require('./routes/product');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')))
//we need to parse the data 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')))
app.use(methodOverride('_method'))



//--------------Database-------------------

mongoose.connect('mongodb://localhost:27017/shopApp',
 {useNewUrlParser: true,
     useUnifiedTopology: true,
    useFindAndModify:false
})
.then(()=>
{
    console.log("DB connected");
})
.catch(err=>
{
console.log("connection error");
console.log(err);

});



//-----*****all schema isin the model/product.js****----
// //--------------schema----------------


// const productSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         min:0
//     },
//     desc:
//     {
// type:String
//     }
// })

// //-------------Model-------------

// const Product =mongoose.model('Product',productSchema);


//we seed the data only once
// SeedDB();











// //-------------------
// //------------RESTFUL ------------
//-----**** ALl the request then in the folder routes/product.js****-----
// app.get("/",(req,res)=>{
//     res.send("connected");
// })

// //Get all the Products
// app.get("/products",async(req,res)=>
// {
//     // res.send("this is working")
//     //this find function return a query so we can use async and await

//     //product cannot find all the products at once so we use await there...
//     const products=await Product.find({});


//     //we get array from this
//     // res.send(products);

//     res.render('index',{products});

    
// })




// //Forms to create new Products
// app.get('/products/new',(req,res)=>
// {
//     res.render('new')
// })

// //---------

// app.post('/products',async(req,res)=>
// {
// // console.log(req.body);
// // res.send("It worked");
// const product=req.body;

// await Product.create(product);

// res.redirect('/products');
// })

// //-------------
// //show the product
// app.get('/products/:id',async(req,res)=>
// {
//     // const {id}=req.params;
//     const product= await Product.findById(req.params.id);
//     res.render('show',{product})
// })


// //-----
// app.get('/products/:id/edit',async(req,res)=>
// {
//  const product=await Product.findById(req.params.id);
//  res.render('edit',{product});
// })


// app.patch('/products/:id',async(req,res)=>
// {
//     // res.send("You hit the path route");
//     await Product.findByIdAndUpdate(req.params.id,req.body)
//     res.redirect(`/products/${req.params.id}`);
// })



// app.delete('/products/:id',async(req,res)=>
// {
// await Product.findByIdAndDelete(req.params.id);
// res.redirect('/products');
// })

//-------------------------------

//run for all upcoming  request/routes
app.use(productRoutes);

app.listen('3000',()=>{
    console.log("Server is running at port 3000")
})