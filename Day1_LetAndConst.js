'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
const PI=Math.PI;
function main(){
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let x=readLine(); 
    // Print the area of the circle:
    console.log(PI*x*x);
    // Print the perimeter of the circle:
    console.log(2*PI*x);
    try {    