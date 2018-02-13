function restHouse(arrRoom, arrGuests) {

    function fillMapRoom() {
        let rooms = new Map();
        for (let key of arrRoom) {
            if (!rooms.has(key.number)) {
                rooms.set(key.number, new Map())
            }
            if (key.type === 'double-bedded') {
                rooms.get(key.number).set(2, []);
            } else {
                rooms.get(key.number).set(3, []);
            }
        }
        return rooms;
    }

    let teamHouseCounter = 0;
    let rooms = fillMapRoom();




    function getRoomTripleRoom(first, second) {
        let addedPerson=false;
        let isReady=false;
        let checker="";
        for (let [roomNumber,values] of rooms) {
            for (let [num,arr] of values) {
                if(num===3 && arr.length===0){
                    if(!addedPerson){ // add both of them
                        arr.push(first);
                        arr.push(second);
                        checker='done';
                        isReady =true;
                        break;
                    }else{
                        arr.push(second);
                        checker='done';
                        isReady =true;
                        break;
                    }
                }
                if(num===3 && arr.length===1 && rooms.get(roomNumber).get(num)[0].gender===second.gender){
                    if(!addedPerson){ // add both of them
                        arr.push(first);
                        arr.push(second);
                        checker='done';
                        isReady =true;
                        break;
                    }else{
                        arr.push(second);
                        checker='done';
                        isReady =true;
                        break;
                    }
                }

                if(num===3 && arr.length===2 && rooms.get(roomNumber).get(num)[0].gender===second.gender){
                    if(!addedPerson){ // add both of them
                        arr.push(first);
                        addedPerson=true;
                       
                    }else{
                        arr.push(second);
                        checker='done';
                        isReady =true;
                        break;
                    }
                }
            }
            if(isReady){
                break;
            }
        }

        if(checker==='' && !isReady){
            if(addedPerson){
                teamHouseCounter+=1;
            }else{
                teamHouseCounter+=2
            }
        }

    }

    for (let guest of arrGuests) {
        if(guest.first.gender!==guest.second.gender){
            let added=false;
            for (let [roomNumber,values] of rooms) {
                for (let [size,arr] of values) {
                    if(size===2 && arr.length===0){
                        arr.push(guest.first);
                        arr.push(guest.second);
                        added=true;
                        break;
                    }
                }
                if(added){
                    break;
                }
            }
            if(!added){
                teamHouseCounter+=2;
            }
        }

        if(guest.first.gender===guest.second.gender){
            getRoomTripleRoom(guest.first,guest.second)
        }
    }


    let sortedRooms=Array.from(rooms.keys()).sort();

    for (let key of sortedRooms) {
        console.log(`Room number: ${key}`);
        let sortInside=Array.from(rooms.get(key).values())[0].sort((a,b) => a.name.localeCompare(b.name));
        let getCurrentRoomType=Array.from(rooms.get(key).keys()); // array with only one value
        for (let obj of sortInside) {
            console.log(`--Guest Name: ${obj.name}`);
            console.log(`--Guest Age: ${obj.age}`)
        }
        console.log(`Empty beds in the room: ${ Number(getCurrentRoomType[0])- sortInside.length}`)
    }
    console.log(`Guests moved to the tea house: ${teamHouseCounter}`)
}



restHouse(
    [
        {"number":"428","type":"triple"},
        {"number":"161","type":"triple"},
        {"number":"242","type":"double-bedded"},
        {"number":"537","type":"triple"},
    ],
    [{"first":{"name":"Nina Diaz","gender":"female","age":29},"second":{"name":"Carol Hansen","gender":"female","age":6}},
        {"first":{"name":"Georgia Thomas","gender":"female","age":38},"second":{"name":"Freddie Harmon","gender":"male","age":46}},
        {"first":{"name":"Freddie Harmon","gender":"male","age":30},"second":{"name":"Jesus Terry","gender":"male","age":64}},
        {"first":{"name":"Tracy Reid","gender":"male","age":41},"second":{"name":"Jordan Garner","gender":"male","age":16}},
        {"first":{"name":"Kara Burns","gender":"female","age":7},"second":{"name":"Marjorie Butler","gender":"female","age":28}}
    ]
)