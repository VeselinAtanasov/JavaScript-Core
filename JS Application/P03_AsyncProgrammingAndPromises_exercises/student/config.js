const appKey='kid_BJXTsSi-e';
const username='guest';
const password = 'guest';
const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/students`

function dbRequest(endpoint,method,body){
  return  $.ajax({
        url : baseUrl+endpoint,
        contentType : 'application/json',
        method: method,
        headers : {
            'Authorization' :'Basic '+ btoa(`${username}:${password}`) 
        },
        data: JSON.stringify(body)
    })
}

module.exports = dbRequest;