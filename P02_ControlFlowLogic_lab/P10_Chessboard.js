function chessBoard(size) {
    let html = "<div class=\"chessboard\">\n";

    for(let i=0; i<size; i++){
        html+="  <div>\n";
        for(let j=0; j<size ;j++){
            let color = (i + j) % 2 === 0 ? "black" : "white";
            html+=`    <span class=\"${color}\"></span>\n`
        }
        html+="  </div>\n";
    }

    html+="</div>\n";
    return html;
}

console.log(chessBoard(3));