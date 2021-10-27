const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question("Enter the string to count the frequency : ", str1 =>{

    let tamp = str1.split("");
    let letters = [];
    let count = 1;
 
    for (let i = 0; i < str1.length; i++) {
        if (tamp[i] === tamp[i + 1]) 
        {
            count++;   
        }
        else
        {
            let value = `${tamp[i]}-${count} `;
            letters = [letters,value];
            count = 1; 
        } 
    }
    console.log(letters.join("")); 
 }); 
    
// console.log(countLetters("aabcc"));