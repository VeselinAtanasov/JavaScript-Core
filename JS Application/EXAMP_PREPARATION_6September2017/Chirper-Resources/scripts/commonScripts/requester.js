
let requester = (function () {
    const BASE_URL = 'https://baas.kinvey.com';
    const APP_KEY = 'kid_r1uzoPghf';   //APP KEY HERE
    const APP_SECRET = '07bd17df97e3451a8b481ae8d64c68aa';   //APP SECRET HERE

    /**
     * Function which creates the authorization headers
     * @param {*} type basic / kinvey
      */
    function makeAuth(type) {
        return type === 'basic'
            ? 'Basic ' + btoa(APP_KEY + ':' + APP_SECRET)
            : 'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    /**
     * Function which prepares basic request
     * @param {*} method - POST/ GET/ DELETE/ PUT
     * @param {*} module - user/appdata
     * @param {*} endpoint - login/ _logout
     * @param {*} auth  - 'basic'/ 'kinvey'
     */
    function makeRequest(method, module, endpoint, auth) {
        return req = {
            method: method,
            url: BASE_URL + '/' + module + '/' + APP_KEY + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth)
            },
            contentType: 'application/json'
        };
    }

    /**
     * Function which returns post promise
     * @param {*} module - user/appdata
     * @param {*} endpoint - login/ _logout
     * @param {*} auth - 'basic'/ 'kinvey'
     * @param {*obj} data - object with user data
     */
    function post(module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }


    function get(module, endpoint, auth) {
        let req = makeRequest('GET', module, endpoint, auth);
        return $.ajax(req)
    }

    // Function to return PUT promise
    function update(module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = JSON.stringify(data);;
        return $.ajax(req);
    }

    // Function to return DELETE promise
    function remove(module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        post,
        get,
        update,
        remove
    }

})();