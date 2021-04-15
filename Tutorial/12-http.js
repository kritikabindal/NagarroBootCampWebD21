const http=require('http');

const server=http.createServer((req,res)=>
{
// res.write('welcome to our home page')
// res.end()
if(req.url==='/')
{
    res.end('Welcome to our home page')
}

if(req.url ==='/about')
{
res.end("here is our short")
}

res.end(
    `<h1> oops!</h1>
    <p> this is a page</p>`
    )
})

server.listen(5000,()=>
{
    console.log("server running at port no:5000");
})


