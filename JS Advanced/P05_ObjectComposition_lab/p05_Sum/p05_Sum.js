
function getModel() {
    let firstValue;
    let secondValue;
    let result;
    function init(selector1,selector2,selector3) {
       firstValue =  $(selector1);
       secondValue =$(selector2);
       result = $(selector3);
    }
    
    function add() {
        result.val(Number(firstValue.val())+Number(secondValue.val()))
    }
    
    function subtract() {
        result.val(Number(firstValue.val())-Number(secondValue.val()))
    }

    return {init,add,subtract}
}