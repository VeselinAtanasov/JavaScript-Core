function orbit(arr) {

    let width = arr[0]; //width
    let height = arr[1]; //height
    let x = arr[2]; //x
    let y = arr[3]; //y

    let matrix = [];
    for(let i=0; i<width; i++) {
        matrix.push([]);
    }

    for(let row = 0; row< width; row++) {
        for(let col=0; col<height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col -  y)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}