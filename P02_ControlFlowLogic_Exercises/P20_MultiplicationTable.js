function multiplicationTable(n) {
    "use strict";
    let html = "<table border=\"1\">\n";
    html+="  <tr><th>x</th>";
    for (let i = 1; i <= n; i++) {
    html+=`<th>${i}</th>`;
    }
    html+="</tr>\n";

    for(let i=1 ;i<=n;i++){
        html+=`  <tr><th>${i}</th>`;
        for(let j=1; j<=n;j++){
        html+=`<td>${i*j}</td>`
        }
        html+="</tr>\n";
    }

    html += "</table>\n";

    return html;
}

console.log(multiplicationTable(5));
