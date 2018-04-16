(function () {
    //Declare all constants:
    const appKey = 'kid_Sk-vwYpFM';
    const db = 'bookCollections';
    const username = 'guest';
    const password = 'guest';
    const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/${db}/`;
    const auth = {
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    };

    //Declare class Book
    class Book {
        constructor(title, author, isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            if (value.length === 0 || value === null) {
                throw new TypeError("Wrong input parameter for Title")
            }
            this._title = value;
        }

        get author() {
            return this._author;
        }

        set author(value) {
            if (value.length === 0 || value === null) {
                throw new TypeError("Wrong input parameter for Author")
            }
            this._author = value;
        }

        get isbn() {
            return this._isbn;
        }

        set isbn(value) {
            if (value.length === 0 || value === null) {
                throw new TypeError("Wrong input parameter for ISBN")
            }
            this._isbn = value;
        }
    }

    //Declare all DOM Elements:
    let titleInput = $('#title');
    let authorInput = $('#author');
    let isbnInput = $('#isbn');
    let table = $('#results');

    //Attached all events:
    let addBtn = $('.add').on('click', addBook);
    // let deleteBtn=$('.delete').on('click',deleteBook);
    // let updateBtn=$('.update').on('click',updateBook);
    let listBtn = $('.list').on('click', listBook);

    //Declare dbRequest;
    function dbRequest(method, endpoint, data) {
        return $.ajax({
            url: baseUrl + endpoint,
            method: method,
            contentType: 'application/json',
            data: JSON.stringify(data),
            headers: auth
        })
    }

    function disableAllButtons() {
        "use strict";
        listBtn.prop("disabled", true);
        addBtn.prop("disabled", true);
    }

    function enableAllButtons() {
        "use strict";
        listBtn.prop("disabled", false);
        addBtn.prop("disabled", false);
    }

    function listBook() {
        disableAllButtons();
        dbRequest("GET", "", {})
            .then(displayAllBooks)
            .catch(handleError)
            .always(enableAllButtons);

        function displayAllBooks(resp) {
             table.not(':first-child').empty();
            console.log(resp);
            for (let book of resp) {
                let container = $(`<tr data-id="${book._id}">`);
                container
                    .append($(`<th>${book.title}</th>`))
                    .append($(`<th>${book.author}</th>`))
                    .append($(`<th>${book.isbn}</th>`));
                container.append($(` <button class="delete" type="button">Delete</button>`).on('click', deleteRecord.bind(container)));
                container.append($(` <button class="update" type="button">Update</button>`).on('click', updateRecord.bind(container)));
                table.append(container);
            }
        }
    }

    function deleteRecord() {
        let currentElement=$(this);
        let id = currentElement.attr("data-id");
        dbRequest("DELETE",id,{})
            .then(listBook)
            .catch(handleError);
    }

    function updateRecord() {
       let currentElement=$(this);
       let id = currentElement.attr("data-id");
        let ths = currentElement.find('th').toArray();
        for (let obj of ths) {
           // console.log(obj.textContent)
        }
    }

    function addBook() {
        disableAllButtons();
        try {
            let book = new Book(titleInput.val(), authorInput.val(), isbnInput.val());
            let obj={
                "title" : book.title,
                "author" : book.author,
                "isbn" :book.isbn
            };
            dbRequest("POST", '', obj)
                .then(listBook)
                .catch(handleError)

        } catch (err) {
            let e = {
                status: 500,
                statusText: err
            };
            handleError(e);
            return;
        }
    }


    function handleError(err) {
        alert(`Error: ${err.status} (${err.statusText})`);
        enableAllButtons()
    }

})();