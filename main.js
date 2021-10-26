$(document).ready(function () {
    navHandler();
    particlesJS.load("background", "js-particles/particlesjs-config.json", function(){
        console.log("callback - particles.js config loaded | Thanks Vincent Garreau :)")
    });

    $("#left").click(function () {

    });
    $("#right").click(function () {

    });
});

function navHandler() {
    var navContainer = document.getElementById("nav");
    var btns = navContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}
