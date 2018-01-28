function diagonalSum(input){
    let matrix=[];
    for(let i=0;i<input.length;i++){
        matrix[i]=[];
        let arr =input[i].split(" ");
        for(let j=0;j<arr.length;j++){
            matrix[i][j]=arr[j];
        }
    }

    let mainSum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += Number(matrix[row][row]);
        secondarySum += Number(matrix[row][matrix.length-row-1]);
    }

    let result=[];

    for(let row=0;row<matrix.length;row++){
        result[row]=[];
        for(let col=0;col<matrix[row].length;col++){
            result[row][col]=mainSum;
        }
    }

    for (let row = 0; row < result.length; row++) {
        result[row][row]=matrix[row][row];
        result[row][result.length-row-1]= matrix[row][matrix.length-row-1]
    }


    if(mainSum!==secondarySum){
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }else {
        console.log(result.map(row => row.join(' ')).join('\n'));
    }

}