function solve(commands) {
    let processor = (function (command) {
        let text = "";

        return function (commandString) {
            let tokens = commandString.split(" ");
            switch (tokens[0]) {
                case "append":
                    text += tokens[1];
                    break;
                case "removeStart":
                    text = text.slice(Number(tokens[1]));
                    break;
                case "removeEnd":
                    text = text.slice(0, text.length - Number(tokens[1]));
                    break;
                case "print":
                    console.log(text);
                    break;
            }
        }
    })();

    for (let command of commands) {
        processor(command)
    }
}


solve(
    ['append 123',
        'append 45',
        'removeStart 2',
        'removeEnd 1',
        'print']
)