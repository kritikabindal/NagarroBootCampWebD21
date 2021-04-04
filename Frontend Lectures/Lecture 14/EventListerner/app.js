// const btn=document.getElementById('btn');



// function shout()
// {
//     console.log("Shout");

// }

// function scream()
// {
//     console.log("Scream");
// }


// //provblrm with onclick
// // btn.onclick=shout;
// // btn.onclick=scream;
// //if we run both then niche wala work
// //overwrite


// btn.addEventListener('click',shout);
// btn.addEventListener('click',scream);

//------------------------


const buttons=document.querySelectorAll('button');

for(let btn of buttons)
{
    btn.addEventListerner('mouseenter',(e)=>{
        //console.log(e);
        e.target.classList.add('first');
    })

    btn.addEventListerner('mouseleave',(e)=>{
        console.log(e);
        e.target.classList.toggle('first');
    })
}