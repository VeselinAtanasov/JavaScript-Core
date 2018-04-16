function solve() {
    let departId = $('#depart');
    let arriveId = $('#arrive');
    let div = $('#info').find('.info')
    let baseURL = 'https://judgetests.firebaseio.com/schedule/'
    let stopId = 'depot';
    let station;

    function createRequest() {
        let request = {
            url: baseURL + stopId + '.json',
            method: "GET",
            success: getStation,
            error: showError
        }
        return request;
    }

    function depart() {
        departId.prop('disabled', true);
        arriveId.prop('disabled', false);
        $.ajax(createRequest(stopId, getStation));
    }
    function getStation(resp) {
        station=resp.name;
        div.empty();
        div.append(`Next stop ${resp.name}`);
        stopId = resp.next;
    }

    function showError(err) {
        div.empty();
        departId.prop('disabled', true);
        arriveId.prop('disabled', true);
        div.append('Error');
    }
    function arrive() {
        arriveId.prop('disabled', true);
        departId.prop('disabled', false);
        div.empty();
        div.append(`Arriving at ${station}`);
    }
    return {
        depart,
        arrive
    };
}
let result = solve();