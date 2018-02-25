
function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    // console.log(hours.text())
    let timer;
    let sec=0;

    let start = $('#start-timer');
    start.on('click', function () {
        clearInterval(timer);
        timer = setInterval(tick, 1000)
    });

    let end= $('#stop-timer');
    end.on('click', function (){
        clearInterval(timer);
        start.attr('disabled', false);
        end.attr('disabled', true);
    });

    function tick(event) {
        sec++;
        hours.text(("0"+Math.floor(sec/3600)).slice(-2));
        minutes.text(("0"+Math.floor((sec-(hours.text() * 3600))/60)).slice(-2));
        seconds.text(("0"+sec%60).slice(-2));
    }
}