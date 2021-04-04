const buttons =document.querySelectorAll('button');


for(let btn of buttons)
{
    btn.addEventListener('click',(e)=>
    {
        // console.log(e.target);
        let buttonText=e.target.innerText;

        if(buttonText=='x')
        {

        }

    })
}