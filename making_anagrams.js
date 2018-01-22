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
    var a = readLine();
    var b = readLine();
    let a_hash = {};
    let b_hash = {};
    for(var i = 0; i<a.length; i++){
        if(a_hash[a[i]]){
            a_hash[a[i]] += 1; 
        }else{
            a_hash[a[i]] = 1;
        }
    }
    
    for(var i = 0; i<b.length; i++){
        if(b_hash[b[i]]){
            b_hash[b[i]] += 1; 
        }else{
            b_hash[b[i]] = 1;
        }
    }
    
    let num_deletions = 0;
    let seen = {}
    Object.keys(a_hash).forEach((key) => {
        if (b_hash[key]){
            num_deletions += Math.abs(b_hash[key] - a_hash[key])
        }else{
            num_deletions += a_hash[key];
        }
        seen[key] = true;
    })
    Object.keys(b_hash).forEach((key) => {
        if (a_hash[key] && !seen[key]){
            num_deletions += Math.abs(b_hash[key] - a_hash[key])
        }else{
            if (!seen[key]){
                num_deletions += b_hash[key];    
            }
            
        }
    })
    console.log(num_deletions);
    return num_deletions
}