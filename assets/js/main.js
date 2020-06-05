const dropDownButton = document.getElementById("dropdown-button");
const dropDownArrow = document.getElementById("dropdown-arrow");

var opaque = false;
var arrowDown = false;

function dropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
    if (opaque) {
        dropDownButton.setAttribute("style", "none");
        opaque = false;
    }
    else {
        dropDownButton.setAttribute("style", "opacity: 1");
        opaque = true;
    }
    if (arrowDown) {
        dropDownArrow.setAttribute("class", "arrow right");
        arrowDown = false;
    }
    else {
        dropDownArrow.setAttribute("class", "arrow down");
        arrowDown = true;
    }
}

window.onclick = function(event) {
    this.console.log(event.target);
    if (!event.target.matches('.dropdown-button') && !event.target.matches('.arrow') && !event.target.matches('span')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        if (opaque) {
            dropDownButton.setAttribute("style", "none");
            opaque = false;
        }
        if (arrowDown) {
            dropDownArrow.setAttribute("class", "arrow right");
            arrowDown = false;
        }
    }
}
