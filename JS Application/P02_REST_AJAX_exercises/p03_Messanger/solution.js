function attachEvents() {
    let submitBtn = $('#submit').on('click', submit);
    let refreshBtn = $('#refresh').on('click', refresh);
    let chat = $('#messages');
    let currentName = $('#author');
    let currentText = $('#content');
    let baseURL = 'https://messanger-1f807.firebaseio.com/messenger/';

    function submit() {
        let userData = {
            author: currentName.val(),
            content: currentText.val(),
            timestamp: Date.now()

        };
        let request = {
            method: 'POST',
            url: baseURL + '.json',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: refresh,
            error: errorOccurred
        };
        $.ajax(request);
        currentName.val('');
        currentText.val('')
    }

    function errorOccurred(err) {

    }

    function refresh() {
        let request = {
            method: "GET",
            url: baseURL + '.json',
            success: displayMessages,
            error: displayError,
        };
        $.ajax(request);
    }

    function displayMessages(resp) {
        chat.empty();
        let messages = Object.values(resp);
        messages.sort((a, b) => a.timestamp - b.timestamp);
        for (let obj of messages) {
            chat.append(`${obj.author}: ${obj.content}\n`)
        }

    }

    function displayError(err) {

    }
}