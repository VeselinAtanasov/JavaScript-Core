
function splitting(str) {
    let pattern=/[();,.\s]+/g;
    return str.split(pattern).join("\n")
}

console.log(splitting('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));