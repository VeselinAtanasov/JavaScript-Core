function sortArray(arr){
    let comparator=function(a,b){
        if(a.length==b.length){
            return a.toLowerCase().localeCompare(b.toLowerCase());   //alphabetically in ascending order
        }
        return a.length-b.length;  // by length in ascending order
    };

    return arr.sort(comparator).join("\n");
}