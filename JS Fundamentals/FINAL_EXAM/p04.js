function gameOfEpicness(arr, matrix) {
    "use strict";
    let system = {};

    for (let obj of arr) {
        if (!system.hasOwnProperty(obj['kingdom'])) {
            system[obj['kingdom']] = {};
        }
        if (!system[obj['kingdom']].hasOwnProperty(obj['general'])) {
            system[obj['kingdom']][obj['general']] = {};
            system[obj['kingdom']][obj['general']]['army'] = 0;
            system[obj['kingdom']][obj['general']]['wins'] = 0;
            system[obj['kingdom']][obj['general']]['loses'] = 0;
        }
        system[obj['kingdom']][obj['general']]['army'] += obj['army']
    }

    for (let a of matrix) {
        let firstKingdom = a[0];
        let firstGeneral = a[1];
        let secondKingdom = a[2];
        let secondGeneral = a[3];
        if (firstKingdom === secondKingdom) {
            continue;
        }

        let firstPlayerArmy = system[firstKingdom][firstGeneral]['army'];
        let secondPlayerArmy = system[secondKingdom][secondGeneral]['army'];
        if (firstPlayerArmy === secondPlayerArmy) {
            continue;
        }
        if (firstPlayerArmy > secondPlayerArmy) {
            firstPlayerArmy = Math.floor(firstPlayerArmy + firstPlayerArmy * 0.1);
            secondPlayerArmy = Math.floor(secondPlayerArmy - secondPlayerArmy * 0.1);
            system[firstKingdom][firstGeneral]['wins']++;
            system[secondKingdom][secondGeneral]['loses']++;
        } else {
            firstPlayerArmy = Math.floor(firstPlayerArmy - firstPlayerArmy * 0.1);
            secondPlayerArmy = Math.floor(secondPlayerArmy + secondPlayerArmy * 0.1);
            system[firstKingdom][firstGeneral]['loses']++;
            system[secondKingdom][secondGeneral]['wins']++;
        }
        system[firstKingdom][firstGeneral]['army'] = firstPlayerArmy;
        system[secondKingdom][secondGeneral]['army'] = secondPlayerArmy;
    }

    function sortingFunc(key1, key2) {
        let firtKeyGeneralsWins1=Object.keys(system[key1]) //reduce((a,b) => system[key1][a]['wins']+system[key1][b]['wins'])
      let  firtKeyGeneralsWins=0
        for (let obj of firtKeyGeneralsWins1) {
            firtKeyGeneralsWins+=system[key1][obj]['wins']
        }

        let secondKeyGeneralsWin1=Object.keys(system[key2]) //.reduce((a,b) => system[key2][a]['wins']+system[key2][b]['wins']);
        let secondKeyGeneralsWin=0;
        for (let obj of secondKeyGeneralsWin1) {
            secondKeyGeneralsWin+=system[key2][obj]['wins']
        }

        if(firtKeyGeneralsWins===secondKeyGeneralsWin){
            let firtKeyGeneralsLoses1=Object.keys(system[key1]) //.reduce((a,b) => system[key1][a]['loses']+system[key1][b]['loses']);
            let firtKeyGeneralsLoses=0;
            for (let obj of firtKeyGeneralsLoses1) {
                firtKeyGeneralsLoses+=system[key1][obj]['loses']
            }

            let secondKeyGeneralsLoses1=Object.keys(system[key2]) //.reduce((a,b) => system[key2][a]['loses']+system[key2][b]['loses']);
            let secondKeyGeneralsLoses=0;
            for (let obj of secondKeyGeneralsLoses1) {
                secondKeyGeneralsLoses+=system[key2][obj]['loses']
            }

            if(firtKeyGeneralsLoses===secondKeyGeneralsLoses){
                return key1.localeCompare(key2);
            }
            return firtKeyGeneralsLoses-secondKeyGeneralsLoses;
        }
        return secondKeyGeneralsWin- firtKeyGeneralsWins
    }



    let testtt=""
    let sortKingdom=Object.keys(system).sort((key1,key2) => sortingFunc(key1,key2))



    console.log(`Winner: ${sortKingdom[0]}`);
    for (let key of sortKingdom) {
        let sortByArmy=Object.keys(system[key]).sort((king1,king2) => system[key][king2]['army']-system[key][king1]['army'])

        for (let k of sortByArmy) {

            console.log(`/\\general: ${k}`);
            console.log(`---army: ${system[key][k]['army']}`);
            console.log(`---wins: ${system[key][k]['wins']}`);
            console.log(`---losses: ${system[key][k]['loses']}`)
        }

        break;
    }

}

gameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]

)

// gameOfEpicness(  [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//     { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//     { kingdom: "Stonegate", general: "Doran", army: 70000 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
//     { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Stonegate", "Ulric", "Stonegate", "Doran"],
//         ["Stonegate", "Doran", "Maiden Way", "Merek"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"],
//         ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ] )
