const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})


//-----------------
//we dont use such things generally
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected");
// });



//--------------------------


//connect method returns promise so we use .then and catch

.then(()=>
{
    console.log("connection open")
})
.catch ((err)=>
{
    console.log("connection failed");

    console.log(err);
})
//------------------------

// const db=mongoose.Collection;
// db.on()

//--------------------create schema-----

// const movieSchema=new mongoose.Schema(
// {
//  name:String,
//  score:Number,
//  isWatched:Boolean
// })

//---------another way of writing schema
const movieSchema=new mongoose.Schema(
    {
     name:{
        type:String,
        required:true,
        maxlength:30
     },
     year:{
         type:Number
     },
     score:
     {
      type:Number,
      min:0,
      max:10
    },
     isWatched:
     {
      type:Boolean,
      default:false
     }
    })

//---------------------

//name should be singular
const Movie= mongoose.model('Movie',movieSchema);

//----------one way---
//object1
// const ironMan =new Movie({name:'Ironman',year:2010,score:7,isWatched:false})
// //object2
// const superMan =new Movie({name:'superMan',year:2015,score:6,isWatched:false})





//---------------------another way-------------------



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