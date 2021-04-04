$('#special').css('color','red');


//select all li's in the orderlist
$('ol li').css('font-weight','bold')

//change css of h1 using jquery
$('h1').css({
    border:'3px solid black',
    fontSize:'50px',
    fontFamily:'sans-serif',
    textTransformation:'uppercase',
    backgroundColor:'aqua',
    color:'red'
})

//using js

const style={
    border:'3px solid black',
    fontSize:'50px',
    fontFamily:'sans-serif',
    textTransformation:'uppercase',
    backgroundColor:'aqua',
    color:'red'
}

//then use Jquery Selector
// $('ol li').first().css(style);

//select alternate li's
// $('ol li:nth-of-type(odd)').css('background-color','lightgreen')

//doing this code using dom

// const lis=document.querySelectorAll('ol li:nth-of-type(odd)')
// for(let li of lis)
// {
//     li.style.backgroundColor='lightgreen'
// }


//.text() method

//it is same as textContent
//it gives plain text
$('#special').text();

//.html() method
//it returns text and html both

$('#special').html();


//set the text
$('ol li:first').text('Dr.strange')

//add css to jQuery
$('ol').addClass('first')


//add class 
$('ol').addClass('second')