const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>
{
    console.log("connection open")
})
.catch ((err)=>
{
    console.log("connection failed");

    console.log(err);
})


// const db=mongoose.Collection;
// db.on()

const movieSchema=new mongoose.Schema({
 name:String,
 score:Number,
 isWatched:Boolean
})

mongoose.model('Movie',movieSchema)//name should be singular




const IronMan =new movieSchema({name:'Ironman',year:2010,score:7,isWatched:false})





//another way
Movie.insertMany
([
    {
        name:"star wars",
        year:2008,
        score:9,
        isWatched:true
    },
    {
        name:"Spider man",
        year:2008,
        score:10,
        isWatched:false
    },
    {
        name:"Dr. Stran1ge",
        year:208,
        score:8,
        isWatched:true
    }
])
.then(data=>
    {
console.log(data);
    })
    .catch(err=>
        {
            console.log(err);
        })