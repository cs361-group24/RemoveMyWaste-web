// wait until the DOM before starting buttons
document.addEventListener('DOMContentLoaded', theme);


function theme() {
    let theme = localStorage.getItem("theme");
    if (theme == "dark") {
        setDark();
    }

    else if (theme == "light") {
        setLight();
    }


    document.getElementById("darkswitch").onclick = function() {
        setDark();
    };

    document.getElementById("lightswitch").onclick = function() {
        setLight();
    };


    function setDark() {
        localStorage.setItem("theme", "dark");
        document.getElementById("dark").href = "/dark.css";

    }

    function setLight() {
        localStorage.setItem("theme", "light");
        document.getElementById("dark").href = "";
    }
}

