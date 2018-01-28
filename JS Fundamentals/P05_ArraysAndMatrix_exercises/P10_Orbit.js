function orbit(arr) {
    "use strict";
    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];
    let counter = 1;
    let matrix = [];
    for (let row = 0; row < width; row++) {
        matrix[row] = [];
        for (let col = 0; col < height; col++) {
            matrix[row][col] = 0;
        }
    }

    matrix[x][y] = 1;

    for (let i = 0; i < matrix.length - 1 - x; i++) {
        counter++;
        for (let row = 1 + i; row < matrix.length; row++) {
            let index = row;
            //  for (let col = 1; col < matrix[row].length; col++) {
            if (x - row >= 0 && x - row < matrix.length) {
                matrix[x - row][y] = counter;

            }

            if (x + row < matrix.length) {
                matrix[x + row][y] = counter;

            }

            if (x + row < matrix.length) {
                matrix[x + row][y] = counter;

            }

            if (y - row >= 0 && y - row < matrix[row].length) {
                matrix[x][y - row] = counter;

            }

            if (y + row >= 0 && y + row < matrix[row].length) {
                matrix[x][y + row] = counter;

            }

            //diagonals:

            if (x - row >= 0 && x - row < matrix.length && y - row >= 0 && y - row < matrix[row].length ) {
                matrix[x - row][y-row] = counter;

            }

            if (x + row < matrix.length && y- row >= 0 && y -row < matrix[row].length) {
                matrix[x + row][y-row] = counter;

            }

            if (x - row >= 0 && x - row < matrix.length && y + row >= 0 && y + row < matrix[row].length ) {
                matrix[x - row][y+row] = counter;

            }

            if (x + row < matrix.length && y+ row >= 0 && y +row < matrix[row].length) {
                matrix[x + row][y+row] = counter;

            }

            //  console.log(matrix.map(arr => arr.join(" ")).join("\n"));
          //  break;
        }
        //  }

    }




    return matrix.map(arr => arr.join(" ")).join("\n");

}
//orbit([5, 5, 2, 2])

console.log(orbit([3, 3, 2, 2]));
//console.log(orbit([4, 4, 0, 0]));