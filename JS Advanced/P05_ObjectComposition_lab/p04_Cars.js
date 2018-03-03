function cars(cars) {
    let processor= (function(){
        let map =new Map();
        
        function create(name) {
            map.set(name,{});
        }
        function inherit(name,parentName) {
            let parent = map.get(parentName);
            map.set(name,Object.create(parent));
        }
        function set(name,prop,propName) {
            let obj=map.get(name);
            obj[prop]=propName;
            map.set(name,obj);
        }
        function print(name) {
            let obj= map.get(name);
            let result=[];
            for (let key in obj) {
                result.push(`${key}:${obj[key]}`);
            }
            console.log(result.join(", "));
        }
        return {create,inherit,print,set};
    })();

    for (let car of cars) {
        let tokens=car.split(" ");
        if(tokens.length===4 && tokens[0]==='create'){
            processor[tokens[2]](tokens[1],tokens[3])
        }else{
            processor[tokens[0]](tokens[1],tokens[2],tokens[3])
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)