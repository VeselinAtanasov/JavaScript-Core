function addAndRemove(commands) {
    let numbers = [];
    let counter=0;
    for (let i = 0; i < commands.length; i++) {
        counter++;
        if(commands[i]==="add"){
            numbers.push(counter);
        }else {
            numbers.pop();
        }
    }
    return numbers.length===0 ? "Empty" : numbers.join("\n");
}
