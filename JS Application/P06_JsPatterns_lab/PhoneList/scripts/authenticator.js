let auth = (() => {
    // if(localStorage.getItem('authToken')!==null && localStorage.getItem('username')!==null){
    //     userLoggedIn();
    // }else{
    //     userLoggedOut()
    // }
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authToken', data._kmd.authToken);
    }

    function login(username, password) {
        return remote.post('user', 'login', {username, password}, 'basic');
    }

     function register(username, password) {
            return remote.post('user', '', {username, password}, 'basic');
    }

     function logout(username, password) {
       return   remote.post('user', '_logout', {authToken: localStorage.getItem('authToken')}, 'basic');
    }
    return{login,logout,register,saveSession}

})();