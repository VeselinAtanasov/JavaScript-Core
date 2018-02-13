
function build(arr){

    let miles=arr.map(Number);
    let result=[];
    while(true){
       let doesElementExists=miles.filter(x => x<30);
        if(doesElementExists.length===0){
            break;
        }
        doesElementExists= doesElementExists.map(x =>x+1);
        let corrected=doesElementExists.length*195;
        result.push(corrected);
        miles=doesElementExists;
    }

    console.log(result.join(", "));
    console.log(`${result.reduce((a,b) => a+b)*1900} pesos`);
}

build([17]);