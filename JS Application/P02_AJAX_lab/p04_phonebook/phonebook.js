$(() => {
    const url = 'https://phonebook-582a7.firebaseio.com/phonebook';
    loadContacts();
    let loadBtn = $('#btnLoad').on('click', loadContacts);
    let btnCreate = $('#btnCreate').on('click', createContact);
    let phoneDiv = $('#phonebook');
    let person =$('#person');
    let phone =$('#phone');

    function loadContacts() {

        let request = {
            url: url + '/.json',
            method: "GET",
            success: displayContacts
        };
        $.ajax(request)
    }

    function displayContacts(response) {
        phoneDiv.empty();
        for (let contact in response) {
            let html=$(`<li>${response[contact].name}: ${response[contact].phone}</li>`);
            html.append($('<button>Delete</button>').on('click',() => deleteContact(contact)));
            phoneDiv.append(html)
        }
    }
    function createContact() {
        let req ={
            url :url+'/.json',
            method : "POST",
            contentType: 'application/json',
            data: JSON.stringify({
                name : person.val(),
                phone: phone.val()
            }),
            success : () => {notify("Created"); loadContacts()},
            error : displayError
        };
        $.ajax(req);
    }
    function displayError(err) {
        notify('Error: '+err.statusText)
    }

    function notify(message) {
        let toast = document.getElementById("notification");
        toast.textContent = message;
        toast.style.display='block';

        setTimeout(() => toast.style.display= "none",2000)
    }
    
    function deleteContact(key) {
        let req ={
            url: `${url}/${key}.json`,
            method : "DELETE",
            success: () => {notify("Deleted"); loadContacts()},
            error:displayError
        };
        $.ajax(req)
    }


});

