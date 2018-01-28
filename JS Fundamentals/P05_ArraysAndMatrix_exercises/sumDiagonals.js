
function sumDiagonalsWithFors(matrix){
    "use strict";
    let first=0;
    let second=0;

    for(let row=0; row<matrix.length ; row++){
        for(let col=0; col<matrix[row].length; col++){
            if(row===col){
                first+=matrix[row][row];
                second+=matrix[row][matrix.length-1-row];
            }
        }
    }

    console.log(first+" "+second);
}

