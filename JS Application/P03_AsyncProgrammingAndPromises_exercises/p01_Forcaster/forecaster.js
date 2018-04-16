function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com/locations';
    const urlForToday = 'https://judgetests.firebaseio.com/forecast/today/' //{code}.json
    const urlFor3Days = 'https://judgetests.firebaseio.com/forecast/upcoming/'

    let submitBtn = $('#submit').on('click', btnClicked);
    let locationInput = $('#location');
    let forecastDiv = $('#forecast');
    let current = $('#current');
    let upcoming = $('#upcoming');

    let weather = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    }
    let town;

    function handleError(err) {
        forecastDiv.css('display', 'block')
        forecastDiv.text('Error')
    }

    function btnClicked() {

        let req = {
            method: "GET",
            contentType: 'application/json',
            url: baseUrl + '.json',
        }
        $.ajax(req)
            .then(processResponse)
            .catch(handleError)

        function processResponse(resp) {
            let input = locationInput.val();
            for (let el of resp) {
                if (el.name === input) {
                    town = el;
                }
            }
            getForcast()
        }
    }

    function dbRequest(endPoint) {
        return $.ajax({
            url: endPoint + town.code + '.json',
            method: "GET",
            contentType: 'application/json'
        });
    }

    function getForcast() {
        let oneDayPromise = dbRequest(urlForToday);
        let threeDayPromise = dbRequest(urlFor3Days);
        Promise.all([oneDayPromise, threeDayPromise])
            .then(displayResult)
            .catch(handleError)
    }

    function displayResult([oneDay, threeDays]) {
        forecastDiv.css('display', 'block');
        current.empty();
        upcoming.empty();
        current.append($(`<span class="condition symbol">${weather[oneDay.forecast.condition]}</span>`));
        let spanCondition = $('<span class="condition">');
        spanCondition
            .append($(`<span class="forcast-data">${oneDay.name}</span>`))
            .append($(`<span class="forcast-data">${oneDay.forecast.high}/${oneDay.forecast.low}</span>`))
            .append($(`<span class="forcast-data">${oneDay.forecast.condition}</span>`));
        current.append(spanCondition);

        for (let record of threeDays.forecast) {
            let span = $('<span class ="upcomming"></span>');
            span
                .append($(`<span class ="symbol">${weather[record.condition]}</span>`))
                .append($(`<span class ="forcast-data">${record.high}/${record.low}</span>`))
                .append($(`<span class ="forcast-data">${record.condition}</span>`))
            upcoming.append(span);
        }
    }
}