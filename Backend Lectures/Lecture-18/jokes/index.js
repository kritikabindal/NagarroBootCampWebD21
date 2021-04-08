const jokes = require('give-me-a-joke');
const colors = require('colors');
const figlet =require('figlet');

// jokes.getRandomCNJoke (function(joke) {
//     console.log(colors.rainbow(joke));
//     console.log(colors.red.inverse(joke));
// });


figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});