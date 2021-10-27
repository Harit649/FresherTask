const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question("what is your name : ", function(name){
    rl.question("where do you live : ", function(city){
        console.log(name + "lives in " + city);
        rl.close();
    });
});