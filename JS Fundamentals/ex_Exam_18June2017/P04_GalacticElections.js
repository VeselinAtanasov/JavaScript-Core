function election(arr) {
    let map= new Map();

    for (let key of arr) {
        if(!map.has(key.system)){
            map.set(key.system, new Map())
        }
        if(!map.get(key.system).has(key.candidate)){
            map.get(key.system).set(key.candidate,0);
        }

        map.get(key.system).set(key.candidate,map.get(key.system).get(key.candidate) + Number(key.votes));
    }

    let resultMap= new Map();



    function sortKeys(vote1, vote2) {
        return vote2-vote1
    }

    for (let [system,values] of map) {
        resultMap.set(system, new Map());
        let sorted=Array.from(values.keys()).sort((a,b) => sortKeys(values.get(a),values.get(b)));
        let allVotes=0;
        for (let key of sorted) {
            allVotes+= map.get(system).get(key);
        }
        resultMap.get(system).set(sorted[0],allVotes);
    }

    let finalMap=new Map();
    let total=0;
    for (let [system,values] of resultMap) {
        for (let [name,votes] of values) {
            if(!finalMap.has(name)){
                finalMap.set(name,0)
            }
            finalMap.set(name,finalMap.get(name)+votes)
            total+=votes;
        }
    }
            let test=""
    let getHeighestKey=Array.from(finalMap.keys()).sort((a,b) => finalMap.get(b) -finalMap.get(a))[0];
    let runnerUp=Array.from(finalMap.keys()).sort((a,b) => finalMap.get(b) -finalMap.get(a))[1];
    if(finalMap.size>1 && runnerUp!==undefined && finalMap.get(getHeighestKey)>(total/2)){

        console.log(`${getHeighestKey} wins with ${finalMap.get(getHeighestKey)} votes`)
        console.log(`Runner up: ${runnerUp}`)

        let ttt= new Map();
        for (let [system,values] of resultMap) {
            for (let [name,votes] of values) {
                if(name!==getHeighestKey ){
                    ttt.set(system,votes);
                }
            }
        }


        let sorting=Array.from(ttt.keys()).sort((a,b)=> ttt.get(b)-ttt.get(a))
        for (let key of sorting) {
            console.log(`${key}: ${ttt.get(key)}`)
        }

        return;
    }

    if(finalMap.size>1 && runnerUp!==undefined && finalMap.get(getHeighestKey)<=(total/2)){

        let highestScore=Math.floor(100*finalMap.get(getHeighestKey)/total);
        let secondScore=Math.floor(100*finalMap.get(runnerUp)/total);
       console.log(`Runoff between ${getHeighestKey} with ${highestScore}% and ${runnerUp} with ${secondScore}%`);

        return;
    }

    if(getHeighestKey!==runnerUp){

        console.log(`${getHeighestKey} wins with ${finalMap.get(getHeighestKey)} votes`)
        console.log(`${getHeighestKey} wins unopposed!`)
        /*finalMap.get(getHeighestKey)

         <winner name> wins unopposed!
         */
    }

}

election(  [ { system: 'Theta',     candidate: 'Kitler', votes: 50 },
        { system: 'Theta',     candidate: 'Space Cow',     votes: 45 },
        { system: 'Theta',   candidate: 'Huge Manatee',     votes: 45 },
        { system: 'Theta',   candidate: 'Flying Shrimp',     votes: 45 },
        { system: 'Tau',   candidate: 'Kitler', votes: 50 },
        { system: 'Tau', candidate: 'Space Cow', votes: 60 },
        { system: 'Sigma', candidate: 'Kitler',       votes: 50 },
        { system: 'Sigma', candidate: 'Huge Manatee',       votes: 60 },
        { system: 'Omicron', candidate: 'Kitler',       votes: 50 }
    ]

)