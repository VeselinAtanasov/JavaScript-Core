function cristalProcessing(chunck) {
    let desireThickness = chunck.shift();
    let etchCounter = 0;
    let result = "";

    let cut = a => a / 4;
    let lap = a => a - a * 0.2;
    let grid = a=> a - 20;
    let etch = a =>  a - 2;
    let xRay = a => a + 1;  //not included in the array
    let wash = a => Math.floor(a);

    function executeCommand(cristal, command, counter) {

        while (command(cristal) >= desireThickness) {
            cristal = command(cristal);
            counter++;
        }
        let arr = [cristal, counter]
        return arr;
    }

    function chooseCommand(cristal) {
        let obj = {};
        if (executeCommand(cristal, cut, 0)[1] !== 0) {
            obj['name'] = "Cut";
            obj['method'] = cut;
            return obj;
        }

        if (executeCommand(cristal, lap, 0)[1] !== 0) {
            obj['name'] = "Lap";
            obj['method'] = lap;
            return obj;
        }

        if (executeCommand(cristal, grid, 0)[1] !== 0) {
            obj['name'] = "Grind";
            obj['method'] = grid;
            return obj;
        }

        if (executeCommand(cristal, etch, 0)[1] !== 0) {
            obj['name'] = "Etch";
            obj['method'] = etch;
            return obj;
        }
    }


    function checkXrayToApply(cristal, method) {
        if(method(cristal+1) === desireThickness){
            return true;
        }
        return false;
    }


    for (let i = 0; i < chunck.length; i++) {
        let cristal = chunck[i];
        result += `Processing chunk ${cristal} microns\n`;
        if (cristal === desireThickness) {
            result += `Finished crystal ${desireThickness} microns\n`;
            continue;
        }
        if (cristal - desireThickness===-1) {
            result+="X-ray x1\n";
            result += `Finished crystal ${desireThickness} microns\n`;
            continue;
        }
        while (cristal >= desireThickness) {

            let commandToExecute = chooseCommand(cristal);
            let arr = executeCommand(cristal, commandToExecute.method, 0);
            cristal = wash(arr[0]);
            let countTimes = arr[1];

            if(cristal===desireThickness){
                result += `${commandToExecute.name} x${countTimes}\n`;
                result += `Transporting and washing\n`;
                result+=`Finished crystal ${desireThickness} microns\n`;
                break;
            }

            if(checkXrayToApply(cristal,commandToExecute.method)){
                cristal=xRay(cristal);
                cristal=commandToExecute.method(cristal);
                countTimes++;
                result += `${commandToExecute.name} x${countTimes}\n`;
                result += `Transporting and washing\n`;
                result+="X-ray x1\n";
                result+=`Finished crystal ${desireThickness} microns\n`;
                break;
            }
            result += `${commandToExecute.name} x${countTimes}\n`;
            result += `Transporting and washing\n`;
        }
    }

    return result;
}


console.log(cristalProcessing([1375, 50000]));