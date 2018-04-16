
let remote=(() => {
    const appKey='';
    const appSecret='';
    const baseURL='';

    function makeAuth(type) {
        if(type==='basic'){
            return 'Basic '+btoa(appKey +":"+appSecret)
        }else{
            return 'Kinvey '+localStorage.getItem('authToken');
        }
    }

    function makeRequest(method,module, url,auth) {
        return req ={
            url: baseURL+ module +'/'+appKey+'/'+url,
            method: method,
            headers:{
                'Authorization': makeAuth(auth)
            }
        }
    }

    function get(module, url,auth) {
        return $.ajax(makeRequest('GET',module, url,auth))
    }

    function post(module,url,data,auth) {
        let req=makeRequest('POST',module,url,auth);
        req.data =JSON.stringify(data);
        req.headers['Context=Type'] = 'application/json';
        console.log(req)
        return $.ajax(req)
    }

    function update(module,url,data,auth) {
        let req=makeRequest('PUT',module,url,auth);
        req.data =JSON.stringify(data);
        req.headers['Context=Type'] = 'application/json';
        return $.ajax(req)
    }

    function remove(module,url,auth) {
        let req=makeRequest('PUT',module,url,auth);
        req.data =JSON.stringify(data);
        req.headers['Context=Type'] = 'application/json';
        return $.ajax(req)
    }

    return{get, post, update, remove}
})();