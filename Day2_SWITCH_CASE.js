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

function getLetter(s) {
    let letter;
    // Write your code here
    var n=0;
    s=s[0]
    if(s=='a'||s=='e'||s=='i'||s=='o'||s=='u')
    n=1;
    else if(s=='b'||s=='c'||s=='d'||s=='f'||s=='g')
    n=2;
    else if(s=='h'||s=='j'||s=='k'||s=='l'||s=='m')
    n=3;
    else
    n=4;
    
    switch(n){
        case 1:
        return "A";
        break;
        
        case 2:
        return "B";
        break;
        
        case 3:
        return "C";
        break;
        
        case 4:
        return "D";
        break;
        
        default:
        return "Wrong";
    }
    
    return letter;
}

