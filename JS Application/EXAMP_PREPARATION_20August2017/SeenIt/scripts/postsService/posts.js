let posts = (() => {

    //List all posts from db -> GET https://baas.kinvey.com/appdata/app_id/posts?query={}&sort={"_kmd.ect": -1}
    function getAllPosts() {
        const endPoint = 'posts?query={}&sort={"_kmd.ect": -1}';
        return requester.get('appdata', endPoint, 'kinvey')
    }

    function createPost(author, title, description, url, imageUrl) {
        let userData = {
            author, title, description, url, imageUrl
        };

        return requester.post('appdata', 'posts', 'kinvey', userData)
    }

    function editPost(postId, author, title, description, url, imageUrl) {
        let userData = {author, title, description, url, imageUrl};
        let endPoint = `posts/${postId}`;
        return requester.update('appdata', endPoint, 'kinvey', userData)
    }

    function deletePost(postId) {
        let endPoint = `posts/${postId}`;
        return requester.remove('appdata', endPoint, 'kinvey')
    }

    function getMyPosts(username) {
        let endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;
        return requester.get('appdata', endpoint, 'kinvey')
    }

    function getPostById(postId) {
        let endpoint = `posts/${postId}`;
        return requester.get('appdata', endpoint, 'kinvey')
    }

    return {
        getAllPosts, createPost, editPost, deletePost, getMyPosts, getPostById
    }

})();