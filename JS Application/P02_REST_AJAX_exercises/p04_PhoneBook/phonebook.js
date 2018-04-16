function attachEvents() {
    let baseURL = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let ul = $('#phonebook');
    let btnLoad = $('#btnLoad').on('click', loadContacts);
    let btnCreate = $('#btnCreate').on('click', createContact);
    let person = $('#person');
    let phone = $('#phone');

    function loadContacts() {
        let req = {
            method: "GET",
            url: baseURL + '.json',
            success: displayContacts
        };
        $.ajax(req);
    }

    function displayContacts(resp) {
        ul.empty();
        for (let obj in  resp) {
            let li = $(`<li>${resp[obj].person}: ${resp[obj].phone}</li>`);
            li.append($('<button>Delete</button>').on('click', () => deleteContact(obj)));
            ul.append(li);
        }

        function deleteContact(contact) {
            let req = {
                method: "DELETE",
                url: baseURL + '/' + contact + '.json',
                success: loadContacts,
            };
            $.ajax(req);
        }
    }

    function createContact() {
        let record = {
            "person": person.val(),
            "phone": phone.val()

        };
        let req = {
            method: "POST",
            url: baseURL + '.json',
            data: JSON.stringify(record),
            contentType: 'application/json',
            success : loadContacts
        };
        $.ajax(req);
        person.val('');
        phone.val("");
    }
}