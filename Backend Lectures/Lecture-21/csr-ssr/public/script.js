function refreshTodo()
{
    $('#list').empty();

    $.get('/todo',function(data){
        console.log(data);
        
    });
}

refreshTodo();