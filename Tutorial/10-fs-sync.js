// const {readFileSync , writeFileSync}= require('fs');

// const first=readFileSync('./content/first.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');


// console.log(first);
// console.log(second);

// writeFileSync('./content/result-sync.txt',
// `Here is the result : ${first} ,${second}`,{flag:'a'});

//---------------------------------------------------------

//in sync  task complete one after one
const {readFileSync , writeFileSync}= require('fs');
console.log('start')
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');


// console.log(first);
// console.log(second);

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first} ,${second}`,{flag:'a'});


console.log("done with thid task")
console.log("start the next one")