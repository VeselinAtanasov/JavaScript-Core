function expedition(primaryMatrix, secondaryMatrix, overlayMatrix, startCoordinates) {
    "use strict";
    function fillMatrix(secondaryMatrix) {
        let matrix = [];
        for (let row = 0; row < secondaryMatrix.length; row++) {
            matrix[row] = [];
            for (let col = 0; col < secondaryMatrix[row].length; col++) {
                matrix[row][col] = "X"
            }
        }
        return matrix;
    }


    function printMatrix(tempMatrix) {
        console.log(tempMatrix.map(row => row.join(" ")).join("\n"));
    }

    for (let i = 0; i < overlayMatrix.length; i++) {
        let iteration = overlayMatrix[i];
        let currRow = iteration[0];
        let currCol = iteration[1];
        let tempMatrix =  (secondaryMatrix);

        for (let row = 0; row < secondaryMatrix.length; row++) {
            for (let col = 0; col < secondaryMatrix[row].length; col++) {
                if(currRow + row<primaryMatrix.length && currCol+col<primaryMatrix[0].length){
                    if (secondaryMatrix[row][col] === 1) {
                        if (primaryMatrix[currRow + row][currCol + col] === 1) {
                            primaryMatrix[currRow + row][currCol + col] = 0
                        } else {
                            primaryMatrix[currRow + row][currCol + col] = 1
                        }
                    }
                }
            }

        }
    }

    /**
     * The first part of the task is done => Now we need to find the exit;
     */
    let steps = 1;
    let primaryMatrixRows = primaryMatrix.length;
    let primaryMatrixCols = primaryMatrix[0].length;
    let secondaryMatrixRows = secondaryMatrix.length;
    let secondaryMatrixCols = secondaryMatrix[0].length;
    let currentPosition = [startCoordinates[0], startCoordinates[1]];
    let previousDirection;

    while (true) {
        if (currentPosition[0] + 1 < primaryMatrixRows && primaryMatrix[currentPosition[0] + 1][currentPosition[1]] === 0 && previousDirection !== "up") {
            currentPosition = [currentPosition[0] + 1, currentPosition[1]];
            previousDirection = "down";
        } else if (currentPosition[1] + 1 < primaryMatrixCols && primaryMatrix[currentPosition[0]][currentPosition[1] + 1] === 0 && previousDirection !== "left") {
            currentPosition = [currentPosition[0], currentPosition[1] + 1];
            previousDirection = "right";
        } else if (currentPosition[0] > 0 && primaryMatrix[currentPosition[0] - 1][currentPosition[1]] === 0 && previousDirection !== "down") {
            currentPosition = [currentPosition[0] - 1, currentPosition[1]];
            previousDirection = "up";
        } else if (currentPosition[1] > 0 && primaryMatrix[currentPosition[0]][currentPosition[1] - 1] === 0 && previousDirection !== "right") {
            currentPosition = [currentPosition[0], currentPosition[1] - 1];
            previousDirection = "left";
        } else {
            break;
        }
        steps++;
    }

    console.log(steps);
    definePosition(currentPosition);

    function definePosition(currentPosition) {
        let currentRow = currentPosition[0];
        let currentCol = currentPosition[1];
        if (currentRow === 0) {
            console.log("Top");
        } else if (currentRow === primaryMatrixRows - 1) {
            console.log("Bottom");
        } else if (currentCol === 0) {
            console.log("Left");
        } else if (currentCol === primaryMatrixCols - 1) {
            console.log("Right");
        } else if (currentRow < primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 1");
        } else if (currentRow < primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 2");
        } else if (currentRow >= primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 3");
        } else if (currentRow >= primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 4");
        }
    }
}


expedition(
    [[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [1, 1],
        [2, 3],
        [5, 3]
    ],
    [0, 2]
);