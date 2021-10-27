const { PRIORITY_BELOW_NORMAL } = require("constants");
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

var points = [];
const length = 10000;

function myFunction() {

    for (let i = 0; i < length; i++) {
        points.push({'number': i});
    }
    return points;
}
 console.log(myFunction(points));
 
 rl.question("Which action you want to perform, Update or Delete ? ", (operation)=>{
    if(operation == "update"){
        var start = new Date().getTime();
        rl.question("Enter the index value where you want to Update: ", (index)=>{

        let update = points[index] = {'number' : 55};
        console.log(index, points[index]);   //it will update the value at index[0];
        rl.close();

        var end = new Date().getTime();
        let dur = end - start;

        console.log("Execution time :",dur);
        })
    }
    else if(operation == "delete"){
        var start = new Date().getTime();
        rl.question("Enter the index value where you want to delete: ", (index)=>{
        let remove  = points.splice(index, 1); //it will remove element from perticular position.
        console.log(remove, points.length);
        rl.close();

        var end = new Date().getTime();
        let dur = end - start;

        console.log("Execution time :",dur + "ms");
        })
    }
    else{
        console.log("please perform at least one operation");
        rl.close();
    }
});

//  console.log(points.length);