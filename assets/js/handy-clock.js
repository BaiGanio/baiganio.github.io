function handyClock(){
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let year = timeNow.getUTCFullYear();

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    document.getElementById("clock").value = "" + hours + "h : " + minutes + "m : " + seconds + "s - year of " + year;
}

setInterval('handyClock()', 1000);