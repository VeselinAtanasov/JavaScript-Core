function magicMatgrix(matrix){
    let checker =true;
    let sum=matrix[0].reduce((a,b)=>a+b);;


    for (let row = 0; row < matrix.length; row++) {
        let currentSum=matrix[row].reduce((a,b)=>a+b);
        if(currentSum!==sum){
            checker=false;
        }
        let currSum2=0;
        for (let col = 0; col < matrix.length; col++) {
            currSum2+=matrix[col][row]
        }
        if(sum!==currSum2){
            checker=false;
        }
    }
    console.log(checker)

}