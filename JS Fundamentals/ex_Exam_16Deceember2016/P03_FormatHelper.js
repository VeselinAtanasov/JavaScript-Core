function formatHelper(arr) {
    "use strict";
    let text = arr[0];

    function spaceReplacer(fullMatch,group1) {

        return group1+" "
    }
    function spaceRemover(fullMatch,group1) {

        return ""+group1
    }
    function dotSeparator(fullMatch,group1) {

        return "."+group1
    }
    function trimer(fullMatch,group1) {

        return  '"'+group1.trim()+'"';
    }

    text=text.replace(/([.,!?:;])\s*/g,spaceReplacer);
    text=text.replace(/\s*([.,!?:;])/g,spaceRemover);
    text=text.replace(/\.\s*([0-9]+)/g,dotSeparator);
    text=text.replace(/"((.|\n)+?)"/g,trimer);



    //console.log(text.trim())
    console.log(text )
}

formatHelper(['Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. Quotation should be should be trimmed after additional spaces are given:"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!'])