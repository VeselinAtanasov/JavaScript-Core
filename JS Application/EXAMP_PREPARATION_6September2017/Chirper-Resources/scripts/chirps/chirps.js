let chirps = (function () {

    function getAllChirps(subscriptions) {
        let endPoint = `chirps?query={"author":{"$in": ${subscriptions}}}&sort={"_kmd.ect": 1}`;
        return requester.get('appdata', endPoint, 'kinvey')
    }

    function createChirp(text, author) {
        let userData = {text, author};
        return requester.post('appdata', 'chirps', 'kinvey', userData)
    }

    function deleteChirp(chirpId) {
        let endPoint = `chirps/${chirpId}`;
        return requester.remove('appdata', endPoint, 'kinvey');
    }

    function getAllChirpsByUser(username) {
        let endpoint = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;
        return requester.get('appdata', endpoint, 'kinvey')
    }

    //Queries for Profile stats:
    function getCountChirps(username) {
        let endPoint = `chirps?query={"author":"${username}"}`;
        return requester.get('appdata', endPoint, 'kinvey')
    }

    function getCountFollowing(username) {
        let endPoint = `?query={"username":"${username}"}`;
        return requester.get('user', endPoint, 'kinvey')
    }

    function getCountFollowers(username) {
        let endPoint = `?query={"subscriptions":"${username}"}`;
        return requester.get('user', endPoint, 'kinvey')
    }

    async function follow(targetUser) {

        let subscriptions = (await requester.get('user', sessionStorage.getItem('userId'), 'Kinvey')).subscriptions || [];
        subscriptions.push(targetUser);
        try {
          const resp =   await requester.update('user', sessionStorage.getItem('userId'), 'Kinvey', {subscriptions});
            sessionStorage.setItem('subscriptions', JSON.stringify(resp.subscriptions));
        } catch (err) {
            notify.handleError(err);
        }

    }

    async function unFollow(targetUser) {

        let subscriptions = (await requester.get('user', sessionStorage.getItem('userId'), 'Kinvey')).subscriptions || [];
        subscriptions = subscriptions.filter( u => u!==targetUser);
        try {
            const resp =   await requester.update('user', sessionStorage.getItem('userId'), 'Kinvey', {subscriptions});
            sessionStorage.setItem('subscriptions', JSON.stringify(resp.subscriptions));
        } catch (err) {
            notify.handleError(err);
        }

    }


    return {
        getAllChirps,
        createChirp,
        deleteChirp,
        getAllChirpsByUser,
        getCountChirps,
        getCountFollowing,
        getCountFollowers,follow,unFollow
    }

})();