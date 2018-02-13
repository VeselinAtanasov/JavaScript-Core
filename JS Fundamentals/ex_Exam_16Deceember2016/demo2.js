let ob = {
    Madrid: {
        "arrivals": 0,
        "departures": 0,
        "AirForceOne": {
            "status": ""
        },
        "ATR72": {
            "status": 'LANDING'
        }
    }
};

let val=Object.values(ob);
//console.log(val)
checker=false;
test="ATR72"
for (let arr of val) {
    for(let t in arr){

        if(t===test){
            if(arr[t]['status']==="LANDING"){
                console.log("YESSSSS")
            }
        }
    }

}

//console.log(checker)