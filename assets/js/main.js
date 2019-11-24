var opaque = false;

function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
    var projects = document.getElementById("projects");
    if (opaque) {
        projects.setAttribute("style", "none");
        opaque = false;
    }
    else {
        projects.setAttribute("style", "opacity: 1");
        opaque = true;
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.projects')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        if (opaque) {
            var projects = document.getElementById("projects");
            projects.setAttribute("style", "none");
            opaque = false;
        }
    }
}
