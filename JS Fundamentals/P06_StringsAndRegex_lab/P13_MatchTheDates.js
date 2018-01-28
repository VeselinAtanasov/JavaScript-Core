
function matchDates(arr){
    "use strict";
    let pattern=/\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    for (let word of arr) {
        let match=pattern.exec(word);
        while(match){
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
            match=pattern.exec(word);
        }
    }
}

matchDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.'
]);