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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    //console.log(ransom);
    //console.log(magazine);
    //Strategy: 
    //Put every word from the magazine into a hash, mapping them to the number of times they occur
    //Iterate through the ransom, if the word is in the hash, decrement the count 
    //If the count is 0 or if the word isn't in the hash, return false 
    //If we exit this process, return true 
    
    //This takes O(nm)
    var hash = {};
    for(var i = 0; i<magazine.length; i++){
        var word = magazine[i];
        if (hash[word]){
            var count = hash[word];
            count += 1;
            hash[word] = count;
        }else{
            hash[word] = 1;
        }
    }
    var res = "Yes";
    for(var i = 0; i<ransom.length; i++){
        var word = ransom[i];
        if (hash[word]){
            if (hash[word] <= 0){
                res = "No";
            }
            var count = hash[word];
            count -= 1;
            hash[word] = count;
        }else{
            res = "No";
        }
    }
    console.log(res);
    
}