function htmlTable(arr) {
    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let html="<table>\n";
    for(let row of arr){
        let obj = JSON.parse(row);
        html+="\t<tr>\n";
        for (let key in obj) {
            html+=`		<td>${htmlEscape(obj[key].toString())}</td>\n`;
        }
        html+="\t<tr>\n";
    }

    html+="</table>\n";

    console.log(html)
}
