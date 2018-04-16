let receipt = (() => {

    function createRecipe() {
        //https://baas.kinvey.com/appdata/app_key/receipts
        let recipeData = {
                "active": true,
                "productCount": 0,
                "total": 0
            };
        return requester.post('appdata', 'receipts', 'Kinvey', recipeData)
    }


    function getActiveReceipt() {
        //https://baas.kinvey.com/appdata/app_key/receipts?query={"_acl.creator":"userId","active":"true"}
        let endPoint = `receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":true}`;
        return requester.get('appdata', endPoint, 'Kinvey')
    }


    function getMyReceipt() {
        //GET https://baas.kinvey.com/appdata/app_key/receipts?query={"_acl.creator":"userId","active":"false"}
        let id= sessionStorage.getItem('userId');
        let endPoint=`receipts?query={"_acl.creator":"${id}","active":false}`;
        return requester.get('appdata',endPoint,'Kinvey');
    }
    
    function recipeDetails(recipeId) {
        //GET https://baas.kinvey.com/appdata/app_key/receipts/receipt_id
        let endPoint=`receipts/${recipeId}`;
        return requester.get('appdata',endPoint,'Kinvey')
    }

    function commitReceipt(receiptId,productCount,total) {
      //  https://baas.kinvey.com/appdata/app_key/receipts/receipt_id
        let endPoint=`receipts/${receiptId}`;

        //{
        let userData= {
            "active": false,
            "productCount": productCount,	// Sum of all products
            "total": total,		// Total cost of all products
            // Other receipt properties
        };
            return requester.update('appdata',endPoint,'Kinvey',userData)
    }

    return {
        createRecipe,
        getActiveReceipt,
        recipeDetails,
        commitReceipt,
        getMyReceipt
    }
})();
