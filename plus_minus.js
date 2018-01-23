process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function plusMinus(arr) {
    // Fraction pos, neg, and 0
    let countPos = 0; 
    let countNeg = 0; 
    let countZero = 0; 
    arr.forEach((el) => {
        if(el>0){
            countPos += 1;
        }
        if(el<0){
            countNeg += 1;
        }
        if(el===0){
            countZero += 1;
        }
    })
    console.log(countPos/arr.length);
    console.log(countNeg/arr.length);
    console.log(countZero/arr.length);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);

}