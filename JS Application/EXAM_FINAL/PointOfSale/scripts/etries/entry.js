let entry = (() => {

    function addEntry(type, qty, price, receiptId) {
        //https://baas.kinvey.com/appdata/app_key/entries
        let userData = {type, qty, price, receiptId};
        return requester.post('appdata', 'entries', 'Kinvey', userData);
    }

    function deleteEntry(entryId) {
      //https://baas.kinvey.com/appdata/app_key/entries/entry_id
        let endPoint=`entries/${entryId}`;
        return requester.remove('appdata',endPoint,'Kinvey')
    }
    function getEntriesByRecipe(recipeId) {
        //GET https://baas.kinvey.com/appdata/app_key/entries?query={"receiptId":"receiptId"}
        let endPoint = `entries?query={"receiptId":"${recipeId}"}`;
        return requester.get('appdata', endPoint, 'Kinvey');
    }


    return {
        addEntry,
        deleteEntry,
        getEntriesByRecipe
    }

})();
