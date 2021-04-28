const mongoose=require('mongoose')
const  Product =require('./models/product');

const products=[
    {
        name:"Iphone",
        img:"abc",
        price:100000,
        desc:"lorem text"
    },
    {
        name:"MacbookAir",
        img:"def",
        price:14000,
        desc:"lorem text"
    },
    {
        name:"watches",
        img:"ghi",
        price:123000,
        desc:"lorem text"
    },
    {
        name:"HeadPhones",
        img:"abc",
        price:100000,
        desc:"lorem text"
    },
    {
        name:"Drone",
        img:"abc",
        price:100000,
        desc:"lorem text"
    },
    {
        name:"HeadPhones",
        img:"abc",
        price:100000,
        desc:"lorem text"
    },


]


const seedDB=async()=>
{
     await Product.insertMany(products);
     console.log("DB Seeded");
}



module.exports=seedDB;