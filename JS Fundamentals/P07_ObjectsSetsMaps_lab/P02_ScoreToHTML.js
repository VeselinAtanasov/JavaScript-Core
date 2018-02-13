function scoreToHTML(str) {
    "use strict";
    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    }

    let parsedArr = JSON.parse(str);
    let html = "<table>\n";
    let objKeys = Object.keys(parsedArr[0]);
    html += "  <tr>"
    for (let i = 0; i < objKeys.length; i++) {
        html += `<th>${objKeys[i]}</th>`
    }
    html += "</tr>\n";

    for (let obj of parsedArr) {
        html += `  <tr>`
        for (let prop of Object.values(obj)) {
            html += `<td>${htmlEscape(prop.toString())}</td>`
        }
        html += `</tr>\n`
    }


    html += "</table>\n";
    console.log(html)
}

scoreToHTML(
    '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');