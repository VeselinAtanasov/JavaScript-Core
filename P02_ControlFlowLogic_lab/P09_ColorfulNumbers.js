
function colors(n){
    "use strict";
    let html="";
    html+="<ul>\n";
    for(let i = 1; i<= n; i++){
        html+=`  <li><span style=\'color:${i%2!==0 ? "green" : "blue"}\'>${i}</span></li>\n`
    }

    html+="</ul>\n";

    return html;

}

console.log(colors(10));