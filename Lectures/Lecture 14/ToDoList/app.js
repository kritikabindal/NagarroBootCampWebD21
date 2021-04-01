
const inp=document.querySelector('#inp');

const btn=document.getElementById('addTodo');
const list=document.getElementById('list');

btn.onclick=function(e)
{
    //console.log("clicked");

    const todoText=inp.value;
    const li=document.createElement('li');
    li.innerText=todoText;


//remove the li
    li.onclick=function(e)
    {
        console.log(e.target);
        e.target.remove();
    }

//append with todo list
    list.append(li);

    inp.value=" ";



}