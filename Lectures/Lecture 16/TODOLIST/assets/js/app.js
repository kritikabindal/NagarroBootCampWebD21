
//just show task are completed
//this only  work on static things
// $('li').click(function ()
// {
//     $(this).toggleClass('Completed')
// })




$('ul').on('click','li',function()
{
    // alert("clicked on li")
    $(this).toggleClass('Completed');
})


// //to remove
// $('span').click(function()
// {
//     $(this).parent().remove();
// })

$('ul').on('click','span',function(event)
{
    // alert("click on span");
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    })
    // $(this).parent().remove();
    event.stopPropogation(); //to stop event sbubbling
})

//add the new to do
$('input[type="text"]').keypress(function(e)
{

    // console.log(e);
    if(e.which===13)
    {
        // console.log("YOu HIT the ENTER");
        const todoText=$(this).val();
        console.log(todoText);
        const todo=`<li> <span>X</span>${todoText}</li>`
        $('ul').append(todo);
        $(this).val(" ");

    }
    // console.log("Key Pressed");
})




$('#plus').click(function()
{
    $('input[type="text"]').fadeToggle(500);
})