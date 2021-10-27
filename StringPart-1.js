// const s1 = String("Harit");
// const s2  = new Object("Harit");

// console.log(s1 === s2);

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question("enter the value of String-1 : ", str1 => {

    rl.question("enter the value of string-2 : ", str2 => {
        if (str1.length == str2.length && str1.indexOf(str2) != -1) 
        {
            console.log("String are match");
        }
        else
        {
            console.log("The String are not match");
        }

        rl.question("Enter the string to check wather it's palindrom or not : ", str3 =>{
            const len = str3.length;
            let flag = 0;
   
            for (let i = 0; i < len/2; i++) 
            {
               if(str3[i] !== str3[len - 1 - i])
               {    
                   flag = 1;
                   break;
               }                
            }
            if (flag == 0) {
                console.log("String is a Palindrom.");
            }
            else
            {
                console.log("String is not a palindrom.");
            }

            rl.question("Enter the string value to remove duplicate element from string : ", str4 => {

                // console.log((str4).split('').sort().join('').replace(/(.)\1+/g, ""));

                for (let i = 0; i < str4.length; i++) {
                    for (let j =i + 1; j < str4.length; j++)
                     {
                         if (str4.charAt(i) == str4.charAt(j)) 
                         {
                                 str4 = str4.substring(0,i) + str4.substring(0,j);
                                 j = j - 1;
                                 console.log(str4); 
                         }
                    }
                }
            })
       })
    })
});



