
function market(arr) {
    let subscribesList={};
    let subscriberFor={};

    for (let command of arr) {
        let commandTokens=command.split("-");
        if(commandTokens.length===1){
            let subscriber=commandTokens[0];
            if(!subscribesList.hasOwnProperty(subscriber)){
                subscribesList[subscriber]=new Set();
                subscriberFor[subscriber] = new Set();
            }
        }else{
            let firstPerson=commandTokens[0];
            let secondPerson=commandTokens[1];
            if(subscribesList.hasOwnProperty(firstPerson) && subscribesList.hasOwnProperty(secondPerson) && firstPerson!==secondPerson){
                        subscribesList[secondPerson].add(firstPerson);
                        subscriberFor[firstPerson].add(secondPerson);
            }
        }
    }

    function sorted(key1, key2) {
        if(Array.from(subscribesList[key1]).length === Array.from(subscribesList[key2]).length){
            return Array.from(subscriberFor[key2]).length - Array.from(subscriberFor[key1]).length
        }
        return Array.from(subscribesList[key2]).length - Array.from(subscribesList[key1]).length
    }

    let mostInteresting=Object.keys(subscribesList).sort((key1,key2) =>sorted(key1,key2)) 
    for (let subscriber of mostInteresting) {
        console.log(subscriber);
        let index=0;
            Array.from(subscribesList[subscriber]).forEach( a=> console.log(++index +". "+a))
        break;
    }
}

market([
    'A',
    'B',
    'A-B',
    'C',
    'C-B',
    'D',
    'D-B',
    'E',
    'E-B',
    'A-C',
    'D-C',
    'E-C'

])