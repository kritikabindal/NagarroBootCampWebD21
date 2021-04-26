const mongoose=require ('mongoose');
const Product=require('./models/product');


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
        name:"Phone",
        price:100000,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {  name:"Macbook Air",
        price:14500,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.  only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
        name:"Drone",
        price:11000,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ed not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name:"T-shirt",
        price:1400,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrd not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name:"Watch",
        price:8000,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrd not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
];

function seed()
{
    Product.insertMany(arr)
    .then(()=>
    {
    console.log("DB Seeded");
    })
    .catch(err =>
        {
            console.log(err);
            // console.log();
        })
    
}



//we are just exporting this function
    module.exports=seed;