/**
 * Instead of using switch case to decide which arrow function to invoke -> add all functions in associative array
 * and in for loop just get the correct function from the object/array by the key
 * @param arr
 */
function cooking(arr){
    "use strict";
    let chop= a => a / 2;
    let dice= a => Math.sqrt(a);
    let spice = a => a + 1;
    let bake = a => a * 3;
    let fillet= a => a - a * 0.2;

    let commands={
        "chop":chop,
        "dice":dice,
        "spice":spice,
        "bake":bake,
        "fillet":fillet
    };

    let number=arr.shift();

    function executeCommand(number, func) {
        return func(number);
    }

    for(let i = 0 ; i < arr.length ; i++){
        try{
            let commandFunction=commands[arr[i]];
            number=executeCommand(number,commandFunction);
            console.log(number);
        } catch (erro){
            console.log("Invalid command")
        }

    }
}

cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);