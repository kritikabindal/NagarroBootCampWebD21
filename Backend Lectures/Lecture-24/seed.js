const mongoose=require ('mongoose');


//schema
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



const Product =mongoose.model('Product',productSchema);


const arr=[
    {
        name="Iphone12",
        price:100000,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {  name="Macbook Air",
          price:14500,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.  only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
        name="Drone",
          price:11000,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ed not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name="T-shirt",
          price:1400,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrd not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name="Watchs",
          price:8000,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrd not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
];



Product.insertMany(arr)
.then(()=>
{
console.log("DB Seeded");
})
.catch(err=>
    {
        console.log("Error");
        // console.log();
    })



    module.exports=seed;