const fs=require('fs');

const data="Hello from File System";
//write the file
 fs.writeFile('abc.txt',data,{
     encoding:'utf-8',
     flag:'w'},
     (err)=>
     {
         if(err)
         {
             throw err;
         }
     console.log("File Written successfully");
 });
//read the file
 fs.readFile('abc.txt',
 {
     encoding:'utf-8',
     flag:'r'
 },
 (err,data)=>{
     if(err)
     {
         throw err;
     }
     console.log(data.toString);
 })