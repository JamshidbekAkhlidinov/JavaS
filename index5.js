function qosh() {
    var a = document.getElementById("bir").value;
    var b = document.getElementById("ikki").value;
    var hisob = document.getElementById("hisob").value;
    var ok = document.getElementById("reja");

    if (Number(hisob) == Number(a) + Number(b)) {
        ok.classList.add("true");
        ok.innerHTML = "Togri";
        ok.classList.remove("false");
    } else {
        ok.classList.add("false");
        ok.innerHTML = "xato";
        ok.classList.remove("true");

    }
}

function tozala() {
    var ok = document.getElementById("reja");
    ok.innerHTML = "";
}