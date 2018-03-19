
function validateRequest(obj) {

        if (!obj.hasOwnProperty('method')) {
            throw new Error('Invalid request header: Invalid Method')
        } else {
            if (obj['method'] !== 'GET' && obj['method'] !== 'POST' && obj['method'] !== 'DELETE' && obj['method'] !== 'CONNECT') {
                throw new Error('Invalid request header: Invalid Method')
            }
        }
        if (!obj.hasOwnProperty('uri')) {
            throw new Error('Invalid request header: Invalid URI')
        } else {
            let patt = /^(\*|[A-Za-z0-9.]+)$/;
            if (!patt.test(obj['uri'])) {
                throw new Error('Invalid request header: Invalid URI')
            }
        }

        if (!obj.hasOwnProperty('version')) {
            throw new Error('Invalid request header: Invalid Version')
        } else {

            if (obj['version'] !== 'HTTP/0.9' && obj['version'] !== 'HTTP/1.0' && obj['version'] !== 'HTTP/1.1' && obj['version'] !== 'HTTP/2.0') {
                throw new Error('Invalid request header: Invalid Version')
            }
        }

        if (!obj.hasOwnProperty('message')) {
            throw new Error('Invalid request header: Invalid Message')
        } else {
            let patt = /^[^<>\&'"]*$/;

            if (!patt.test(obj['message']) && obj['message']>=0) {
                throw new Error('Invalid request header: Invalid Message')
            }
        }
        return obj;
}


let obj ={
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};
validateRequest(obj);

