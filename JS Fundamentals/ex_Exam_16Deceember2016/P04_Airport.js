function statistics(arr) {
    'use strict';
    arr=arr.filter(x=>x!=="");
    let airportStat = {};
    let planesInventory={};

    function hasLanded(planID) {
        let checker=false;
       let arrAllValues= Object.values(airportStat);
        for (let element of arrAllValues) {
            for (let key in element) {
                if(key===planID){
                    if(element[planID]['status']==='land'){
                        checker=true;
                        break;
                    }
                }
            }
            if(checker){
                break;
            }
        }
        return checker;
    }

    function doesThePlainExist(planID) {
        let doesExists=false;
        let arrAllValues= Object.values(airportStat);
        for (let element of arrAllValues) {
            if(element.hasOwnProperty(planID)){
                doesExists=true;
            }
        }
        return true;
    }

    function removePlan(town, planID) {
        for (let city in airportStat) {
            if(city===town){
                continue;
            }
            if(airportStat[city].hasOwnProperty(planID)){
               // delete airportStat[city][planID];
                  airportStat[city][planID]['status']='none';
            }
        }
    }

    for (let str of arr) {
        let tokens = str.split(" ").filter(x => x !== "");
        let planID = tokens[0];
        let town = tokens[1];
        let passangers = Number(tokens[2]);
        let action = tokens[3];

        if(!doesThePlainExist(planID)){
            if (!airportStat.hasOwnProperty(town)) {
                airportStat[town] = {};
                airportStat[town]['arrivals'] = 0;
                airportStat[town]['departures'] = 0;
                airportStat[town][planID] = {};
                airportStat[town][planID]['status'] = "";
            }
            if(!airportStat[town].hasOwnProperty(planID)){
                airportStat[town][planID]={};
                airportStat[town][planID]['status']="";

            }
            if(action==='depart'){
                removePlan(town,planID)
            }
            airportStat[town][planID]['status']=action;
            if(action==='land'){
                airportStat[town]['arrivals']+=passangers;
            }else{
                airportStat[town]['departures']+=passangers;
            }
        }else{
            if(action==='depart' && !hasLanded(planID)){
                continue;
            }

            if(action==='land' && hasLanded(planID)){
                continue;
            }

            if (!airportStat.hasOwnProperty(town)) {
                airportStat[town] = {};
                airportStat[town]['arrivals'] = 0;
                airportStat[town]['departures'] = 0;
                airportStat[town][planID] = {};
                airportStat[town][planID]['status'] = "";
            }
            if(!airportStat[town].hasOwnProperty(planID)){
                airportStat[town][planID]={};
                airportStat[town][planID]['status']="";

            }
            if(action==='depart'){
                removePlan(town,planID)
            }
            airportStat[town][planID]['status']=action;
            if(action==='land'){
                airportStat[town]['arrivals']+=passangers;
            }else{
                airportStat[town]['departures']+=passangers;
            }
        }


    }

    let filteredData=[];
    let landedPlanesId=Object.values(airportStat);
    for(let el of landedPlanesId){
        for (let key in el) {
            if(el[key].hasOwnProperty("status")){
                if(el[key]['status']==='land'){
                    filteredData.push(key)
                }
            }
        }
    }
    console.log("Planes left:");
    filteredData.sort((a,b) => a.localeCompare(b)).forEach(a=>console.log("- "+a));

    function sortKeys(key1, key2) {
        if(airportStat[key2]['arrivals']===airportStat[key1]['arrivals']){
            return key1.localeCompare(key2);
        }
        return airportStat[key2]['arrivals'] - airportStat[key1]['arrivals']
    }

    let sortTowns=Object.keys(airportStat).sort((key1,key2) => sortKeys(key1,key2));

    for (let key of sortTowns) {
        console.log(key)
        console.log(`Arrivals: ${airportStat[key]['arrivals']}`);
        console.log(`Departures: ${airportStat[key]['departures']}`);
        let getPlanes=Object.keys(airportStat[key]);

        let allPlanes=[];
        for (let obj of getPlanes) {
            if(airportStat[key][obj].hasOwnProperty("status")){
                allPlanes.push(obj)
            }
        }
        console.log("Planes:");
        let allPanesSorted=allPlanes.sort((a,b) => a.localeCompare(b)).forEach(a => console.log(`-- ${a}`))

    }

}

// statistics([
//     "Boeing474 Madrid 300 land",
//     "AirForceOne WashingtonDC 178 land",
//     "Airbus London 265 depart",
//     "ATR72 WashingtonDC 272 land",
//     "ATR72 Madrid 135 depart"
// ]);


statistics([
    'RTA72 London -10 land',
    'RTA#72 Brussels -110 depart',
    'RTA7!2 Warshaw 350 land',
    'RTA72 Riga -201 depart',
    'rta72 riga -13 land',
    'rta Riga -200 depart',

])
