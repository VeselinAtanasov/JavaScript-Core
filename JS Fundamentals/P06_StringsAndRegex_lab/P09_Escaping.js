function escaping(arr) {

    let html = "<ul>\n";
    for (let key in arr) {
        html += "  <li>";
        for (let i = 0; i < arr[key].length; i++) {
            switch (arr[key][i]) {
                case ">" : html+="&gt;";
                    break;
                case"<" :html+="&lt;";
                    break;
                case "&": html+="&amp;";
                    break;
                case "\"": html+="&quot;";
                    break;
                default: html+=arr[key][i];
            }
        }
        html+="</li>\n"
    }
    html += "</ul>\n";

    return html;
}