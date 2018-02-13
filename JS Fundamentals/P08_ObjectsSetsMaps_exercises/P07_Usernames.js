function userNameCatalogue(arr){
    let set = new Set();

    for(let user of arr){
        set.add(user);
    }

    function sortingFunc(a, b) {
        if(a.length===b.length){
            return a.localeCompare(b);
        }
        return a.length-b.length;
    }

    let sorted=Array.from(set.keys()).sort((a,b) => sortingFunc(a,b)).forEach( c=>console.log(c))
}