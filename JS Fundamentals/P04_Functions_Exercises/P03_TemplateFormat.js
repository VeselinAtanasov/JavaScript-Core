function formatQuiz(arr) {
    "use strict";

    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<quiz>\n";
    for (let i = 0; i < arr.length; i += 2) {
        let question = arr[i];
        let answer = arr[i + 1];
        xml += "  <question>\n";
        xml += `    ${question}\n`;
        xml += `  </question>\n`;
        xml += `  <answer>\n`;
        xml += `    ${answer}\n`;
        xml += `  </answer>\n`;
    }

    xml += "</quiz>\n";

    return xml;
}

console.log(formatQuiz(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
));