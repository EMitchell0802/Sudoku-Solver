var seconds = 0
var timer = setInterval(upTimer, 1000);

function upTimer() {
    ++seconds;
    var hour = Math.floor(seconds / 3600);
    var minute = Math.floor((seconds - hour * 3600) / 60);
    var second = seconds - (hour * 3600 + minute * 60);
    document.getElementById("countup").innerHTML = hour + ":" + minute + ":" + second;
}

function stop() {
    clearInterval(check);
    check = null;
    document.getElementById("countup").innerHTML = '0';
}