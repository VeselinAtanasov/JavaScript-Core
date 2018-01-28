
function diagonalAttack(input){
    "use strict";
    //Parse the input to matrix:
    let matrix=[];
    for(let i=0; i<input.length;i++){
        let array=input[i].split(" ").map(Number);
        matrix.push(array);
    }

    //check diagonals:
    let firstSum=0;
    let secondSum=0;

    for(let i=0; i<matrix.length;i++){
        firstSum+=matrix[i][i];
        secondSum+=matrix[i][matrix.length-1-i];
    }

    if(firstSum!==secondSum){
        return  matrix.map(arr => arr.join(" ")).join("\n");
    }else {

        //How to create matrix in js
        let result=[];
        for(let row=0 ;row<matrix.length ; row++){
            result[row]=[];  //each element of the result arr is also arr;
            for(let col=0; col<matrix[row].length;col++){
                result[row][col]=firstSum;
            }
        }

        for(let i=0; i<matrix.length;i++){
            result[i][i]=matrix[i][i];
            result[i][matrix.length-1-i]=matrix[i][matrix.length-1-i];
        }

        return  result.map(arr => arr.join(" ")).join("\n");
    }

}

console.log(diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));