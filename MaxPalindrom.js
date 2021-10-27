const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question("enter the string to find the max number of palindom : ", str1 => {

    rl.question("enetr the start position : ", start => {

        rl.question("enter the last position : ", end =>{

            const s1 = parseInt(start);
            const s2 = parseInt(end);

            let count = 0; 
            let tamp = str1.slice(s1, s2 + 1);
            // console.log(tamp);
   
            for (let i = 0; i < tamp.length; i++) {
                for (let j = i + 1; j < tamp.length; j++) {
                    let str2 = tamp.slice(i, j + 1);
                    let val = Array.from(str2).reverse().join("");
                    
                    if (str2 == val) {
                        count++;
                    }
                }
            }

            console.log("number of Palindrome possible from given string : ", count);
        })
    }) 
});