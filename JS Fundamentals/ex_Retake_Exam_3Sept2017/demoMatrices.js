spiralMatrix = (rows, cols) => {
    let matrix = fillZeros(rows, cols)
    fillMatrix(matrix, 0, 0, 1)
    printMatrix(matrix)

    function fillMatrix(matrix, currentRow, currentCol, counter) {
        if (matrix[currentRow][currentCol] !== 0) {
            return matrix
        }

        // fill Top Row rightwards
        for (let col = currentCol; col < rows - currentRow; col++) {
            matrix[currentRow][col] = counter++
        }

        // fill Right colum downwards
        for (let row = 1 + currentRow; row < cols - currentCol; row++) {
            matrix[row][rows - 1 - currentRow] = counter++
        }

        // fill Bottom leftwards
        for (let col = cols - 2 - currentCol; col >= currentCol; col--) {
            matrix[rows - 1 - currentRow][col] = counter++
        }

        // fill Left column upwards
        for (let row = rows - 2 - currentRow; row > currentRow; row--) {
            matrix[row][currentCol] = counter++
        }

        fillMatrix(matrix, ++currentRow, ++currentCol, counter)
    }
    function printMatrix(matrix) {
        console.log(matrix.map(el => el.join(" ")).join('\n'))
    }
    function fillZeros(rows, cols) {
        let matrix = []
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }
}

spiralMatrix(4, 4);

function orbit(arr) {
    let [rows, cols, targetRow, targetCol] = arr
    let matrix = fillZeros(rows, cols)

    let num = 1
    matrix[targetRow][targetCol] = num
    let waveCount = 1

    while (!isFilled(matrix)) {
        num++

        let topX = Math.max(0, targetRow - waveCount)
        let topY = Math.max(0, targetCol - waveCount)
        let bottomX = Math.min(matrix.length - 1, targetRow + waveCount)
        let bottomY = Math.min(matrix[0].length - 1, targetCol + waveCount)

        for (let row = topX; row <= bottomX; row++) {
            for (let col = topY; col <= bottomY; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num
                }
            }
        }
        waveCount++
    }

    printMatrix(matrix)

    function isFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] === 0) {
                    return false
                }
            }
        }

        return true
    }
    function fillZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }
    function printMatrix(matrix) {
        console.log(matrix.map(el => el.join(" ")).join('\n'))
    }
}
