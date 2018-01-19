
function calculateBottlesCapacity(bottels,capacity){
    "use strict";
   return Math.ceil(bottels/capacity);
}

console.log(calculateBottlesCapacity(15, 7));