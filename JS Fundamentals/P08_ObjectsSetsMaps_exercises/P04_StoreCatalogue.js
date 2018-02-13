
function storeCatalogue(arr){
    "use strict";
    let dictionary={};

    for(let row of arr){
        let tokens=row.split(" : ").filter(x=>x!=="");
        let item=tokens[0];
        let price = Number(tokens[1]);
        let letter =item[0];

        if(!dictionary.hasOwnProperty(letter)){
            dictionary[letter]={}
        }
        if(!dictionary[letter].hasOwnProperty(item)){
            dictionary[letter][item]=0;
        }

        dictionary[letter][item]=price;
    }

    function sortingFunc(key1, key2) {
      return  key1.toLowerCase().localeCompare(key2.toLowerCase());
    }

    let sortedKeys=Object.keys(dictionary).sort((a,b) => a.localeCompare(b)); // here I'm sorting the letters
    for (let key of sortedKeys) {   // iterate over array
        console.log(key);
        let sortInside=Object.keys(dictionary[key]).sort((key1,key2) => sortingFunc(key1,key2) ); // here I am sorting the keys of inner object
        for (let k of sortInside) {
            console.log(`  ${k}: ${dictionary[key][k]}`)
        }
    }

}

storeCatalogue([

    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'

]);