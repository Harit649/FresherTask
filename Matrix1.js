const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});


rl.question("enter the dimention of Matrix(Array) :" , (val)=>{
    var main_Matrix = new Array(val);

    for (let i = 0; i < val; i++) {
        main_Matrix[i] = new Array(val);   
    }

    for (let i = 0; i < val; i++) {
        for (let j = 0; j < val; j++) {
            
            // main_Matrix[i][j] = Math.ceil(Math.random() * 100) + 1 ;
            main_Matrix[i][j] = i + j;
            console.log(main_Matrix[i][j], [i]);
        }
    }

    rl.question("enter the dimention of small Matrix(Array) :" , (smallval)=>{
        var small_Matrix = new Array(smallval);
    
        for (let i = 0; i < smallval; i++) {
            small_Matrix[i] = new Array(smallval);   
        }
    
        for (let i = 0; i < smallval; i++) {
            for (let j = 0; j < smallval; j++) {

                // small_Matrix[i][j] = Math.ceil(Math.random() * 100) + 1 ;
                small_Matrix[i][j] = i + j ;
                console.log(small_Matrix[i][j], [i]);
            }
        }

        console.log("\n");

        // rl.question("Small Matrix is a Subset of main Matrix or not ? : ", (result) => {
        //     var result = small_Matrix.every(function(val) {
        //         return main_Matrix.indexOf(val) >= 0;

        //     var result = !small_Matrix.some(function (val) {
        //         main_Matrix.indexOf(val) === -1;
        //     });
        //     });
        
        //     console.log(result);\

        // });
        
        let flag = 0, tamp = 0;
        for (let i = 0; i < main_Matrix.length - small_Matrix.length; i++) {         // you can also pass both function like (val-smllval
            for (let j = 0; j < main_Matrix.length - small_Matrix.length; j++) {

                for (let m = 0; m < small_Matrix.length; m++) {
                    for (let n = 0; n < small_Matrix.length; n++) {
                        if (main_Matrix[i+m][j+n] != small_Matrix[m][n]) {    
                            flag = 1;
                            break;
                        }
                        
                    }
                }
                if (flag == 0) {
                    console.log(`match found in the Metrix at index : (${i} ${j})`);
                    tamp++;
                }     
            }
        }
        if (tamp == 0) {
            console.log("The subset in Matrix is not found");
        }
    })
});