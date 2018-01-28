
function spiralMatrix(n,m){
    "use strict";
    let counter=1;
    let matrix=[];
    for(let row=0 ; row<n ;row++){
        matrix[row]=[];
        for(let col=0; col<m ;col++){
            matrix[row][col]=0;
        }
    }

    //firstRow:
    for(let row=0 ; row<m ;row++){
        matrix[0][row]=counter++;
    }

    for(let row=0 ; row<m-1 ;row++){
        matrix[row+1][matrix.length-1]=counter++;
    }

    for(let row=0 ; row<m-1 ;row++){
        matrix[row+1][matrix.length-1]=counter++;
    }



    return matrix.map(arr => arr.join(" ")).join("\n");
}


console.log(spiralMatrix(5, 5));

/*
1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
*/