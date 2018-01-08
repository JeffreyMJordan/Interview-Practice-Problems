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

function main() {
    var t = parseInt(readLine());
    left = {"{":"}", "[": "]", "(": ")"}
    right = {"}":"{", "]": "[", ")": "("}
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        var res = "YES";
        var leftBrackets = [];
        for(var i = 0; i<expression.length; i++){
            var char = expression[i]
            if (left[char]){
                leftBrackets.push(char)
            }else if (right[char]){
                if (right[char]===leftBrackets[leftBrackets.length - 1]){
                    leftBrackets.pop();
                }else{
                    res = "NO";
                }
            }
        }
        if(leftBrackets.length>0){
            res = "NO";
        }
        console.log(res)
    }

}
