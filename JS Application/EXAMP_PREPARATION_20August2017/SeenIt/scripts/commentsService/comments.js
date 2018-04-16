let comments = (() => {
    //GET https://baas.kinvey.com/appdata/app_id/comments?query={"postId":"post_id"}&sort={"_kmd.ect": -1}
    function getAllComments(postId) {
        let endpoint = `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;
        return requester.get('appdata', endpoint, 'kinvey')
    }

    function createComment(postId, content, author) {
        let userData = {postId, content, author};
        return requester.post('appdata', 'comments', 'kinvey', userData);
    }
    function deleteComment(commentId) {
        let endpoint=`comments/${commentId}`;
        return requester.remove('appdata',endpoint,'kinvey')
    }
    function getCommentById(commentId) {
        let endpoint = `comments/${commentId}`;
        return requester.get('appdata',endpoint,'kinvey')
    }

    return {
        getAllComments,
        createComment,
        deleteComment,
        getCommentById
    }

})();