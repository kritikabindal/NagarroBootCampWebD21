

const mongoose=require('mongoose');
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

const Product =mongoose.model('Product',productSchema);

module.exports=Product;

