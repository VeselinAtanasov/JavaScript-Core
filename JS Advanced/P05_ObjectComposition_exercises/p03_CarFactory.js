function carFactory(car) {
    let engines=[{power: 90, volume: 1800},{power: 120, volume: 2400},{power: 200, volume: 3500}];
    let carriages =[{ type: 'hatchback', color: null },{ type: 'coupe', color: null }];

    let power = car['power'];
    let color = car['color'];
    let carriage = car['carriage'];
    let wheelsize = car['wheelsize'];

    let obj={
        model : car['model']
    };

    for (let engine of engines) {
        if(engine['power']>=power){
            obj['engine']=engine;
            break;
        }
    }
    for (let key of carriages) {
        if(key['type']===carriage){
            obj['carriage']={
                type : key['type'],
                color : color
            };
            break;
        }
    }
    if(car['wheelsize'] %2===0){
        let size=car['wheelsize'] -1;
        obj['wheels'] =[size,size,size,size]
    }else{
        let size=car['wheelsize']
        obj['wheels'] =[size,size,size,size]
    }
    return obj
}

console.log(carFactory( {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));