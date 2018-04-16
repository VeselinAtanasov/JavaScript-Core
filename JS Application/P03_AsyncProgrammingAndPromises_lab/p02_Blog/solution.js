function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_Hke2r1dqG/';
    const username = 'pesho';
    const password = 'p';
    const postDb = 'posts';
    const commentsDb = 'comments';

    let postTitle=$('#post-title');
    let postBody=$('#post-body');
    let postComments=$('#post-comments');
    let savePosts = $('#posts');
    let btnLoadPosts = $('#btnLoadPosts').on('click', loadPosts);
    let btnViewPost = $('#btnViewPost').on('click', viewPosts);

    //Load Posts:
    function loadPosts() {
        $.ajax({
            url: baseUrl + postDb,
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            },
            contentType: 'application/json'
        })
            .then(processData)
            .catch(processError);

        function processData(response) {
            savePosts.empty();
            for (let obj of response) {
                savePosts.append(`<option value="${obj._id}">${obj.title}</option>`)
            }
        }

    }

    function processError(error) {
        savePosts.append(`<option>Error</option>`)
    }

    //View Posts:
    function viewPosts() {
        let currentId = savePosts.val();
        $.ajax({
            url: baseUrl + postDb+`/${currentId}`,
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(`${username}:${password}`)
            },
            contentType: 'application/json',
            success: displayName,
            error: processError
        });
        function displayName(response) {
                postTitle.text(response.title);
                postBody.text(response.body);
        }

        $.ajax({
            url: baseUrl + commentsDb+`/?query={"post_id":"${currentId}"}`,
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(`${username}:${password}`)
            },
            contentType: 'application/json',
            success: displayComments,
            error: processError
        });
        function displayComments(response) {
            for (let resp of response) {
                postComments.append(`<li>${resp.text}</li>`)
            }
        }
    }
}