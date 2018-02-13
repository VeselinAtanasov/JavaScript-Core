function extractLinks(str){
    let namePattern= /\*[A-Z]{1}[a-zA-Z]*(?=\s|\t|$)/g;
    let phonePattern=/\+[0-9-]{10}(?=\s|\t|$)/g;
    let idPattern=/![A-Za-z0-9]+(?=\s|\t|$)/g;
    let basePattern=/_[A-Za-z0-9]+(?=\s|\t|$)/g;

    let pattArr=[namePattern,phonePattern,idPattern,basePattern];
    function replacer(fullmatch) {
        return "|".repeat(fullmatch.length);
    }

    for(let string of str){
        for (let reg of pattArr) {
            string = string.replace(reg,replacer);
        }
        console.log(string);
    }
}