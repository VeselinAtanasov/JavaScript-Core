function fromJSONToTable(str) {
    "use strict";
    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    }

    let parsedStr = JSON.parse(str);
    let html = "<table>\n";
    let headings = Object.keys(parsedStr[0]);

    html += "   <tr>";
    for (let key of headings) {
        html += `<th>${key}</th>`
    }
    html += "</tr>\n";

    for (let obj of parsedStr) {
        html += `   <tr>`;
        for (let prop of Object.values(obj)) {
            html += `<td>${htmlEscape(prop.toString())}</td>`
        }
        html += `</tr>\n`
    }

    html += "</table>\n";
    console.log(html)
}

fromJSONToTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
);