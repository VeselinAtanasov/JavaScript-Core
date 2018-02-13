
function stone(arr){
    "use strict";
    let numLinesDecodedM=arr[0].split(/\s+/g).filter(x => x!=="").map(Number);
    let templateMatrix=[];
    let messageMatrix=[];
    let resultMatrix=[];

    function fillResultMatrix() {
        for (let i = 0; i < messageMatrix.length; i++) {
            resultMatrix[i]=[];
            for (let j = 0; j < messageMatrix[i].length; j++) {
                resultMatrix[i][j]="1";
            }
        }
    }

    for (let i = 1; i <=numLinesDecodedM; i++) {
        let temp=arr[i].split(/\s+/g).filter(x=>x!=="").map(Number);
        templateMatrix.push(temp);
    }
    for (let j = numLinesDecodedM[0]+1; j <arr.length; j++) {
        let temp=arr[j].split(/\s+/g).filter(x=>x!=="").map(Number);
        messageMatrix.push(temp);
    }
    fillResultMatrix();

    let messageRow=0;
    let messageCal=0;
    let moveDown=false;
    let ended=false;
    let stop=false;
    while (true){
        if(stop){
            break;
        }
        for (let row = 0; row < templateMatrix.length; row++) {
            for (let col = 0; col < templateMatrix[row].length; col++) {
                if(messageRow+row<messageMatrix.length && messageCal+col<messageMatrix[0].length){
                   resultMatrix[messageRow+row][messageCal+col] =messageMatrix[messageRow+row][messageCal+col]+templateMatrix[row][col]
                }else{
                    moveDown=true;
                }

                if(messageRow+row>=messageMatrix.length){
                   ended=true;
                }
            }
        }
        if(moveDown===false){
            messageCal+=templateMatrix[0].length;
        }else{
            if(ended){
                if(messageCal>messageMatrix[0].length){
                    stop=true;
                }
                messageCal+=templateMatrix[0].length
            }else{
                messageRow+=templateMatrix.length
                messageCal=0;
                moveDown=false;
            }
        }

    }

    let obj={
        0: " ",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y",
        26: "Z",

    };

    let finalResult=messageMatrix;

    function getLetter(num) {
        let res=num%27;
        return obj[res];
    }

    for (let row = 0; row < resultMatrix.length; row++) {
        for (let col = 0; col < resultMatrix[row].length; col++) {
            finalResult[row][col]=getLetter(resultMatrix[row][col])
        }

    }
    console.log(finalResult.map(a => a.join("")).join("").trim())

}

stone([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]

)