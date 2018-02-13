
function xmlMessenger(text){
    "use strict";
    let pattern=/^<message\s*([a-z]+="*[A-Za-z0-9\s.]+"*)*\s*((to|from)="*([A-Za-z0-9\s.]+"*))\s*([a-z]+="*[A-Za-z0-9\s.]+"*)*\s*((to|from)="*([A-Za-z0-9\s.]+"*))\s*([a-z]+="*[A-Za-z0-9\s.]+"*)*\s*>((.|(\n))+)<\/message>$/g
 //   let nonCapturingGrouo=/^<message((?:\s[a-z]+="[A-Za-z0-9 .]+")+)>((.|(\n))+)<\/message>$/g  // non capturing group => ?:

    let matches=pattern.exec(text);
    let arr={};
    while (matches){
        if(matches[2]){
            arr['sender']=matches[2];
        }
        if(matches[6]){
            arr['receiver']=matches[6];
        }
        if(matches[10]){
            arr['message']=matches[10];
        }
        matches=pattern.exec(text);
    }


    if(Object.keys(arr).length===0){
        console.log("Invalid message format");
        return
    }

    if(!arr.hasOwnProperty('sender') || !arr.hasOwnProperty('receiver') ){
        console.log("Missing attributes");
        return;
    }

    let isFromAndToExist=[];
    let allKeys=Object.keys(arr);
    for (let key of allKeys) {
        try{
            let tempArr=arr[key].split(/["=]/g).filter(x=>x!=="");
            isFromAndToExist.push(tempArr[0]);
        }catch (e){
        }
    }
    if(isFromAndToExist[0].toLowerCase()===isFromAndToExist[1].toLowerCase()){
        console.log("Missing attributes");
        return;
    }

    let senderTokens =arr.sender.split(/["=]/g).filter(x=> x!=="").map( x=>x.trim());
    let dest=senderTokens[0];
    let person=senderTokens[1]

    let receiverTokens =arr.receiver.split(/["=]/g).filter(x=> x!=="").map( x=>x.trim());
    let orig=receiverTokens[0];
    let person2=receiverTokens[1];

    let messageTokens=arr.message.split("\n");

    let html="<article>\n";
    html+=`  <div>From: <span class="sender">${dest.toLowerCase()==='from' ? person : person2}</span></div>\n`;
    html+=`  <div>To: <span class="recipient">${orig.toLowerCase()==='to' ? person2 : person}</span></div>\n`;
    html+=`  <div>\n`;
    for (let obj of messageTokens) {
       html+=`    <p>${obj}</p>\n`
    }
    html+=`  </div>\n`;
    html+=`</article>\n`;

console.log(html)

}

  xmlMessenger('<message from="Alice" timestamp="1497254112">Same old, same old</message>');
//xmlMessenger('<message from="Alice" timestamp="1497254112">Same old, same old</message>');