const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_r1Jm48Aqf';
const APP_SECRET = 'e4b9f1944c39443a86e306a65617eff7';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser(event) {
    event.preventDefault();

    let loginForm = $('#formLogin');
    let username = loginForm.find("input[name=username]").val();
    let password = loginForm.find("input[name='passwd']").val();
    let userData = {
        username,
        password
    };

    let req = {
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        method: "POST",
        contentType: 'application/json',
        headers: AUTH_HEADERS,
        data: JSON.stringify(userData),
        success: (resp) => signInUser(resp, 'Login successful'),
        error: handleAjaxError
    };
    $.ajax(req)
}

function registerUser(event) {
    event.preventDefault();
    let form=$('#formRegister');
    let req ={
        url: BASE_URL+'user/'+APP_KEY+'/',
        method : 'POST',
        data: JSON.stringify({
            username: form.find("input[name=username]").val(),
            password: form.find("input[name=passwd]").val()
        }),
        headers: AUTH_HEADERS,
        contentType: 'application/json',
        success: (resp) => signInUser(resp, 'Login successful'),
        error: handleAjaxError
    };
    $.ajax(req);
}

function listBooks() {
    // TODO
    // GET -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // displayPaginationAndBooks(res.reverse())
}


function createBook() {
    // TODO
    // POST -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // showInfo('Book created.')
}

function deleteBook(book) {
    // TODO
    // DELETE -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book deleted.')
}

function loadBookForEdit(book) {
    // TODO
}

function editBook() {
    // TODO
    // PUT -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book edited.')
}

function saveAuthInSession(userInfo) {
    // TODO
}

function logoutUser() {
    let req = {
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        method: 'POST',
        headers: {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),
        },
        success: logoutSuccess,
        error: handleAjaxError
    };
    $.ajax(req);

    function logoutSuccess(resp) {
        sessionStorage.clear();
        showHideMenuLinks();
        showInfo('Logout successful!!!');
      //  showHomeView();
      // $('#loggedInUser').text("")

    }
}

function signInUser(res, message) {

    sessionStorage.clear();
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('id', res._id);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);

}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo')
    if (pagination.data("twbs-pagination")) {
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            // TODO remove old page books
            let startBook = (page - 1) * BOOKS_PER_PAGE
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startBook; i < endBook; i++) {
                // TODO add new page books
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}