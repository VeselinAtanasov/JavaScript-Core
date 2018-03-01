
function sortArrray(arr,sortingCriteria) {
    function ascComparator(a,b) {
        return a-b;
    }
    function descComparator(a,b) {
        return b-a;
    }
    let comparators={
        'asc' : ascComparator,
        'desc' : descComparator
    };

   return arr.sort(comparators[sortingCriteria])
}

console.log(sortArrray([14, 7, 17, 6, 8], 'desc'))