function getInfo() {
    let stopId = $('#stopId');
    let name = $('#stopName');
    let stopName = $('#buses');
    const url = 'https://judgetests.firebaseio.com/businfo';
    let req = {
        url: `${url}/${stopId.val()}.json`,
        method: "GET",
        success: displayStations,
        error: displayError
    }
    $.ajax(req);
    function displayStations(response) {
        name.empty();
        stopName.empty();
        name.append(response.name);
        for (let bus in response.buses) {
            stopName.append(`<li>Bus ${bus} arrives in ${response.buses[bus]} minutes\n</li>`)
        }
        stopId.val('')
    }

    function displayError(response) {
        name.append('Error')
    }
}