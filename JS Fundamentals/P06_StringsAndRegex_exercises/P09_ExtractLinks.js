function extractLinks(arr){
    let pattern=/(www\.[A-Za-z0-9-]+\.[a-z]+(\.[a-z]+)*)/g;
    let result=[];
    for(let sentence of arr){
        let matches=pattern.exec(sentence);
        while (matches){
            let match=matches[1];
            result.push(match);
            matches=pattern.exec(sentence);
        }
    }
    console.log(result.join('\n'))
}

extractLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'

])