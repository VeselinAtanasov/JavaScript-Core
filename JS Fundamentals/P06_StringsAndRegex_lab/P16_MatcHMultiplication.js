
function multiplicationMatch(text) {
    let pattern=/(-?[0-9]+)\s*\*\s*(-?[0-9]+(\.[0-9]+)?)/g

    let match=pattern.exec(text);

    function funcReplace(fullMatch,group1,group2) {
       let num1= Number(group1) ;
       let num2=Number(group2);
        let result=num1*num2;
        return result;
    }

    while (match){
        text=text.replace(pattern,funcReplace)
        match=pattern.exec(text);
    }

    return text;
}

console.log(multiplicationMatch('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).'));