function attachEvents() {
    //App settings:
    const baseUrl = 'https://baas.kinvey.com/appdata11/kid_Hke2r1dqG/';
    const username = 'pesho';
    const password = 'p';
    const postDb = 'posts';
    const commentsDb = 'comments';

    // All DOM elements:
    const postTitle = $('#post-title');
    const postBody = $('#post-body');
    const postComments = $('#post-comments');
    const savePosts = $('#posts');
    const btnLoadPosts = $('#btnLoadPosts').on('click', loadPosts);
    const btnViewPost = $('#btnViewPost').on('click', viewPosts);

    //Function for all db queries: function which return promise
    function dbRequest(endPoint) {
        return $.ajax({
            url: baseUrl + endPoint,
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            },
            contentType: 'application/json'
        });
    }

    //Load Posts:
    function loadPosts() {
        dbRequest(postDb)
            .then(processData)
            .catch(processError);
        function processData(response) {
            savePosts.empty();
            for (let obj of response) {
                savePosts.append(`<option value="${obj._id}">${obj.title}</option>`)
            }
        }
    }

    //View Posts:
    function viewPosts() {
        let currentId = savePosts.find('option:selected').val();
        let promisePost= dbRequest(postDb + `/${currentId}`);
        let promiseComments= dbRequest(commentsDb + `/?query={"post_id":"${currentId}"}`);
        Promise.all([promisePost,promiseComments])
            .then(display)
            .catch(processError);

        function display([displayName,displayComments]) {
            postTitle.empty();
            postBody.empty();
            postTitle.text(displayName.title);
            postBody.text(displayName.body);
            postComments.empty();
            for (let resp of displayComments) {
                postComments.append($(`<li>${resp.text}</li>`))
            }
        }
    }

    //Handle Error:
    function processError(error) {
        savePosts.append(`<option>Error</option>`)
    }
}