function solve(comands) {
    let processor = (function () {
        let list = [];
        function add(word) {
            list.push(word);
        }
        function remove(word) {
            list = list.filter(x => x !== word);
        }
        function print() {
            //console.log(list.join(","));
            console.log(list.toString());
        }
        return {
            add,
            remove,
            print
        }
    })();
    for (let command of comands) {
        let tokens =command.split(" ");
        processor[tokens[0]](tokens[1]);
    }
}

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])