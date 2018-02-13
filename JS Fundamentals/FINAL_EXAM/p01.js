function solve(arr){
    let totalAmoutOfMoney=0;
    let bitcoinDay=[]
    let buyBitcoin=false;
    let bitcoinCounter=0;
    let arr2=arr.unshift(1);
    for (let i = 0; i <arr.length; i++) {
        if(i===0){
            continue;
        }
        let currentGoldDay=Number(arr[i]);
        if(i%3===0){
             currentGoldDay=currentGoldDay-currentGoldDay*0.3;
        }

        let erndMoney=currentGoldDay*67.51;
        totalAmoutOfMoney+=erndMoney;
        if(totalAmoutOfMoney>=11949.16){
            buyBitcoin=true;
            bitcoinDay.push(i);
            while(totalAmoutOfMoney>11949.16){
                totalAmoutOfMoney-=11949.16;
                bitcoinCounter++;
            }

        }

    }

    function ttt(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`)
    if(buyBitcoin!==false){
        console.log(`Day of the first purchased bitcoin: ${bitcoinDay.shift()}`)
    }
    let res=totalAmoutOfMoney.toFixed(2)
   // console.log(`Left money: ${Math.round(totalAmoutOfMoney * 100) / 100} lv.`)
    console.log(`Left money: ${res} lv.`)
}

solve([50,
    100])