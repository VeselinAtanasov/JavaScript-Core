
function compareArrays(arr) {
    let result = [];

    for (let record of arr) {
        let temp=JSON.parse(record).map(Number).sort((a,b) => a-b);
        result.push(temp);
    }

    let unique=[];


    function checkArrays(arr1, arr2) {
        if(arr1.length !== arr2.length) {
            return false;
        } else {
            for(let i=0; i<arr1.length; i++) {
                if(arr1[i] !== arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }

    for (let i=0; i<result.length;i++) {
        let first=result[i];
        let another;
        let checker=false;
        for(let j=0 ; j<result.length; j++){
            if(i===j){
                continue;
            }
            if(checkArrays(first,result[j])){
                checker=true;
                another=j;
                break;
            }
        }
        if(another){
            i--;
            result.unshift();
            delete result[another];
            result=result.filter(x=>x!=="");
        }


        if(!checker){
            unique.push(first);
        }
    }


    let sortedArrr=result.sort((a,b) => a.length-b.length);
    for(let a of sortedArrr){
        let print=a.sort((x,y) =>y-x).join(", ");
        console.log('['+print+']')
    }

}

compareArrays(
    [
        '[-3, -2, -1, 0, 1, 2, 3, 4]',
        '[10, 1, -17, 0, 2, 13]',
        '[4, -3, 3, -2, 2, -1, 1, 0]'
    ]);
