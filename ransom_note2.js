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

function ransomNote(s1, s2){
	let hash = {};
	s1.forEach(el => {
		if(hash[el]){
			hash[el] += 1
		}else{
	       hash[el] = 1
        }	
	})
	let possible = true; 
	s2.forEach(el => {
		if(hash[el]){
			hash[el] -= 1; 
			if(hash[el] < 0){
				possible = false
			}
		}else{
			possible = false
		}
	})
	if(possible){
		console.log("Yes")
	}else{
		console.log("No")
	}
}


function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    ransomNote(magazine, ransom);
}
