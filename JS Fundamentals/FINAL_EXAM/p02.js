function airPollution(input, arr) {
    let matrix = [];
    for (let str of input) {
        let tokens = str.split(" ").filter(x => x !== "").map(Number);
        matrix.push(tokens);
    }

    function breez(index) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === index) {
                    let value = matrix[row][col] - 15;
                    if (value >= 0) {
                        matrix[row][col] -= 15
                    }
                }
            }

        }
    }

    function gale(index) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col === index) {
                    let value = matrix[row][col] - 20;
                    if (value >= 0) {
                        matrix[row][col] -= 20
                    }
                }
            }

        }
    }

    function smog(number) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] += number;
            }
        }
    }


    for (let s of arr) {
        let tokens = s.split(" ").filter(x => x !== "");
        let command = tokens[0];
        let num = Number(tokens[1]);
        switch (tokens[0]) {
            case "breeze":
                breez(num);
                break;
            case "gale":
                gale(num);
                break;
            case "smog":
                smog(num);
                break;
            default :
                break;

        }
    }
    let polluters=[]

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col]>=50){
                 polluters.push(`[${row}-${col}]`);
            }
        }
    }
    if(polluters.length!==0){
        console.log(`Polluted areas: ${polluters.join(", ")}`)
    }else{
        console.log("No polluted areas");
    }

}


airPollution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]


)