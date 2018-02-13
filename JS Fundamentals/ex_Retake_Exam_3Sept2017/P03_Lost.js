function lostInMountains(word, text) {
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    let messagePattern = new RegExp(escapeRegExp(word) + "((.|\s)*?)"+escapeRegExp(word), "gm");
    let northPatt = /(east|north)((.|\s*)*?)([0-9]{2})((.|\s)*?),((.|\s)*?)([0-9]{6})/gmi;// (.*?) or (\s\t\n*?)


    let northsResult = northPatt.exec(text);
    let resultNorth = "";
    let eastNorth = "";

    while (northsResult) {
        if(northsResult[1].toLowerCase()==='north'){
            resultNorth = northsResult[4] + "." + northsResult[9];
        }else{
            eastNorth=northsResult[4] + "." + northsResult[9];
        }

        northsResult = northPatt.exec(text)
    }

    console.log(`${resultNorth} N`);
    console.log(`${eastNorth} E`);



    let matchesMessage = messagePattern.exec(text);
    let result = "";

    while (matchesMessage) {
        result = matchesMessage[1];
        matchesMessage = messagePattern.exec(text)
    }
    console.log("Message: "+result);
}