let Student = require('./Students.js');
let dbRequest = require('./config.js');


function execute(){

    dbRequest('', 'GET', {})
        .then(displayResults)
        .catch(handleError)
}


let st = new Student('1','rr','tt','222','6');
console.log(st);
console.log(dbRequest);

function displayResults(resp) {
    console.log(resp)
}
function handleError(err) {
    console.log(err)
}
 