function hungryProgrammer(portions, commands) {
    "use strict";
    let counter=0;
    let serve = function (portions) {
        if(portions.length!==0) {
            let servedPortion = portions.pop();
            console.log(`${servedPortion} served!`);
            // counter++;
        }
    };

    let eat = function (portions, args) {
        if(portions.length!==0){
            let eatenPortion = portions.shift();
            console.log(`${eatenPortion} eaten`);
            counter++;
        }
    };

    let add = function (portions, args) {
        let item = args[1];
        portions.unshift(item);
    };

    let consume = function (portions, args) {
        let startIndex = Number(args[1]);
        let endIndex = Number(args[2]);
        if(isValidIndex(portions,startIndex) && isValidIndex(portions,endIndex)){
            portions.splice(startIndex, endIndex - startIndex + 1);
            console.log("Burp!");
            counter+=endIndex-startIndex+1;
        }
    };
    let shift = function (portions, args) {
        let index1 = Number(args[1]);
        let index2 = Number(args[2]);
        if(isValidIndex(portions,index1) && isValidIndex(portions,index2)){
            let tempElement = portions[index1];
            portions[index1] = portions[index2];
            portions[index2] = tempElement;
        }
    };

    function isValidIndex(portions, index) {
       if(portions.length<=index || !Number.isFinite(index)){
           return false;
       }
       return true;
    }

    let collectionOfCommands = {
        Serve: serve,
        Add: add,
        Shift: shift,
        Eat: eat,
        Consume: consume
    };

    function hasValidParams(arr) {
        let currentCommand=arr[0];
        if (arr.length === 1) {
            if (currentCommand !== "Serve" && currentCommand !== "Eat") {
                return false;
            }
        }
        if (arr.length === 2) {
            if (currentCommand !== "Add") {
                return false;
            }
        }
        if (arr.length === 3) {
            if (currentCommand !== "Shift" && currentCommand !== "Consume") {
                return false;
            }
        }
        return true;
    }

    for (let key of commands) {
        let command = key.split(" ").filter(x => x !== "");
        let commandName = command[0];
        if (commandName === "End") {
            break;
        }
        if (collectionOfCommands.hasOwnProperty(commandName)) {
            if (hasValidParams(command)) {
                collectionOfCommands[commandName](portions, command);
            }
        }
    }

    let remainingPortions= (portions.length!==0) ? "Meals left: "+portions.join(", ") : "The food is gone";
    console.log(remainingPortions);
    console.log(`Meals eaten: ${counter}`)


}

hungryProgrammer( ['soup', 'spaghetti', 'eggs'],
[
'Consume 0 2',
'Eat',
'Eat',
'Shift 0 1',
'End',
'Eat']
);