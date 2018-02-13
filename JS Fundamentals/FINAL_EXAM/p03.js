function surveyParser(str){
    "use strict";
    let firstPatt=/<svg>(.|\n)+<\/svg>/
    let matches=firstPatt.exec(str);
    if(matches===null){
        console.log("No survey found");
        return;
    }
    let messageMach=/<svg><cat><text>(.|\n)*?\[((.|\n)*?)](.|\n)*?<\/text><\/cat> ?<cat>((.|\n)*?)<\/cat><\/svg>/

    let matchText=messageMach.exec(str);
    if(matchText===null){
        console.log("Invalid format");
        return
    }

    console.log(matchText[5])

    let finalMessage=matchText[2];
    let allValues=matchText[5];

    let valuePatt=/<g><val>([1-9]0?)<\/val>([0-9]+)<\/g>/gmi

    let valuesMatch=valuePatt.exec(allValues);
    if(valuesMatch===null){
        console.log("Invalid format");
        return
    }

    let sumRaiting=0;
    let sumValues=0;
    while (valuesMatch){

        let  tempValue=Number(valuesMatch[1]);
        let   tempRaiting=(Number(valuesMatch[2]));
console.log(tempRaiting)
        if(valuesMatch[2].length!==1 && valuesMatch[2][0]=='0'){
            continue;
        }
        sumRaiting+=tempValue*tempRaiting;
        sumValues+=tempRaiting
        valuesMatch=valuePatt.exec(allValues);
    }

    let result=sumRaiting/sumValues;

    if(sumRaiting===0 && sumValues===0){
        console.log("Invalid format");
        return
    }

    console.log(`${finalMessage}: ${Math.round(result * 100) / 100}`)


}
//surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General] dsd </text></cat> <cat><g><val>10</val>54540</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat><cat></cat></svg><p>Some more random text</p>")
surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? <g></g> [Food - General] dsd </text></cat> <cat><g><val>10</val>54540</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>012</g></cat><cat><g><val>5</val>7</g></cat></svg><p>Some more random text</p>")
//surveyParser("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>")