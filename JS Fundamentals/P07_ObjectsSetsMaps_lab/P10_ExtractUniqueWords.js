function uniqueness(arr){
    let set = new Set();
    for(let row of arr){
        let words=row.split(/[^A-Za-z]+/g).filter(x => x!=="");
        for(let word of words){
            word=word.toLowerCase();
            set.add(word);
        }
    }

    console.log([...set.values()].join(", "))
}