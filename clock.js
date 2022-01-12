let clock = document.getElementById("rnav")

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// var time = new Date();
// var hr = time.getHours();
// var ampm = if(hr >= 12) { am } else { pm }