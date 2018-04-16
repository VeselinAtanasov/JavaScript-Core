function attachEvents() {
    const baseURL = 'https://baas.kinvey.com/appdata/kid_Syjnf0d9M/biggestCatches'
    const username = 'guest';
    const password = 'guest';

    let divCatches = $('#catches');
    let divAside = $('#aside');
    let addBtn = $('.add').on('click', addRecord);
    let loadBtn = $('.load').on('click', loadRecords);
    let angler = divAside.find('.angler')
    let weight = divAside.find('.weight')
    let species = divAside.find('.species')
    let location = divAside.find('.location')
    let bait = divAside.find('.bait')
    let captureTime = divAside.find('.captureTime')

    function handleError() {
        alert("ERROR!!!")
    }

    function dbRequest(method, endPoint, params) {
        let request = {
            method: method,
            url: baseURL + endPoint,
            data: JSON.stringify(params),
            contentType: 'application/json',
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        };
        return $.ajax(request)
    }

    function addRecord() {
        let userData = {
            angler: angler.val(),
            weight: Number(weight.val()),
            species: species.val(),
            location: location.val(),
            bait: bait.val(),
            captureTime: parseInt(captureTime.val())
        };

        dbRequest('POST', '', userData)
            .then(displayResult)
            .catch(handleError)

        function displayResult(resp) {
            console.log(resp)
        }
    }

    function loadRecords() {
        dbRequest('GET', '', {})
            .then(loadAllRecords)
            .catch(handleError);

        function loadAllRecords(resp) {
            $('#main div').empty();
            for (let record of resp) {
                let div = $(`<div class="catch" data-id="${record._id}">`);
                div
                    .append($('<label>Angler</label>'))
                    .append($(`<input type="text" class="angler" value="${record.angler}"/>`))
                    .append($(`<label>Weight</label>`))
                    .append($(`<input type="number" class="weight" value="${record.weight}"/>`))
                    .append($(`<label>Species</label>`))
                    .append($(`<input type="text" class="species" value="${record.species}"/>`))
                    .append($(`<label>Location</label>`))
                    .append($(`<input type="text" class="location" value="${record.location}"/>`))
                    .append($(`<label>Bait</label>`))
                    .append($(`<input type="text" class="bait" value="${record.bait}"/>`))
                    .append($(`<label>Capture Time</label>`))
                    .append($(`<input type="number" class="captureTime" value="${record.captureTime}"/>`))
                    .append($(`<button class="update">Update</button>`).on('click', updateRecord.bind(div)))
                    .append($(`<button class="delete">Delete</button>`).on('click', deleteRecord.bind(div)));

                divCatches.append(div)
            }
        }
    }

    function updateRecord() {
        let currentDiv = $(this);
        let id = currentDiv.attr("data-id");
        let userData = {
            angler: currentDiv.find('.angler').val(),
            weight: Number(currentDiv.find('.weight').val()),
            species: currentDiv.find('.species').val(),
            location: currentDiv.find('.location').val(),
            bait: currentDiv.find('.bait').val(),
            captureTime: parseInt(currentDiv.find('.captureTime').val())
        };
        dbRequest('PUT', '/' + id, userData)
            .then(loadRecords)
            .catch(handleError);

    }

    function deleteRecord() {
        let id = $(this).attr("data-id");
        dbRequest('DELETE', '/' + id, {})
            .then((resp) => {
                loadRecords()
            })
            .catch(handleError);
    }
}