
function extractText(text) {
    let result=[];

    let startIndex=text.indexOf("(");

    while (startIndex>-1){
        let endIndex=text.indexOf(")",startIndex);
        if(endIndex===-1){
            break;
        }
        let wordToAdd=text.substring(startIndex+1,endIndex);
        result.push(wordToAdd);
        startIndex=text.indexOf("(",endIndex+1);
    }

    return result.join(", ")
}

console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));