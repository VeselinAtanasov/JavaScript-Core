
let auth = (function () {

    function isAuth() {
        return sessionStorage.getItem('authtoken') !==null;
    }

    /**
     * Function for saving data in sessionStorage - could be extended based on
     * userInfo content
     * @param {*} userInfo
     */
    function saveSession(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username',  userInfo.username);
    }

    /**
     * Function responsible for user register
     * @param {*} username 
     * @param {*} password 
     */
    function register(username, password) {
        let userData = { username, password };
        return requester.post('user', '', 'basic', userData)
    }

    /**
     * Function responsible for login the user
     * @param {*} username 
     * @param {*} password 
     */
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    /**
     * Function resposible for loggout the user
     */
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };
        return requester.post('user', '_logout', 'kinvey', logoutData);
    }


  
    return {isAuth, saveSession, register, login, logout }

})()


