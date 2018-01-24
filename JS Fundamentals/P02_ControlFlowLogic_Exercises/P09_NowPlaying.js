
function playing(arr){
    "use strict";
    let track=arr[0];
    let artist=arr[1];
    let duration=arr[2];

    return `Now Playing: ${artist} - ${track} [${duration}]`;

}

console.log(playing(['Number One', 'Nelly', '4:09']))