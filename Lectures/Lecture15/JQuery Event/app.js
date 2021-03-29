
// //button text event
// $('button').click(function()
// {
// // console.log("Someone Clicked the Button");
//console.log(e.target);
// let btnText=$(this).text();
// console.log(btnText);

// })

// //click event
// $('h1').click(function()
// {
//     $('h1').css('color','green');
// })



//----------------------------------------------------


//Keyboard Events
// $('input[type="text"]').keypress((e)=>
// {
//     if(e.which==13)//enter charcode is 13
//     {
//         console.log("You Pressed the key");
//     }
//     // console.log(e);
//      console.log("Key Presssed")
// })


//on click events

// $('div').on('click',function()
// {
//     $(this).remove();
// })


//mouse Event
// $('div').on('mouseenter',function()
// {
//      $(this).css('background-color','aqua');
//  })

//  $('div').on('mouseleave',function()
// {
//      $(this).css('background-color','lightblue');
//  })

//Effects


//FadeIn

// $('#btn').on('click',function()
// {
//     $('div').fadeIn();
// })


//FadeOut
// $('#btn').on('click',function()
// {
//     $('div').fadeOut(800);
// })

//fadeToggle
$('#btn').on('click',function()
{
    $('div').fadeToggle(800,function()
    {
        console.log("faded In-out");
    });
})