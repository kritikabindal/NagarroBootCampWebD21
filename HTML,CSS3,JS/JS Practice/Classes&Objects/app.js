
//Another way of creating an objects
function Fruit(taste,color)
{
    this.color=color;
    this.taste=taste;
}

//new keyword
let mango=new Fruit("sweet","yellow");
let orange=new Fruit("sour","orange");

//one way of creating objects
var apple=
{
    taste:"sweet",
    color:"red",

}


//ES6 New way
//class Keyword
//class declaration (hoisted)
class FruitClass{
    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
};


let kiwi=new FruitClass("sour","green");

//class Expression(not hoisted)

let FruitClass2=class{
    constructor( taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
};

let kiwi2=new FruitClass2("sour","green");

